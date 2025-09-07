import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import api from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

function HistoryPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/tasks?status=done")
      .then((res) => setTasks(res.data.items?.filter(t => t.status === "done") || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  return <TaskList tasks={tasks} />;
}

export default HistoryPage;
