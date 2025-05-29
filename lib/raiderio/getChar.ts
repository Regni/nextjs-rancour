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
