import {
  getAllStudentsService,
  getStudentByIdService,
  createStudentService,
  updateStudentService,
  deleteStudentService,
} from "../services/studentService.js";

const getAllStudents = async (req, res) => {
  const students = await getAllStudentsService();
  res.status(200).json(students);
};

const getStudentById = async (req, res) => {
  const student = await getStudentByIdService(req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
};

const createStudent = async (req, res) => {
  const newStudent = await createStudentService(req.body);
  res.status(201).json(newStudent);
};

const updateStudent = async (req, res) => {
  const updatedStudent = await updateStudentService(req.params.id, req.body);

  if (!updatedStudent) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(updatedStudent);
};

const deleteStudent = async (req, res) => {
  const deletedStudent = await deleteStudentService(req.params.id);

  if (!deletedStudent) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(deletedStudent);
};

export {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};