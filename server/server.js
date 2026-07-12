import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import connectDB from "./config/db.js";
import messageRoutes from "./routes/messageRoutes.js";
import setupSocket from "./socket/socket.js";

dotenv.config();

connectDB();

const app = express();

// Create HTTP Server
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Socket Events
setupSocket(io);

// Routes
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Chat App Backend Running...");
});

const PORT = process.env.PORT || 5000;

// Start Server
server.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});