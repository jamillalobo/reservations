
import { Router } from "express";
import { RoomController } from "../controllers/RoomController";

const router = Router();
const controller = new RoomController();

router.get("/", controller.list);
router.get("/:id", controller.getById);

export { router as roomRouter };
