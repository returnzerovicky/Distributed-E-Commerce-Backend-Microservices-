require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");
const { createUserTable } = require("./models/User");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Root Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        service: "Authentication Service",
        version: "1.0.0",
        status: "Running"
    });
});

// API Routes
app.use("/api/auth", authRoutes);

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

const PORT = process.env.PORT || 4001;

(async () => {
    try {
        await createUserTable();

        app.listen(PORT, () => {
            console.log(`🚀 Authentication Service running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
})();
