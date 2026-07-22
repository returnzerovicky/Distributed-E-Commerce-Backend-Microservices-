const pool = require("../config/db");

/**
 * Create Users table if it doesn't exist
 */
const createUserTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    try {
        await pool.query(query);
        console.log("✅ Users table ready");
    } catch (error) {
        console.error("❌ Error creating users table:", error.message);
    }
};

/**
 * Find user by email
 */
const findByEmail = async (email) => {
    const result = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );

    return result.rows[0];
};

/**
 * Find user by ID
 */
const findById = async (id) => {
    const result = await pool.query(
        "SELECT id, name, email, created_at FROM users WHERE id = $1",
        [id]
    );

    return result.rows[0];
};

/**
 * Create new user
 */
const createUser = async ({ name, email, password }) => {
    const result = await pool.query(
        `
        INSERT INTO users(name,email,password)
        VALUES($1,$2,$3)
        RETURNING id,name,email,created_at
        `,
        [name, email, password]
    );

    return result.rows[0];
};

module.exports = {
    createUserTable,
    findByEmail,
    findById,
    createUser,
};
