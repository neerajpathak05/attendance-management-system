import express from "express";

import {
markAttendance,
getAttendance,
deleteAttendance
} from "../controllers/attendanceController.js";

import protect from "../middleware/authMiddleware.js";

const router=express.Router();

router.post("/",protect,markAttendance);

router.get("/",protect,getAttendance);

router.delete("/:id",protect,deleteAttendance);

export default router;