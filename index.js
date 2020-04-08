'use strict';

const app = require('./lib/server.js');
let serverPort = 8080;
// let PORT = process.env.PORT || serverPort;

app.start(3000 || serverPort);
