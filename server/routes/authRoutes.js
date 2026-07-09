import express from "express";
import {
    register,
    login,
    getProfile
} from "../controllers/authController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ============================
// Public Routes
// ============================

// Register User
router.post("/register", register);

// Login User
router.post("/login", login);

// ============================
// Protected Routes
// ============================

// Get Logged-in User Profile
router.get("/profile", protect, getProfile);

export default router;