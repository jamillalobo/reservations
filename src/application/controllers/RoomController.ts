
import { Request, Response } from "express";
import { RoomRepository } from "../../infrastructure/repositories/room.repository";

const repo = new RoomRepository();

export class RoomController {
  list = async (_req: Request, res: Response) => {
    try {
      const rooms = await repo.list();
      res.json(rooms).status(200);
    } catch (err: any) {
      res.status(500).json({ error: "Internal error" });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const room = await repo.findById(id);
      if (!room) {
        return res.status(404).json({ error: "Room not found" });
      }
      
      res.json(room).status(200);
    } catch (err: any) {
      res.status(500).json({ error: "Internal error" });
    }
  };
}
