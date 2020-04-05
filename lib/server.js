'use strict';
const express = require('express');
const app = express();

// req the data page. 
const db = require('../data/db.json');
console.log('tyeeeeee', db);

app.get('/products', (req, res) => {

  res.send(req.body);
});
app.get('/categorys', (req, res) => {
  res.send();
});




app.get('/', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  console.log('this is headers', req.headers);
  console.log('this is body', req.body);
  let homeHtmL = '<h2> HOME PAGE</h2>';

  if (req.query.name)
    homeHtmL += '<h3>welocme ' + req.query.name + '<h3>';
  else homeHtmL;

  res.send(homeHtmL);
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

// Inside the put method or rout 
////data.fruits[req.params.id -1] = { ....req.body,ID:req.parms:id}

// res.send[(data.fruits'req.params.id -1)];
