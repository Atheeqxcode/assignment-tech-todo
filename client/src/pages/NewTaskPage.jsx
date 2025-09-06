import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import api from "../api";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

function NewTaskPage() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setLoading(true);
    api.post("/tasks", values)
      .then(() => navigate("/"))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container">
      <h2>New Task</h2>
      {error && <Alert severity="error">{error}</Alert>}
      <TaskForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

export default NewTaskPage;
