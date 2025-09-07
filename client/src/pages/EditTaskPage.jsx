import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import api from "../api";
import Alert from "@mui/material/Alert";
import { useParams, useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

function EditTaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "" });
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/tasks/${id}`)
      .then((res) => setTask(res.data))
      .catch((err) => setError(err.message));
  }, [id]);

  const handleSubmit = (values) => {
    setLoading(true);
    api.patch(`/tasks/${id}`, values)
      .then(() => {
        setToast({ open: true, message: "Edited the note." });
        setTimeout(() => navigate("/"), 1200);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const closeToast = () => setToast({ open: false, message: "" });

  if (error) return <Alert severity="error">{error}</Alert>;
  if (!task) return <div>Loading...</div>;

  return (
    <div className="container" style={{ maxWidth: 400, margin: '32px auto', padding: '24px 12px', background: '#fff6f3', borderRadius: 16, boxShadow: '0 4px 24px rgba(250,128,114,0.12)' }}>
      <h2 style={{ color: '#FA8072', fontWeight: 700 }}>Edit Task</h2>
      <TaskForm initialValues={task} onSubmit={handleSubmit} loading={loading} />
      <Toast open={toast.open} message={toast.message} onClose={closeToast} />
    </div>
  );
}

export default EditTaskPage;
