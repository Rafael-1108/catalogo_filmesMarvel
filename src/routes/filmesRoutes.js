import { Router } from "express";
import * as FilmeController from "../controllers/filmesControllers.js";

const router = Router();

router.get("/", FilmeController.listarTodos);
router.get("/:id", FilmeController.listarUm);

export default router;