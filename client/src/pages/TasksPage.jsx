import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import api from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/tasks")
      .then((res) => setTasks(res.data.items || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (task) => {
    try {
      await api.delete(`/tasks/${task._id}`);
      setTasks((prev) => prev.filter((t) => t._id !== task._id));
    } catch (err) {
      setError("Failed to delete task.");
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  return <TaskList tasks={tasks} onDelete={handleDelete} />;
}

export default TasksPage;
