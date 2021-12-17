require('dotenv').config();

const env = process.env;

module.exports = {
  mongodb: env.MONGODB || 'mongodb://localhost:27017/shopit',
};
