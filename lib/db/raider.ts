import prisma from "./prisma";

interface RaiderIOPlayer {
  name: string;
  class: string;
  spec: string;
}

export async function upsertRaider(player: RaiderIOPlayer) {
  return prisma.raider.upsert({
    where: { name: player.name },
    update: {
      class: player.class,
      spec: player.spec,
      active: true,
      lastSeen: new Date(),
    },
    create: {
      name: player.name,
      class: player.class,
      spec: player.spec,
      lastSeen: new Date(),
    },
  });
}
