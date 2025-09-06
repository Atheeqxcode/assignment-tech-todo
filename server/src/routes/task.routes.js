import express from "express";
import * as taskController from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", taskController.listTasks);
router.post("/", taskController.createTask);
router.get("/:id", taskController.getTask);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;
