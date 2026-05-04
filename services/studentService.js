import bcrypt from "bcrypt";
import Student from "../models/studentModel.js";

const SALT_ROUNDS = 10;

const getAllStudentsService = async () => {
  return await Student.find();
};

const getStudentByIdService = async (id) => {
  return await Student.findById(id);
};

const createStudentService = async (studentData) => {
  const existingStudent = await Student.findOne({ email: studentData.email });

  if (existingStudent) {
    throw new Error("Student already exists");
  }

  const hashedPassword = await bcrypt.hash(studentData.password, SALT_ROUNDS);

  return await Student.create({
    ...studentData,
    password: hashedPassword,
  });
};

const updateStudentService = async (id, studentData) => {
  if (studentData.password) {
    studentData.password = await bcrypt.hash(studentData.password, SALT_ROUNDS);
  }

  return await Student.findByIdAndUpdate(id, studentData, {
    new: true,
    runValidators: true,
  });
};

const deleteStudentService = async (id) => {
  return await Student.findByIdAndDelete(id);
};

const getStudentByEmailService = async (email) => {
  return await Student.findOne({ email });
};

export {
  getAllStudentsService,
  getStudentByIdService,
  createStudentService,
  updateStudentService,
  deleteStudentService,
  getStudentByEmailService
};