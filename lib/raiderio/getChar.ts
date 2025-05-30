export async function getChar(characterName: string, realmName: string) {
  const url = `https://raider.io/api/v1/characters/profile?region=eu&realm=${realmName}&name=${characterName}&fields=gear,raid_progression,mythic_plus_scores_by_season:current`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`raider.io error: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
}

export async function getRaiderioAvatar(
  characterName: string,
  realmName: string
) {
  const url = `https://raider.io/api/v1/characters/profile?region=eu&realm=${realmName}&name=${characterName}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`raider.io error: ${response.statusText}`);
  }

  const character = await response.json();
  return character.thumbnail_url;
}

export async function getExtraRaiderioData(
  characterName: string,
  realmName: string
) {
  const url = `https://raider.io/api/v1/characters/profile?region=eu&realm=${realmName}&name=${characterName}&fields=mythic_plus_weekly_highest_level_runs`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`raider.io error: ${response.statusText}`);
  }

  const character = await response.json();
  return {
    avatar_url: character.thumbnail_url,
    weeklies: character.mythic_plus_weekly_highest_level_runs,
  };
}
