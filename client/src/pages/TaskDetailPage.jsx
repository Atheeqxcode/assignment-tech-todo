import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import TaskCard from "../components/TaskCard";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

function TaskDetailPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/tasks/${id}`)
      .then((res) => setTask(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = () => {
    api.delete(`/tasks/${id}`)
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!task) return <div>Task not found.</div>;

  return (
    <div>
      <TaskCard task={task} />
      <Button variant="contained" color="error" onClick={handleDelete} sx={{ mt: 2 }}>
        Delete Task
      </Button>
    </div>
  );
}

export default TaskDetailPage;
