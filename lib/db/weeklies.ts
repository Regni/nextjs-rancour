interface WeekliesData {
  raiderId: string;
  week: number;
  runUrls: string[];
  completed?: boolean;
  season: number;
}
// lib/db/weeklies.ts
import prisma from "./prisma";
export async function upsertWeekly(weeklyObject: WeekliesData) {
  try {
    return await prisma.weeklies.upsert({
      where: {
        raider_season_week: {
          raiderId: weeklyObject.raiderId,
          week: weeklyObject.week,
          season: weeklyObject.season,
        },
      },
      update: {
        runUrls: weeklyObject.runUrls,
        completed: weeklyObject.completed,
      },
      create: {
        raiderId: weeklyObject.raiderId,
        week: weeklyObject.week,
        season: weeklyObject.season,
        runUrls: weeklyObject.runUrls,
        completed: weeklyObject.completed,
      },
    });
  } catch (err) {
    console.error(
      `🔥 Prisma upsert failed for Raider ID ${weeklyObject.raiderId} Week ${weeklyObject.week}:`,
      err
    );
    throw err;
  }
}
