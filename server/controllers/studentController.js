import Student from "../models/Student.js";
import User from "../models/User.js";

// ======================
// Add Student
// ======================
export const addStudent = async (req, res) => {
    try {

        const {
            name,
            email,
            password,
            phone,
            rollNumber,
            semester,
            section
        } = req.body;

        // Create User
        const user = await User.create({
            name,
            email,
            password,
            phone,
            role: "student"
        });

        // Create Student
        const student = await Student.create({
            user: user._id,
            rollNumber,
            semester,
            section
        });

        res.status(201).json({
            success: true,
            message: "Student Added Successfully",
            student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ======================
// Get All Students
// ======================
export const getStudents = async (req, res) => {
    try {

        const students = await Student.find().populate("user");

        res.status(200).json({
            success: true,
            students
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ======================
// Get Student By ID
// ======================
export const getStudentById = async (req, res) => {
    try {

        const student = await Student.findById(req.params.id).populate("user");

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });
        }

        res.status(200).json({
            success: true,
            student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ======================
// Update Student
// ======================
export const updateStudent = async (req, res) => {

    try {

        const { rollNumber, semester, section } = req.body;

        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });
        }

        student.rollNumber = rollNumber;
        student.semester = semester;
        student.section = section;

        await student.save();

        res.status(200).json({
            success: true,
            message: "Student Updated Successfully",
            student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ======================
// Delete Student
// ======================
export const deleteStudent = async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });
        }

        await User.findByIdAndDelete(student.user);

        await Student.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Student Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};