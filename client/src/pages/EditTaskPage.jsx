import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import api from "../api";
import Alert from "@mui/material/Alert";
import { useParams, useNavigate } from "react-router-dom";

function EditTaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/tasks/${id}`)
      .then((res) => setTask(res.data))
      .catch((err) => setError(err.message));
  }, [id]);

  const handleSubmit = (values) => {
    setLoading(true);
    api.patch(`/tasks/${id}`, values)
      .then(() => navigate("/"))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  if (error) return <Alert severity="error">{error}</Alert>;
  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Task</h2>
      <TaskForm initialValues={task} onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

export default EditTaskPage;
