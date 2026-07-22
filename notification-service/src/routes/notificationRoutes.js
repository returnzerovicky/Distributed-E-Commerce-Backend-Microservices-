const express = require("express");

const router = express.Router();

const {
    sendNotification,
    getNotifications,
} = require("../controllers/notificationController");

router.post("/", sendNotification);

router.get("/", getNotifications);

router.get("/health", (req, res) => {
    res.json({
        success: true,
        service: "Notification Service"
    });
});

module.exports = router;
