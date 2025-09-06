import React from "react";
import TaskCard from "./TaskCard";
import Grid from "@mui/material/Grid";

function TaskList({ tasks, onDelete }) {
  if (!tasks.length) return <div style={{ textAlign: 'center', marginTop: 40, color: '#FA8072', fontWeight: 500 }}>No tasks found.</div>;
  return (
    <Grid container spacing={3} sx={{ mt: 2, width: '100%' }}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task._id}>
          <TaskCard task={task} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TaskList;
