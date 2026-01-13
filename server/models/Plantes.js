const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Flower', 'Indoor', 'Outdoor', 'Succulent'], // allowed categories
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'Type is required'],
      enum: ['Top Rated', 'Trending', 'Best Seller'], // allowed categories
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [10, 'Description must be at least 10 characters'],
      maxlength: [500, 'Description can be max 500 characters'],
    },
    name: {
      type: String,
      required: [true, 'Plant name is required'],
      trim: true,
      minlength: [3, 'Name must be at least 3 characters'],
      maxlength: [100, 'Name can be max 100 characters'],
    },
    newPrice: {
      type: Number,
      required: [true, 'New price is required'],
      min: [0, 'Price must be at least 0'],
    },
    oldPrice: {
      type: Number,
      default: 0,
      min: [0, 'Old price must be at least 0'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be at least 0'],
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, 'Rating must be at least 0'],
      max: [5, 'Rating cannot exceed 5'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Plant', plantSchema);
