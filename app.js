const path = require('path');
const logger = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const config = require('./config/config');

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

module.exports = app;