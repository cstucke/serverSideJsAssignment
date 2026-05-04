import jwt from "jsonwebtoken";
import {
  getAllStudentsService,
  getStudentByIdService,
  createStudentService,
  updateStudentService,
  deleteStudentService,
  getStudentByEmailService
} from "../services/studentService.js";
import { toStudentDTO, toPublicStudentDTO } from "../dto/studentDTO.js";
import bcrypt from "bcrypt";

const getAllStudents = async (req, res) => {
  try {
    const students = await getAllStudentsService();
    const studentsDTO = students.map(toPublicStudentDTO);
    res.status(200).json(studentsDTO);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await getStudentByIdService(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(toStudentDTO(student));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, email, password, gpa, major } = req.body;

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newStudent = {
      name,
      email,
      password,
      gpa,
      major,
      imageUrl,
    };

    const createdStudent = await createStudentService(newStudent);

    const token = jwt.sign(
      { userId: createdStudent._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      token,
      user: toStudentDTO(createdStudent),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await updateStudentService(req.params.id, req.body);

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(toStudentDTO(updatedStudent));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await deleteStudentService(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const student = await getStudentByEmailService(email);

    if (!student) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatches = await bcrypt.compare(password, student.password);

    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: student._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      token,
      user: toStudentDTO(student),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  loginStudent
};