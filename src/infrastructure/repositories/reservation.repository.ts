
import { prisma } from "../prisma";

export class ReservationRepository {

  // async list() {
  //   const data = await prisma.reservation.findMany({
  //     include: { room: true },
  //     skip,
  //     take,
  //     : { startAt: "asc" },
  //   });
  //   const total = await prisma.reservation.count({  });
  // }

  // async findById(id: number) {
  //   return prisma.reservation.findUnique();
  // }

  async create(data: any) {
    return prisma.reservation.create(data);
  }

  // async update(id: number, data: any) {
  //   return prisma.reservation.update();
  // }
}
