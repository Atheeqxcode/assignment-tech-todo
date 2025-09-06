import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

function TaskCard({ task, onEdit, onDelete, onDone }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, background: '#fff6f3', border: '2px solid #FA8072', minHeight: 180 }}>
      <CardContent>
        <Typography variant="h5" sx={{ color: '#FA8072', fontWeight: 700 }} gutterBottom>
          {task.title}
        </Typography>
        <Typography sx={{ mb: 1.5, color: '#555' }}>{task.description}</Typography>
        <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
          <Chip label={task.status} sx={{ background: '#f5b7b1', color: '#222', fontWeight: 500 }} />
          <Chip label={task.priority} sx={{ background: '#FA8072', color: '#fff', fontWeight: 500 }} />
          {task.tags && task.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" sx={{ background: '#ffe0e0', color: '#FA8072', fontWeight: 500 }} />
          ))}
        </div>
        <Typography variant="body2" sx={{ color: '#888', mb: 2 }}>
          Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "-"}
        </Typography>
        <div style={{ display: 'flex', gap: 8 }}>
          <Tooltip title="Mark as Done">
            <IconButton color="primary" onClick={() => onDone?.(task)}>
              <span role="img" aria-label="done" style={{ fontSize: 24 }}>✓</span>
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Task">
            <IconButton color="primary" onClick={() => navigate(`/edit/${task._id}`)}>
              <span role="img" aria-label="edit" style={{ fontSize: 24 }}>✎</span>
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Task">
            <IconButton color="secondary" onClick={() => onDelete?.(task)}>
              <span role="img" aria-label="delete" style={{ fontSize: 24 }}>✗</span>
            </IconButton>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
