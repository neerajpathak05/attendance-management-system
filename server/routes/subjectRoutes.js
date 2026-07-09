import express from "express";

import {
addSubject,
getSubjects,
deleteSubject
} from "../controllers/subjectController.js";

import protect from "../middleware/authMiddleware.js";

const router=express.Router();

router.post("/",protect,addSubject);

router.get("/",protect,getSubjects);

router.delete("/:id",protect,deleteSubject);

export default router;