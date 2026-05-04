import mongoose from "mongoose";

const computerLabSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        roomNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        building: {
            type: String,
            required: true,
            trim: true,
        },
        capacity: {
            type: Number,
            required: true,
            min: 1,
        },
        hasProjector: {
            type: Boolean,
            default: false,
        },
        operatingSystem: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

const ComputerLab = mongoose.model("ComputerLab", computerLabSchema);

export default ComputerLab;