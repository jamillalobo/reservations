
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.room.createMany({
    data: [
      { name: "Sala 101", type: "SALA", capacity: 20, location: "Bloco A" },
      { name: "Sala 102", type: "SALA", capacity: 15, location: "Bloco A" },
      { name: "Lab Mobile", type: "LABORATORIO", capacity: 12, location: "Bloco B" },
      { name: "Lab IoT", type: "LABORATORIO", capacity: 10, location: "Bloco C" }
    ],
    skipDuplicates: true,
  });

  const room = await prisma.room.findUnique({ where: { name: "Sala 101" } });
  if (room) {
    await prisma.reservation.createMany({
      data: [
        {
          code: `RSV-${Date.now()}`,
          title: "Aula Introdução",
          userName: "Aluno Exemplo",
          userEmail: "aluno@example.com",
          roomId: room.id,
          startAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
          endAt: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(),
        },
      ],
      skipDuplicates: true,
    });
  }

  console.log("Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
