const productService = require("../services/productService");

const getProducts = async (req, res) => {

    const products = await productService.getProducts();

    res.json({
        success: true,
        products
    });

};

const getProduct = async (req, res) => {

    const product = await productService.getProduct(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    res.json({
        success: true,
        product
    });

};

const createProduct = async (req, res) => {

    const product = await productService.addProduct(req.body);

    res.status(201).json({
        success: true,
        product
    });

};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
};
