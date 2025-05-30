import { getExtraRaiderioData } from "@/lib/raiderio/getChar";

import prisma from "../db/prisma";
import { upsertRaider } from "../db/raider";

export async function syncRosterDB() {
  const officers = [
    "Regnipaw",
    "Snailmiao",
    "Shurkweave",
    "Eriktotem",
    "Rickiy",
  ];
  const url =
    "https://raider.io/api/v1/guilds/profile?region=eu&realm=Draenor&name=Rancour&fields=members";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`raider.io error: ${response.statusText}`);
  }

  const data = await response.json();

  const roster = data.members.filter(
    (member: any) =>
      member.rank === 5 ||
      member.rank === 4 ||
      officers.includes(member.character.name)
  );

  const rosterCharData = await Promise.all(
    roster.map(async (raider: any) => {
      const extraData = await getExtraRaiderioData(
        raider.character.name,
        raider.character.realm
      );

      return {
        ...raider,
        character: {
          ...raider.character,
          avatar_url: extraData.avatar_url,
          weeklies: extraData.weeklies,
        },
      };
    })
  );

  //update db
  const errors: { name: string; error: any }[] = [];
  for (const raider of rosterCharData) {
    await upsertRaider({
      name: raider.character.name,
      realm: raider.character.realm,
      class: raider.character.class,
      spec: raider.character.active_spec_name,
      role: raider.character.active_spec_role,
      rank: raider.rank,
      raiderioUpdate: new Date(raider.character.last_crawled_at),
      avatarUrl: raider.character.avatar_url,
    }).catch((err) => {
      console.log(err);
      errors.push({ name: raider.character.name, error: err });
      console.log(
        `Error syncing raider ${raider.character.name}: ${err.message}`
      );
    });
  }

  //errors thrown to be handled by the caller
  if (errors.length > 0) {
    console.log(errors);
    throw new Error(
      `Sync failed for ${errors.length} raiders: ${errors
        .map((e) => e.name)
        .join(", ")}`
    );
  }
  return true;
}

export async function getRosterDB() {
  const roster = await prisma.raider.findMany({
    where: {
      active: true,
    },
    orderBy: {
      rank: "asc",
    },
  });

  return roster;
}
