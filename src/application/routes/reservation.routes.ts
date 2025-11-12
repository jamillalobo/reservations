
import { Router } from "express";
import { ReservationController } from "../controllers/ReservationController";

const router = Router();
const controller = new ReservationController();

// router.get("/", controller.list);
router.post("/", controller.create);
// router.delete("/:id", controller.cancel);


export { router as reservationRouter };
