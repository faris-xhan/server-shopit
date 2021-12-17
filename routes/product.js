const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

/**  GET ALL THE PRODUCTS **/
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

/** CREATE A NEW PRODUCT **/
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

/** GET PRODUCT BY ID **/
router.get('/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.find({ _id: productId });
    if (!product.length) throw new Error("Product doens't exists");
    return res.json({
      status: 'success',
      data: product,
      error: '',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/** UPDATE PRODUCT BY ID **/
router.put('/:productId', async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findOneAndUpdate(
      { _id: productId },
      req.body
    );

    return res.json({
      status: 'success',
      data: product._id,
      error: '',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/** DELETE PRODUCT BY ID **/
router.delete('/:productId', async (req, res, next) => {
  const { productId } = req.params;
  try {
    const status = await Product.findByIdAndRemove({ _id: productId });
    return res.json({
      status: 'success',
      data: status,
      error: '',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
