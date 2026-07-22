const pool = require("../config/db");

const createNotificationTable = async () => {

    const query = `
    CREATE TABLE IF NOT EXISTS notifications(

        id SERIAL PRIMARY KEY,
        email VARCHAR(255),
        subject VARCHAR(255),
        message TEXT,
        status VARCHAR(30) DEFAULT 'SENT',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    );
    `;

    await pool.query(query);

};

const createNotification = async (notification) => {

    const { email, subject, message } = notification;

    const result = await pool.query(
        `INSERT INTO notifications(email,subject,message)
        VALUES($1,$2,$3)
        RETURNING *`,
        [email, subject, message]
    );

    return result.rows[0];

};

const getNotifications = async () => {

    const result = await pool.query(
        "SELECT * FROM notifications ORDER BY id DESC"
    );

    return result.rows;

};

module.exports = {
    createNotificationTable,
    createNotification,
    getNotifications,
};
