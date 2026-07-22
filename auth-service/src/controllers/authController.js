const authService = require("../services/authService");

/**
 * Register Controller
 */
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const result = await authService.register({
            name,
            email,
            password,
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: result.user,
            token: result.token,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

/**
 * Login Controller
 */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.login({
            email,
            password,
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: result.user,
            token: result.token,
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};

/**
 * Profile Controller
 */
const profile = async (req, res) => {
    return res.status(200).json({
        success: true,
        user: req.user,
    });
};

module.exports = {
    register,
    login,
    profile,
};
