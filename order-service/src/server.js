require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const orderRoutes = require("./routes/orderRoutes");
const { createOrderTable } = require("./models/Order");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        service: "Order Service",
        version: "1.0.0",
        status: "Running"
    });
});

app.use("/api/orders", orderRoutes);

// 404
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

const PORT = process.env.PORT || 4003;

(async () => {
    try {

        await createOrderTable();

        app.listen(PORT, () => {
            console.log(`📦 Order Service running on port ${PORT}`);
        });

    } catch (error) {

        console.error(error);

    }
})();
