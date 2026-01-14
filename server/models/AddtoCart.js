const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Plant name is required'],
      trim: true,
      minlength: [3, 'Name must be at least 3 characters'],
      maxlength: [100, 'Name can be max 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be at least 0'],
    },
    image: {
      type: String,
      default: '',
      required: [true, 'Image URL is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be at least 0'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('card', cardSchema);
