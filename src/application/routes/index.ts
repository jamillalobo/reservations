
import { Router } from "express";
import { reservationRouter } from "./reservation.routes";
import { roomRouter } from "./room.routes";

export const router = Router();

router.use("/reservations", reservationRouter);
router.use("/rooms", roomRouter);
