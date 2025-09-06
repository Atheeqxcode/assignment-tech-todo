import * as taskService from "../services/task.service.js";
import { taskSchema } from "../utils/validation.js";

export const listTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.listTasks();
    res.json({ items: tasks });
  } catch (err) {
    next(err);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const parsed = taskSchema.parse(req.body);
    const task = await taskService.createTask(parsed);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const getTask = async (req, res, next) => {
  try {
    const task = await taskService.getTask(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const parsed = taskSchema.partial().parse(req.body);
    const task = await taskService.updateTask(req.params.id, parsed);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const result = await taskService.deleteTask(req.params.id);
    if (!result) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};
