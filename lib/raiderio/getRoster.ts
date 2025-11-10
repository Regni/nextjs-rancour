import { getExtraRaiderioData } from "@/lib/raiderio/getChar";

import prisma from "../db/prisma";
import { upsertRaider } from "../db/raider";

export async function syncRosterDB() {
  const officers = ["Regnipaw", "Shamiao", "Shurkle", "Eriktotem", "Rickiy"];
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

  //maybe later to add a check to see if the roster has changed in alerts
  const removedMembers = await deactivateMembers(rosterCharData);
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

export async function deactivateMembers(roster: any[]) {
  try {
    const dbRoster = await prisma.raider.findMany({
      where: {
        active: true,
      },
    });
    // Get all names from the current roster
    const currentNames = roster.map((member: any) => member.character.name);

    // Find members in DB that are not in current roster (to deactivate)
    const membersToDeactivate = dbRoster.filter(
      (dbMember) => !currentNames.includes(dbMember.name)
    );

    // Update inactive members
    if (membersToDeactivate.length > 0) {
      await prisma.raider.updateMany({
        where: {
          name: {
            in: membersToDeactivate.map((member) => member.name),
          },
        },
        data: {
          active: false,
        },
      });
    }
    console.log(
      `Deactivated ${membersToDeactivate.length} members from the roster.`
    );
    return membersToDeactivate;
  } catch (error) {
    console.error("Error fetching roster from DB:", error);
    throw error; //errors thrown to be handled by the caller
  }
}

export async function getRoster() {
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

  return rosterCharData;
}
