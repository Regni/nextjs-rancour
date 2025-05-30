import { DateTime } from "next-auth/providers/kakao";
import prisma from "./prisma";

interface RaiderIOPlayer {
  name: string;
  realm: string;
  rank: number;
  class: string;
  spec: string;
  role: string;
  raiderioUpdate: Date;
  avatarUrl: string;
}

export async function upsertRaider(player: RaiderIOPlayer) {
  return prisma.raider.upsert({
    where: {
      name_realm: {
        name: player.name,
        realm: player.realm,
      },
    },
    update: {
      class: player.class,
      spec: player.spec,
      realm: player.realm,
      rank: player.rank,
      role: player.role,
      raiderioUpdate: player.raiderioUpdate,
      avatarUrl: player.avatarUrl,
      active: true,
      lastSeen: new Date(),
    },
    create: {
      name: player.name,
      class: player.class,
      spec: player.spec,
      realm: player.realm,
      rank: player.rank,
      role: player.role,
      raiderioUpdate: new Date(player.raiderioUpdate),
      avatarUrl: player.avatarUrl,
      active: true,
      lastSeen: new Date(),
    },
  });
}
