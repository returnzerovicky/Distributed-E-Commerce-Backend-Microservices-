require("./src/server");

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const PORT = process.env.PORT || 4002;

// Health Check
app.get("/", (req, res) => {
    res.json({
        service: "Product Service",
        status: "Running"
    });
});

// Get All Products
app.get("/products", (req, res) => {

    res.json({
        success: true,
        products: [
            {
                id: 1,
                name: "Gaming Laptop",
                price: 79999,
                stock: 15
            },
            {
                id: 2,
                name: "Wireless Mouse",
                price: 1499,
                stock: 120
            }
        ]
    });

});

// Get Product by ID
app.get("/products/:id", (req, res) => {

    res.json({
        id: req.params.id,
        name: "Sample Product",
        price: 4999,
        stock: 50
    });

});

// Create Product
app.post("/products", (req, res) => {

    res.status(201).json({
        success: true,
        message: "Product created successfully",
        product: req.body
    });

});

// Update Product
app.put("/products/:id", (req, res) => {

    res.json({
        success: true,
        message: `Product ${req.params.id} updated`,
        updatedProduct: req.body
    });

});

// Delete Product
app.delete("/products/:id", (req, res) => {

    res.json({
        success: true,
        message: `Product ${req.params.id} deleted`
    });

});

app.listen(PORT, () => {
    console.log(`📦 Product Service running on ${PORT}`);
});
