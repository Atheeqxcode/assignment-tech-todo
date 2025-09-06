import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const statusOptions = ["todo", "in_progress", "done"];
const priorityOptions = ["low", "medium", "high"];

function TaskForm({ initialValues = {}, onSubmit, loading }) {
  const [values, setValues] = useState({
    title: initialValues.title || "",
    description: initialValues.description || "",
    status: initialValues.status || "todo",
    priority: initialValues.priority || "medium",
    dueDate: initialValues.dueDate || "",
    tags: initialValues.tags ? initialValues.tags.join(", ") : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitValues = {
      ...values,
      tags: values.tags.split(",").map((t) => t.trim()).filter(Boolean),
    };
    onSubmit(submitValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={values.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="Status"
        name="status"
        value={values.status}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {statusOptions.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Priority"
        name="priority"
        value={values.priority}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {priorityOptions.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </TextField>
      <TextField
        label="Due Date"
        name="dueDate"
        type="date"
        value={values.dueDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Tags (comma separated)"
        name="tags"
        value={values.tags}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ mt: 2 }}>
        {loading ? "Saving..." : "Save Task"}
      </Button>
    </form>
  );
}

export default TaskForm;
