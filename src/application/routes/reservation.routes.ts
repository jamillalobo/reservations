
import { Router } from "express";
import { ReservationController } from "../controllers/ReservationController";

const router = Router();
const controller = new ReservationController();

router.get("/", controller.);
router.post("/", controller.);
router.delete("/:id", );

export { router as reservationRouter };
