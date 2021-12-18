const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  isSale: { type: Boolean },
  oldPrice: { type: Number },
  category: {type:String, },
  title: { type: String, require: true },
  price: { type: String, require: true },
  quantity: { type: Number, default: 1 },
  description: { type: String, require: true },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
