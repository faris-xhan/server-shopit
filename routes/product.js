const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json({
      status: 'success',
      data: products,
      error: '',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const product = new Product(req.body);
    return res.json({
      status: 'success',
      data: await product.save(),
      error: '',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
