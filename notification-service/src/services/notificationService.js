const Notification = require("../models/Notification");

const send = async (notification) => {

    return await Notification.createNotification(notification);

};

const getAll = async () => {

    return await Notification.getNotifications();

};

module.exports = {
    send,
    getAll,
};
