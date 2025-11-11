
import { Request, Response } from "express";
import { RoomRepository } from "../../infrastructure/repositories/room.repository";

const repo = new RoomRepository();

export class RoomController {
  list = async (_req: Request, res: Response) => {
    try {
      const rooms = await repo.list();
    } catch (err: any) {
      res.status(500).json({ error: "Internal error" });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
    } catch (err: any) {
      res.status(500).json({ error: "Internal error" });
    }
  };
}
