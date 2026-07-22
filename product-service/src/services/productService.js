const Product = require("../models/Product");

const getProducts = async () => {
    return await Product.getAllProducts();
};

const getProduct = async (id) => {
    return await Product.getProductById(id);
};

const addProduct = async (product) => {
    return await Product.createProduct(product);
};

module.exports = {
    getProducts,
    getProduct,
    addProduct,
};
