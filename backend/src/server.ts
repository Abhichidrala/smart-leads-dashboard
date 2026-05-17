import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import leadRoutes from "./routes/leadRoutes";

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
  console.log("MongoDB Error:");
  console.log(error);
});

app.get("/", (req, res) => {
  res.send("API Running");
});