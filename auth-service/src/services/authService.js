const bcrypt = require("bcryptjs");

const {
    findByEmail,
    createUser,
} = require("../models/User");

const {
    generateToken,
} = require("../utils/jwt");

/**
 * Register a new user
 */
const register = async ({ name, email, password }) => {

    const existingUser = await findByEmail(email);

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({
        name,
        email,
        password: hashedPassword,
    });

    const token = generateToken({
        id: user.id,
        email: user.email,
    });

    return {
        user,
        token,
    };
};

/**
 * Login existing user
 */
const login = async ({ email, password }) => {

    const user = await findByEmail(email);

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    const token = generateToken({
        id: user.id,
        email: user.email,
    });

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    };
};

module.exports = {
    register,
    login,
};
