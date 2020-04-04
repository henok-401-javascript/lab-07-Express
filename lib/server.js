'use strict';
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send('HOME PAGE');
});

const startServer = (PORT) => {
  app.listen(PORT, () => {
    console.log('server is up', PORT);
  });
};


module.exports = {
  server: app,
  start: startServer,
};
