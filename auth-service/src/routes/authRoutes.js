const express = require("express");

const router = express.Router();

const {
    register,
    login,
    profile,
} = require("../controllers/authController");

const {
    authenticate,
} = require("../middleware/authMiddleware");

// Public Routes
router.post("/register", register);
router.post("/login", login);

// Protected Route
router.get("/profile", authenticate, profile);

// Health Check
router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        service: "Authentication Service",
        status: "Running"
    });
});

module.exports = router;
