import { getRaiderioAvatar } from "@/lib/raiderio/getChar";

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

  const rosterWithAvatars = await Promise.all(
    roster.map(async (raider: any) => {
      const avatarUrl = await getRaiderioAvatar(
        raider.character.name,
        raider.character.realm
      );
      return {
        ...raider,
        character: {
          ...raider.character,
          avatar_url: avatarUrl,
        },
      };
    })
  );

  return rosterWithAvatars;
}
