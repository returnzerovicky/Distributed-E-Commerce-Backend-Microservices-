require("./src/server");

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const PORT = process.env.PORT || 4004;

// Health Check
app.get("/", (req, res) => {
    res.json({
        service: "Payment Service",
        status: "Running"
    });
});

// Create Payment
app.post("/payments", (req, res) => {

    const payment = {
        paymentId: uuid(),
        orderId: req.body.orderId,
        amount: req.body.amount,
        method: req.body.method,
        status: "SUCCESS"
    };

    res.status(201).json({
        success: true,
        payment
    });

});

// Get Payment
app.get("/payments/:id", (req, res) => {

    res.json({
        paymentId: req.params.id,
        amount: 2499,
        method: "UPI",
        status: "SUCCESS"
    });

});

// Refund Payment
app.post("/payments/:id/refund", (req, res) => {

    res.json({
        success: true,
        paymentId: req.params.id,
        refundStatus: "INITIATED"
    });

});

app.listen(PORT, () => {
    console.log(`💳 Payment Service running on ${PORT}`);
});
