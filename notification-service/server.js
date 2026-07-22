require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const PORT = process.env.PORT || 4005;

// Health Check
app.get("/", (req, res) => {
    res.json({
        service: "Notification Service",
        status: "Running"
    });
});

// Send Notification
app.post("/notifications", (req, res) => {

    const { email, subject, message } = req.body;

    res.status(201).json({
        success: true,
        notification: {
            email,
            subject,
            message,
            status: "SENT"
        }
    });

});

// Get Notification Status
app.get("/notifications/:id", (req, res) => {

    res.json({
        notificationId: req.params.id,
        status: "DELIVERED"
    });

});

app.listen(PORT, () => {
    console.log(`📨 Notification Service running on ${PORT}`);
});
