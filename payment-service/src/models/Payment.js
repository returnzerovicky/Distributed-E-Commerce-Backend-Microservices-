const pool = require("../config/db");

const createPaymentTable = async () => {

    const query = `
    CREATE TABLE IF NOT EXISTS payments(

        id SERIAL PRIMARY KEY,
        order_id INTEGER NOT NULL,
        amount NUMERIC(10,2) NOT NULL,
        method VARCHAR(50),
        status VARCHAR(30) DEFAULT 'SUCCESS',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    );
    `;

    await pool.query(query);

};

const getPayments = async () => {

    const result = await pool.query(
        "SELECT * FROM payments ORDER BY id DESC"
    );

    return result.rows;

};

const getPayment = async (id) => {

    const result = await pool.query(
        "SELECT * FROM payments WHERE id=$1",
        [id]
    );

    return result.rows[0];

};

const createPayment = async (payment) => {

    const { order_id, amount, method } = payment;

    const result = await pool.query(
        `INSERT INTO payments(order_id,amount,method)
         VALUES($1,$2,$3)
         RETURNING *`,
        [order_id, amount, method]
    );

    return result.rows[0];

};

module.exports = {
    createPaymentTable,
    getPayments,
    getPayment,
    createPayment,
};
