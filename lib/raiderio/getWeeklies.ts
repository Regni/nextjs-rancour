import { getCurrentWeek } from "./getCurrentWeek";
import prisma from "../db/prisma";
import { upsertWeekly } from "../db/weeklies";

export async function syncWeeklies() {
  try {
    const seassonData = await getCurrentWeek();

    const raiders = await prisma.raider.findMany({
      where: {
        active: true,
      },
      include: {
        weeklies: {
          where: {
            season: seassonData.currentSeason,
            week: seassonData.currentWeek,
          },
        },
      },
    });

    for (const raider of raiders) {
      try {
        const raiderIoResponse = await fetch(
          `https://raider.io/api/v1/characters/profile?region=eu&realm=${raider.realm}&name=${raider.name}&fields=mythic_plus_weekly_highest_level_runs`
        );
        if (!raiderIoResponse.ok) {
          throw new Error(`raider.io error: ${raiderIoResponse.statusText}`);
        }
        const raiderData = await raiderIoResponse.json();

        const weeklieArray =
          raiderData.mythic_plus_weekly_highest_level_runs.map(
            (dungeon: any) => {
              return dungeon.url;
            }
          );

        const completed =
          raiderData.mythic_plus_weekly_highest_level_runs.length > 0;

        // Check if the weeklies array is empty or does not exist yet, if doesn't exist, create empty array
        const raiderArrary =
          raider.weeklies.length > 0 ? raider.weeklies[0].runUrls : [];

        if (
          raider.weeklies.length === 0 ||
          !arraysAreEqual(weeklieArray, raiderArrary)
        ) {
          console.log(
            `Updating weeklies for ${raider.name}@${raider.realm} - Week ${seassonData.currentWeek}`
          );
          upsertWeekly({
            raiderId: raider.id,
            week: seassonData.currentWeek,
            runUrls: weeklieArray,
            completed: completed,
            season: seassonData.currentSeason,
          });
        }
      } catch (error) {
        console.error(
          `Error fetching weeklies for ${raider.name}@${raider.realm}:`,
          error
        );
        continue; // Skip this raider if there's an error
      }
    }
    return raiders;
  } catch (error) {
    console.error("Error fetching active raiders:", error);
  }
}

function arraysAreEqual(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((val, i) => val === sortedB[i]);
}

export async function getWeeklies() {
  const weekliesRoster = await prisma.raider.findMany({
    where: {
      active: true,
    },
    include: {
      weeklies: true,
    },
  });

  return weekliesRoster;
}

export async function getCurrentWeeklies() {
  const currentWeek = await getCurrentWeek();

  const weekliesRoster = await prisma.weeklies.findMany({
    where: {
      season: currentWeek.currentSeason,
      week: currentWeek.currentWeek,
    },
    include: {
      raider: {
        select: {
          name: true,
          rank: true,
          class: true,
          spec: true,
          role: true,
          raiderioUpdate: true,
          avatarUrl: true,
        },
      },
    },
  });

  return weekliesRoster;
}
