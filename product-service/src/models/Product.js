const pool = require("../config/db");

const createProductTable = async () => {

    const query = `
    CREATE TABLE IF NOT EXISTS products(

        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price NUMERIC(10,2) NOT NULL,
        stock INTEGER DEFAULT 0,
        category VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    );
    `;

    await pool.query(query);

};

const getAllProducts = async () => {

    const result = await pool.query(
        "SELECT * FROM products ORDER BY id DESC"
    );

    return result.rows;

};

const getProductById = async (id) => {

    const result = await pool.query(
        "SELECT * FROM products WHERE id=$1",
        [id]
    );

    return result.rows[0];

};

const createProduct = async (product) => {

    const { name, description, price, stock, category } = product;

    const result = await pool.query(
        `INSERT INTO products(name,description,price,stock,category)
         VALUES($1,$2,$3,$4,$5)
         RETURNING *`,
        [name, description, price, stock, category]
    );

    return result.rows[0];

};

module.exports = {
    createProductTable,
    getAllProducts,
    getProductById,
    createProduct,
};
