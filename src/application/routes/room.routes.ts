
import { Router } from "express";
import { RoomController } from "../controllers/RoomController";

const router = Router();
const controller = new RoomController();

router.get("/", controller.);
router.get("/:id", controller.);

export { router as roomRouter };
