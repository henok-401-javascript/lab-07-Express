'use strict';

const app = require('./lib/server.js');
const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', function callback() {
  console.log('Connected to DB!');
});

let port = process.env.PORT || 3000;

app.start(port, MONGODB_URI);
// mongoose.disconnect();
