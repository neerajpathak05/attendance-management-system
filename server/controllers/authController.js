import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// =========================
// Register User
// =========================
export const register = async (req, res) => {
    try {

        const { name, email, password, role, phone } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists."
            });
        }

        const user = await User.create({
            name,
            email,
            password,
            role,
            phone
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully.",
            token: generateToken(user._id),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// =========================
// Login User
// =========================
export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        res.status(200).json({
            success: true,
            message: "Login successful.",
            token: generateToken(user._id),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// =========================
// Get Logged-in User
// =========================
export const getProfile = async (req, res) => {

    res.status(200).json({
        success: true,
        user: req.user
    });

};