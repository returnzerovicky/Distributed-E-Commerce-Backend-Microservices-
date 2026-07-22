const pool = require("../config/db");

const createOrderTable = async () => {

    const query = `
    CREATE TABLE IF NOT EXISTS orders(

        id SERIAL PRIMARY KEY,
        customer_name VARCHAR(100),
        total NUMERIC(10,2),
        status VARCHAR(50) DEFAULT 'Pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    );
    `;

    await pool.query(query);

};

const getOrders = async () => {

    const result = await pool.query(
        "SELECT * FROM orders ORDER BY id DESC"
    );

    return result.rows;

};

const getOrder = async (id) => {

    const result = await pool.query(
        "SELECT * FROM orders WHERE id=$1",
        [id]
    );

    return result.rows[0];

};

const createOrder = async (order) => {

    const { customer_name, total } = order;

    const result = await pool.query(
        `INSERT INTO orders(customer_name,total)
         VALUES($1,$2)
         RETURNING *`,
        [customer_name, total]
    );

    return result.rows[0];

};

module.exports = {
    createOrderTable,
    getOrders,
    getOrder,
    createOrder,
};
