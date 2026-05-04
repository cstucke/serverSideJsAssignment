import express from "express";
import {
  getAllComputerLabs,
  getComputerLabById,
  createComputerLab,
  updateComputerLab,
  deleteComputerLab,
} from "../controllers/computerLabController.js";
import authCheck from "../middleware/auth-middleware.js";

const computerLabRouter = express.Router();

computerLabRouter.get("/", authCheck, getAllComputerLabs);
computerLabRouter.get("/:id", authCheck, getComputerLabById);
computerLabRouter.post("/", authCheck, createComputerLab);
computerLabRouter.put("/:id", authCheck, updateComputerLab);
computerLabRouter.delete("/:id", authCheck, deleteComputerLab);

export default computerLabRouter;