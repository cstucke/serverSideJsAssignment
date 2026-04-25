const toStudentDTO = (student) => ({
  id: student._id,
  name: student.name,
  email: student.email,
  major: student.major,
  gpa: student.gpa,
  imageUrl: student.imageUrl,
  createdAt: student.createdAt,
  updatedAt: student.updatedAt,
});

const toPublicStudentDTO = (student) => ({
  id: student._id,
  email: student.email,
});

export { toStudentDTO, toPublicStudentDTO };