
import { Request, Response } from "express";
import { ReservationService } from "../../infrastructure/services/reservation.service";

const service = new ReservationService();

export class ReservationController {


  async list(req: Request, res: Response) {
    try {
      const reservations = await service.list();
      return res.json(reservations);
    } catch (error) {
      console.error("Erro ao listar reservas:", error);
      return res.status(500).json({ message: "Erro ao listar reservas" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { title, userName, userEmail, roomId } = req.body;
      const reservation = await service.create({ title, userName, userEmail, roomId });
      return res.status(201).json(reservation);
    } catch (error) {
      console.error("Erro ao criar reserva:", error);
      return res.status(500).json({ message: "Erro ao criar reserva" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await service.delete(Number(id));
      return res.status(204).send();
    } catch (error) {
      console.error("Erro ao deletar reserva:", error);
      return res.status(500).json({ message: "Erro ao deletar reserva" });
    }
  }
}
