'use strict';
const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  category: { type: 'string', require: true },
  name: { type: 'string', require: true },
  display_name: { type: 'string' },
  description: { type: 'string' },
});

const model = mongoose.model('products', productsSchema);
module.exports = model;
