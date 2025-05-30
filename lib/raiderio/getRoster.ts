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

  const rosterWithAvatars = await Promise.all(
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

  for (const raider of rosterWithAvatars) {
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
      console.error("Error updating Raider:", err);
    });
  }

  return rosterWithAvatars;
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
