
import { Request, Response } from "express";
import { ReservationService } from "../../infrastructure/services/reservation.service";

const service = new ReservationService();

export class ReservationController {
  list = async (req: Request, res: Response) => {
    try {
      const result = await service.list(req.query, page, limit);
      res.json(result);
    } catch (err: any) {
      res.status(err.status || 500).json({ error: err.message || "Internal error" });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const created = await service.create(req.body);
    } catch (err: any) {
      res.status(err.status || 500).json({ error: err.message || "Internal error" });
    }
  };

  cancel = async (req: Request, res: Response) => {
    try {
      
    } catch (err: any) {
      res.status(err.status || 500).json({ error: err.message || "Internal error" });
    }
  };
}
