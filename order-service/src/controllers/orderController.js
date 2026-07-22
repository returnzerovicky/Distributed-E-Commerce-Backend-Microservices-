const orderService = require("../services/orderService");

const getOrders = async (req, res) => {

    const orders = await orderService.getOrders();

    res.json({
        success: true,
        orders
    });

};

const getOrder = async (req, res) => {

    const order = await orderService.getOrder(req.params.id);

    if (!order) {

        return res.status(404).json({
            success: false,
            message: "Order not found"
        });

    }

    res.json({
        success: true,
        order
    });

};

const createOrder = async (req, res) => {

    const order = await orderService.addOrder(req.body);

    res.status(201).json({
        success: true,
        order
    });

};

module.exports = {
    getOrders,
    getOrder,
    createOrder,
};
