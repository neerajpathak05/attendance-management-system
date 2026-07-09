import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import Class from "../models/Class.js";
import Subject from "../models/Subject.js";

export const getDashboard = async (req, res) => {

    try {

        const totalStudents = await Student.countDocuments();
        const totalTeachers = await Teacher.countDocuments();
        const totalClasses = await Class.countDocuments();
        const totalSubjects = await Subject.countDocuments();

        res.json({
            success: true,
            totalStudents,
            totalTeachers,
            totalClasses,
            totalSubjects
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};