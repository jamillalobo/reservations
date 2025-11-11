
import { prisma } from "../prisma";

export class RoomRepository {
  async list(where: any = {}) {
    return prisma.room.
  }

  async findById(id: number) {
    return prisma.room.
  }
}
