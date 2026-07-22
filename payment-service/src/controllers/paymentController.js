const paymentService = require("../services/paymentService");

const getPayments = async (req, res) => {

    const payments = await paymentService.getPayments();

    res.json({
        success: true,
        payments
    });

};

const getPayment = async (req, res) => {

    const payment = await paymentService.getPayment(req.params.id);

    if (!payment) {
        return res.status(404).json({
            success: false,
            message: "Payment not found"
        });
    }

    res.json({
        success: true,
        payment
    });

};

const createPayment = async (req, res) => {

    const payment = await paymentService.addPayment(req.body);

    res.status(201).json({
        success: true,
        payment
    });

};

module.exports = {
    getPayments,
    getPayment,
    createPayment,
};
