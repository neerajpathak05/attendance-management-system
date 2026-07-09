import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        employeeId: {
            type: String,
            required: true,
            unique: true
        },

        department: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Teacher", teacherSchema);