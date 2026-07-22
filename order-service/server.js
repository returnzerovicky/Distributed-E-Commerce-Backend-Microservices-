require("dotenv").config();

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

const PORT = process.env.PORT || 4003;

// Health Check
app.get("/", (req, res) => {
    res.json({
        service: "Order Service",
        status: "Running"
    });
});

// Get Orders
app.get("/orders", (req, res) => {

    res.json({
        success: true,
        orders: [
            {
                id: uuid(),
                customer: "Vikas",
                total: 2499,
                status: "Delivered"
            }
        ]
    });

});

// Create Order
app.post("/orders", (req, res) => {

    res.status(201).json({
        success: true,
        message: "Order placed successfully",
        orderId: uuid(),
        order: req.body
    });

});

// Update Order Status
app.patch("/orders/:id/status", (req, res) => {

    res.json({
        success: true,
        orderId: req.params.id,
        status: req.body.status
    });

});

// Cancel Order
app.delete("/orders/:id", (req, res) => {

    res.json({
        success: true,
        message: `Order ${req.params.id} cancelled`
    });

});

app.listen(PORT, () => {
    console.log(`📦 Order Service running on ${PORT}`);
});
