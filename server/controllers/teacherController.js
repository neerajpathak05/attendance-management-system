import Teacher from "../models/Teacher.js";
import User from "../models/User.js";

// Add Teacher
export const addTeacher = async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            phone,
            employeeId,
            department
        } = req.body;

        const existing = await User.findOne({ email });

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        const user = await User.create({
            name,
            email,
            password,
            phone,
            role: "teacher"
        });

        const teacher = await Teacher.create({
            user: user._id,
            employeeId,
            department
        });

        res.status(201).json({
            success: true,
            teacher
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Teachers
export const getTeachers = async (req, res) => {

    try {

        const teachers = await Teacher.find().populate("user");

        res.json({
            success: true,
            teachers
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Teacher
export const deleteTeacher = async (req, res) => {

    try {

        const teacher = await Teacher.findById(req.params.id);

        await User.findByIdAndDelete(teacher.user);

        await Teacher.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Teacher Deleted"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};