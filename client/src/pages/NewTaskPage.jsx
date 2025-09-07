import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import api from "../api";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

function NewTaskPage({ smallForm }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "" });
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setLoading(true);
    api.post("/tasks", values)
      .then(() => {
        setToast({ open: true, message: "Added a new note." });
        setTimeout(() => navigate("/"), 1200);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const closeToast = () => setToast({ open: false, message: "" });

  return (
    <div className="container" style={smallForm ? { maxWidth: 400, margin: '32px auto', padding: '24px 12px' } : {}}>
      <h2>New Task</h2>
      {error && <Alert severity="error">{error}</Alert>}
      <TaskForm onSubmit={handleSubmit} loading={loading} />
      <Toast open={toast.open} message={toast.message} onClose={closeToast} />
    </div>
  );
}

export default NewTaskPage;
