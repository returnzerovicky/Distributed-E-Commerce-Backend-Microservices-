const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";
const JWT_EXPIRES = process.env.JWT_EXPIRES_IN || "7d";

/**
 * Generate JWT Token
 */
const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES,
    });
};

/**
 * Verify JWT Token
 */
const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

/**
 * Decode Token Without Verification
 */
const decodeToken = (token) => {
    return jwt.decode(token);
};

module.exports = {
    generateToken,
    verifyToken,
    decodeToken,
};
