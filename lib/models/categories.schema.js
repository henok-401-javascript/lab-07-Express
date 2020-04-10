'use strict';
const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  category: { type: 'string', require: true },
  name: { type: 'string', require: true },
  display_name: { type: 'string' },
  description: { type: 'string' },
});

const model = new mongoose.model('categories', categorySchema);
module.exports = model;
