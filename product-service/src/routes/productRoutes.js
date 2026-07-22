const express = require("express");

const router = express.Router();

const {
    getProducts,
    getProduct,
    createProduct,
} = require("../controllers/productController");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        service: "Product Service",
        status: "Running"
    });
});

module.exports = router;
