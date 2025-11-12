
import { ReservationRepository } from "../repositories/reservation.repository";
import { RoomRepository } from "../repositories/room.repository";

const reservationRepo = new ReservationRepository();
const roomRepo = new RoomRepository();

export class ReservationService {
  // async list(filters: any, page = 1, limit = 20) {
    
  //   return { data, meta: { page, limit, total } };
  // }

  async create(title: string, userName: string, userEmail: string, roomId: string) {
    const now = new Date()
    const created = await reservationRepo.create({
      data: {
        code: `RSV-${now}`, 
        title: title,
        userName: userName, 
        userEmail: userEmail,
        roomId: roomId, 
        startAt: new Date(),
        endAt: new Date()
      }
    })
    return created;
  }

  // async cancel(id: number) {
  //   await reservationRepo.update(id, { status: "CANCELLED" });
  //   return;
  // }
}
