'use strict';

const app = require('./lib/server.js');
let serverPort = 8080;
serverPort = process.env.serverPort;

app.start(3000 || serverPort);
