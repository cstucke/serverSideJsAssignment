import express from "express";
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  loginStudent
} from "../controllers/studentController.js";
import multerConfig from "../middleware/multer-config.js";
import validateStudent from "../middleware/validateStudent.js";
import authCheck from "../middleware/auth-middleware.js";

const studentRouter = express.Router();

studentRouter.post(
  "/signup",
  (req, res, next) => {
    multerConfig(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      next();
    });
  },
  validateStudent,
  createStudent
);

studentRouter.get("/", authCheck, getAllStudents);
studentRouter.get("/:id", authCheck, getStudentById);
studentRouter.put("/:id", authCheck, updateStudent);
studentRouter.delete("/:id", authCheck, deleteStudent);
studentRouter.post("/login", loginStudent);

export default studentRouter;