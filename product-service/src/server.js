require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const productRoutes = require("./routes/productRoutes");
const { createProductTable } = require("./models/Product");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        service: "Product Service",
        version: "1.0.0",
        status: "Running"
    });
});

app.use("/api/products", productRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

const PORT = process.env.PORT || 4002;

(async () => {
    try {

        await createProductTable();

        app.listen(PORT, () => {
            console.log(`📦 Product Service running on port ${PORT}`);
        });

    } catch (error) {

        console.error(error);

    }
})();
