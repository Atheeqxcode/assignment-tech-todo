import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import mongoose from "mongoose";
import taskRoutes from "./routes/task.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(compression());

connectDB();

app.use("/api/tasks", taskRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
