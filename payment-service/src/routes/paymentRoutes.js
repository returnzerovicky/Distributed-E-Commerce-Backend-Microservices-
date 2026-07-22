const express = require("express");

const router = express.Router();

const {
    getPayments,
    getPayment,
    createPayment,
} = require("../controllers/paymentController");

// Get all payments
router.get("/", getPayments);

// Get payment by ID
router.get("/:id", getPayment);

// Create payment
router.post("/", createPayment);

// Health Check
router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        service: "Payment Service",
        status: "Running"
    });
});

module.exports = router;
