
import { prisma } from "../prisma";

export class RoomRepository {
  async list() {
    return prisma.room.findMany();
  }
 
  async findById(id: number) {
    return prisma.room.findUnique({ where: { id } });
  }
}
