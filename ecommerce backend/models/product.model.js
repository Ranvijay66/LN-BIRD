const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },                  // Product title
  price: { type: String, required: true },                  // Product price
  description: { type: String, required: true },            // Product description
  image: { type: String, required: true },                  // Image URL or file path
  colors: { type: [String], default: [] }                   // Product colors
}, { timestamps: true });

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;
