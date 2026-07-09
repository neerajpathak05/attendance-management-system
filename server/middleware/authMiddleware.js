import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
    try {
        let token;

        // Check Authorization Header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        // If token not found
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access Denied. No Token Provided."
            });
        }

        // Verify JWT Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get User Details
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or Expired Token"
        });

    }
};

export default protect;