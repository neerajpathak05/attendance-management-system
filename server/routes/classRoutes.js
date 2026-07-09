import express from "express";

import {
addClass,
getClasses,
deleteClass
} from "../controllers/classController.js";

import protect from "../middleware/authMiddleware.js";

const router=express.Router();

router.post("/",protect,addClass);

router.get("/",protect,getClasses);

router.delete("/:id",protect,deleteClass);

export default router;