const mongoose = require('mongoose');
const Payment = require('../models/Payment');
const stripe = require('stripe')(process.env.PAYMENT_SERVER_KEY);

/**
 * Create Stripe Payment Intent
 */
exports.createPayment = async (req, res) => {
  try {
    const price = Number(req.body.price);

    if (!price || price <= 0) {
      return res.status(400).json({ message: 'Invalid price' });
    }

    const amountInCent = Math.round(price * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCent,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Stripe Error:', error.message);
    res.status(500).json({
      message: 'Payment intent creation failed',
    });
  }
};

/**
 * Save Payment History
 */
exports.paymentHistory = async (req, res) => {
  try {
    const paymentData = req.body;

    const payment = new Payment(paymentData);
    const result = await payment.save();

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to save payment',
      error: error.message,
    });
  }
};

/**
 * Get Payment History (by email optional)
 */
exports.getPaymentHistory = async (req, res) => {
  try {
    const { email } = req.query;

    const query = email ? { email } : {};
    const payments = await Payment.find(query).sort({ createdAt: -1 });

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to get payment data',
      error: error.message,
    });
  }
};

/**
 * Update Payment Status
 */
exports.updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payment ID',
      });
    }

    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Status is required',
      });
    }

    const payment = await Payment.findByIdAndUpdate(
      id,
      {
        status,
        updatedAt: new Date(),
      },
      { new: true },
    );

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Payment status updated successfully',
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
