const Payment = require("../models/Payment");

const getPayments = () => Payment.getPayments();

const getPayment = (id) => Payment.getPayment(id);

const addPayment = (payment) => Payment.createPayment(payment);

module.exports = {
    getPayments,
    getPayment,
    addPayment,
};
