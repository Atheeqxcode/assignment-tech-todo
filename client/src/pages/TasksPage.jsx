import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import api from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Toast from "../components/Toast";

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ open: false, message: "" });

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
      setToast({ open: true, message: "Deleted the note." });
    } catch (err) {
      setError("Failed to delete task.");
    }
  };

  const handleDone = async (task) => {
    try {
      await api.patch(`/tasks/${task._id}`, { status: "done" });
      setTasks((prev) => prev.filter((t) => t._id !== task._id));
      setToast({ open: true, message: "Completed the note. Moved to history." });
    } catch (err) {
      setError("Failed to mark as done.");
    }
  };

  const closeToast = () => setToast({ open: false, message: "" });

  // Only show non-completed tasks
  const activeTasks = tasks.filter((t) => t.status !== "done");

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  return (
    <>
      <TaskList tasks={activeTasks} onDelete={handleDelete} onDone={handleDone} />
      <Toast open={toast.open} message={toast.message} onClose={closeToast} />
    </>
  );
}

export default TasksPage;
