require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.API_GATEWAY_PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        success: true,
        service: "API Gateway",
        message: "Distributed E-Commerce Backend",
        version: "1.0.0"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "Healthy",
        gateway: "Running"
    });
});

// Authentication
app.use("/api/auth", (req, res) => {
    res.json({
        service: "Authentication Service",
        endpoint: req.originalUrl
    });
});

// Products
app.use("/api/products", (req, res) => {
    res.json({
        service: "Product Service",
        endpoint: req.originalUrl
    });
});

// Orders
app.use("/api/orders", (req, res) => {
    res.json({
        service: "Order Service",
        endpoint: req.originalUrl
    });
});

// Payments
app.use("/api/payments", (req, res) => {
    res.json({
        service: "Payment Service",
        endpoint: req.originalUrl
    });
});

// Notifications
app.use("/api/notifications", (req, res) => {
    res.json({
        service: "Notification Service",
        endpoint: req.originalUrl
    });
});

app.listen(PORT, () => {
    console.log(`🚀 API Gateway running on port ${PORT}`);
});
