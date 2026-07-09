import express from "express";
import {
    addTeacher,
    getTeachers,
    deleteTeacher
} from "../controllers/teacherController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addTeacher);
router.get("/", protect, getTeachers);
router.delete("/:id", protect, deleteTeacher);

export default router;