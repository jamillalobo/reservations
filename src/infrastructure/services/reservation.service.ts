
import { ReservationRepository } from "../repositories/reservation.repository";
import { RoomRepository } from "../repositories/room.repository";

const reservationRepo = new ReservationRepository();
const roomRepo = new RoomRepository();

export class ReservationService {
  async list(filters: any, page = 1, limit = 20) {
    
    return { data, meta: { page, limit, total } };
  }

  async create(payload: any) {
    // students: implement business rules here
    return created;
  }

  async cancel(id: number) {
    await reservationRepo.update(id, { status: "CANCELLED" });
    return;
  }
}
