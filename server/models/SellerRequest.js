const mongoose = require('mongoose');

const sellerRequestSchema = new mongoose.Schema(
  {
    sellerImage: {
      type: String,
      required: true, // image URL
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    shopName: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    requestDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('SellerRequest', sellerRequestSchema);
