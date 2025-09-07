import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import TasksPage from "./pages/TasksPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import NewTaskPage from "./pages/NewTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import Footer from "./components/Footer";
import HistoryPage from "./pages/HistoryPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FA8072",
    },
    secondary: {
      main: "#f44336",
    },
    background: {
      default: "#fff6f3",
    },
  },
  typography: {
    fontFamily: "Poppins, Inter, Segoe UI, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <div style={{ minHeight: 'calc(100vh - 80px)', background: '#fff6f3', padding: '32px 0' }}>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/tasks/:id" element={<TaskDetailPage />} />
            <Route path="/new" element={<NewTaskPage smallForm={true} />} />
            <Route path="/edit/:id" element={<EditTaskPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
