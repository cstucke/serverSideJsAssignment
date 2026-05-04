import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import studentRouter from "./routes/studentRoutes.js";
import computerLabRouter from "./routes/computerLabRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/students", studentRouter);
app.use("/api/computer-labs", computerLabRouter);

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

startServer();