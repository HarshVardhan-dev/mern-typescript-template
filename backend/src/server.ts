import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mern-template")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
