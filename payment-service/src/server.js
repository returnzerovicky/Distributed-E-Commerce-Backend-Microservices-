require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const paymentRoutes = require("./routes/paymentRoutes");
const { createPaymentTable } = require("./models/Payment");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        service: "Payment Service",
        version: "1.0.0",
        status: "Running"
    });
});

app.use("/api/payments", paymentRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

const PORT = process.env.PORT || 4004;

(async () => {
    try {

        await createPaymentTable();

        app.listen(PORT, () => {
            console.log(`💳 Payment Service running on port ${PORT}`);
        });

    } catch (error) {

        console.error(error);

    }
})();
