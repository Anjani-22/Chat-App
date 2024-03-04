import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import usersRoutes from "./routes/users.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
//import cors from "cors";
//import corsMiddleware from "./middleware/corsMiddleware.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
//app.use(cors());
app.use(express.json());
// app.use(corsMiddleware);
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Root route");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log("Running on port", PORT);
});
