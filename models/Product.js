const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  oldPrice: { type: Number },
  title: { type: String, require: true },
  price: { type: String, require: true },
  quantity: { type: Number, default: 1 },
  isSale: { type: Boolean, require: true },
  description: { type: String, require: true },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
