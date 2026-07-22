const notificationService = require("../services/notificationService");

const sendNotification = async (req, res) => {

    const notification = await notificationService.send(req.body);

    res.status(201).json({
        success: true,
        notification
    });

};

const getNotifications = async (req, res) => {

    const notifications = await notificationService.getAll();

    res.json({
        success: true,
        notifications
    });

};

module.exports = {
    sendNotification,
    getNotifications,
};
