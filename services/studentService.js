import Student from "../models/studentModel.js";

const getAllStudentsService = async () => {
  return await Student.find();
};

const getStudentByIdService = async (id) => {
  return await Student.findById(id);
};

const createStudentService = async (studentData) => {
  return await Student.create(studentData);
};

const updateStudentService = async (id, studentData) => {
  return await Student.findByIdAndUpdate(id, studentData, {
    new: true,
    runValidators: true,
  });
};

const deleteStudentService = async (id) => {
  return await Student.findByIdAndDelete(id);
};

export {
  getAllStudentsService,
  getStudentByIdService,
  createStudentService,
  updateStudentService,
  deleteStudentService,
};