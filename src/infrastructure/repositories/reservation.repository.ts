
import { prisma } from "../prisma";

export class ReservationRepository {
  async list(skip = 0, take = 20) {
    const data = await prisma.reservation.findMany({
      include: { room: true }, 
      skip,
      take,
      orderBy: { startAt: "asc" }, 
    });

    const total = await prisma.reservation.count();

    return { data, total };
  }

  async findById(id: number) {
    return prisma.reservation.findUnique({
      where: { id },
      include: { room: true },
    });
  }

  async create(data: any) {
    return prisma.reservation.create({
      data,
    });
  }

  async update(id: number, data: any) {
    return prisma.reservation.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.reservation.delete({
      where: { id },
    });
  }
}
