const path = require('path');
const logger = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');

/**  Connecting MongoDB. **/
mongoose.connect(config.mongodb, (error) => {
  if (error) console.log(error);
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/product', productRouter);

module.exports = app;
