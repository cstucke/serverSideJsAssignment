import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    major: { type: String, required: true, trim: true },
    gpa: { type: Number, min: 0, max: 4 },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;