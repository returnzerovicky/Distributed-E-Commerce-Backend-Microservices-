const express = require("express");

const router = express.Router();

const {
    getOrders,
    getOrder,
    createOrder,
} = require("../controllers/orderController");

// Get all orders
router.get("/", getOrders);

// Get order by ID
router.get("/:id", getOrder);

// Create order
router.post("/", createOrder);

// Health Check
router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        service: "Order Service",
        status: "Running"
    });
});

module.exports = router;
