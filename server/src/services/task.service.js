import Task from "../models/task.model.js";

export const listTasks = async () => {
  return await Task.find().sort({ createdAt: -1 });
};

export const createTask = async (data) => {
  const task = new Task(data);
  return await task.save();
};

export const getTask = async (id) => {
  return await Task.findById(id);
};

export const updateTask = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};
