const Order = require("../models/Order");

const getOrders = () => Order.getOrders();

const getOrder = (id) => Order.getOrder(id);

const addOrder = (order) => Order.createOrder(order);

module.exports = {
    getOrders,
    getOrder,
    addOrder,
};
