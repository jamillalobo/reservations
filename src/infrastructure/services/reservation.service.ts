
import { ReservationRepository } from "../repositories/reservation.repository";
import { RoomRepository } from "../repositories/room.repository";

const reservationRepo = new ReservationRepository();
const roomRepo = new RoomRepository();

export class ReservationService {
  async list() {
    const reservations = await reservationRepo.list();
    return reservations;
  }

  async create(payload: {
    title: string;
    userName: string;
    userEmail: string;
    roomId: number;
  }) {
    console.log("AAAA", payload.title)

    const now = new Date()
    const code = `RSV-${now}`


    const newPayload = {
      code, 
      title: payload.title,
      userName: payload.userName, 
      userEmail: payload.userEmail, 
      roomId: payload.roomId, 
      startAt: new Date(),
      endAt: new Date()
    }
    console.log("payload",newPayload)

    const created = await reservationRepo.create(newPayload);
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
