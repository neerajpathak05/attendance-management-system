import express from "express";

import {
    addStudent,
    getStudents,
    getStudentById,
    deleteStudent
} from "../controllers/studentController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Add Student
router.post("/", protect, addStudent);

// Get All Students
router.get("/", protect, getStudents);

// Get Student By ID
router.get("/:id", protect, getStudentById);

// Delete Student
router.delete("/:id", protect, deleteStudent);

export default router;