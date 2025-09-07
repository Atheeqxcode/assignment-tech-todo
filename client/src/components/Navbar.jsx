import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" className="app-bar" sx={{ background: '#d54939ff', boxShadow: 2 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 1, sm: 2 } }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            To-Do Manager
          </Link><h2 style={{display: 'inline', marginLeft: 10, fontSize: '0.9rem', fontWeight: 400, color: '#ffe1dc', justifyContent: 'center'}}>IRON LADY</h2>
        </Typography>
        <div style={{ display: 'flex', gap: 16 }}>
          <Link to="/history" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: '1rem', padding: '8px 16px', borderRadius: '6px', background: '#FA8072', boxShadow: '0 2px 8px rgba(25,118,210,0.08)' }}>
            History
          </Link>
          <Link to="/new" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: '1rem', padding: '8px 16px', borderRadius: '6px', background: '#1565c0', boxShadow: '0 2px 8px rgba(25,118,210,0.08)' }}>
            New Task
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
