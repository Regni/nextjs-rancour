export async function getCurrentWeek(): Promise<any> {
  const seasonData = await getCurrentSeason();
  const currentWeekResponse = await fetch("https://raider.io/api/v1/periods");
  if (!currentWeekResponse.ok) {
    throw new Error(`raider.io error: ${currentWeekResponse.statusText}`);
  }
  const currentWeekTest = await currentWeekResponse.json();

  const currentWeek = new Date(currentWeekTest.periods[1].current.start);
  const startTier = new Date(seasonData.seasonStart);
  const weekNumber = Math.floor(
    (currentWeek.getTime() - startTier.getTime()) / (1000 * 60 * 60 * 24 * 7)
  );

  return {
    currentWeek: weekNumber,
    currentSeason: seasonData.currentSeason,
  };
}

export async function getCurrentSeason(): Promise<any> {
  //manually change the expansion_id when new expansion comes out
  const seasonDataResponse = await fetch(
    "https://raider.io/api/v1/mythic-plus/static-data?expansion_id=10"
  );
  if (!seasonDataResponse.ok) {
    throw new Error(`raider.io error: ${seasonDataResponse.statusText}`);
  }
  const seasonData = await seasonDataResponse.json();

  const currentSeason = seasonData.seasons.find(
    (season: any) => season.is_main_season === true
  );
  return {
    currentSeason: currentSeason.blizzard_season_id,
    seasonStart: currentSeason.starts.eu,
  };
}
