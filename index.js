'use strict';

const app = require('./lib/server.js');
const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', function callback() {
  console.log('Connected to DB!');
});

let port = process.env.PORT || 3000;

app.start(port, MONGODB_URL);
// mongoose.disconnect();
