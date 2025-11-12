
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
    startAt: Date;
    endAt: Date;
  }) {

    const now = new Date()
    const code = `RSV-${now}`

    const room = await roomRepo.findById(payload.roomId);
    if (!room) {
      throw new Error("Room not found");
    }

    if (payload.startAt >= payload.endAt) {
      throw new Error("Invalid reservation time interval");
    }

    const existingReservations = await reservationRepo.findByRoomIdAndTimeInterval(payload.roomId, payload.startAt, payload.endAt);

    if (existingReservations.length > 0) {
      throw new Error("Room already has an active reservation");
    }

    const newPayload = {
      code, 
      title: payload.title,
      userName: payload.userName,
      userEmail: payload.userEmail,
      roomId: payload.roomId,
      startAt: payload.startAt,
      endAt: payload.endAt
    }
    console.log("payload", newPayload)

    const created = await reservationRepo.create(newPayload);
    return created;
  }

  async update(id: number, payload: Partial<{
    title: string;
    userName: string;
    userEmail: string;
    roomId: number;
  }>) {
    const reservation = await reservationRepo.findById(id);
    if (!reservation) {
      throw new Error("Reservation not found");
    }

    const updated = await reservationRepo.update(id, payload);
    return updated;
  }

  async delete(id: number) {
    const reservation = await reservationRepo.findById(id);
    if (!reservation) {
      throw new Error("Reservation not found");
    }

    await reservationRepo.delete(id);
    return;
  }

}
