import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    major: { type: String, required: true, trim: true },
    gpa: { type: Number, required: true, min: 0, max: 4 },
    imageUrl: { type: String, default: null },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;