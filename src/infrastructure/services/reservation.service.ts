
import { ReservationRepository } from "../repositories/reservation.repository";
import { RoomRepository } from "../repositories/room.repository";

const reservationRepo = new ReservationRepository();
const roomRepo = new RoomRepository();

export class ReservationService {
  async list() {
    const reservations = await reservationRepo.list();
    return reservations;
  }

  async create(payload: any) {
    console.log(payload)
    const room = await roomRepo.findById(payload.roomId);
    if (!room) {
      throw new Error("Room not found");
    }

    const created = await reservationRepo.create(payload);
    return created;
  }

  async delete(id: number) {
    const reservation = await reservationRepo.findById(id);
    if (!reservation) {
      throw new Error("Reservation not found");
    }

    await reservationRepo.delete(id);
    return;
  }

  async cancel(id: number) {
    await reservationRepo.update(id, { status: "CANCELLED" });
    return;
  }
}
