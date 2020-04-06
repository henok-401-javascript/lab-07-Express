'use strict';
const express = require('express');
const app = express();
app.use(express.json());

// req the data page.
const db = require('../data/db.json');
console.log('tyeeeeeeededeeefefefefefe', db);

//HOME ROUT.
app.get('/', (req, res) => {
  let homeHtml = '<h2>HOME PAGE</H2>';
  if (req.query.name) homeHtml += '<h3>welocme ' + req.query.name + '<h3>';
  else homeHtml;

  res.send(homeHtml);
});

/// CREATING FOR CATEGORY ENDPOINT
// CREATE READ UPDATE DELETE.....POST GET PUT DELETE

app.post('/categories', (req, res) => {
  let newCategory = req.body;
  newCategory.id = db.categories.length + 1;
  db.categories.push(newCategory);

  res.send(newCategory);
});
app.get(
  '/categories',
  (req, res, next) => {
    console.log('my first next function');
    next();
  },
  (req, res, next) => {
    console.log('my second next function');
    next();
  },
  (req, res) => {
    res.send(db.categories);
  },
);

app.put('/categories/:id', (req, res) => {
  db.categories[parseInt(req.params.id) - 1] = {
    ...req.body,
    id: parseInt(req.params.id),
  };
  res.send(db.categories[parseInt(req.params.id) - 1]);
});
app.delete('/categories/:id', (req, res) => {
  // let id = parseInt(req.params.id);
  // db.categories.filter(data => {
  //   data.id === parseInt(id);
  // });
  res.send();
});

//CREATING FOR PRODUCTS ENDPOING
//CREATE READ UPDATE DELETE .... POST GET PUT DELETE

app.post('/products', (req, res) => {
  let newProducts = req.body;
  newProducts.id = db.products.length + 1;
  db.products.push(newProducts);
  res.send(newProducts);
});
app.get(
  '/products',
  (req, res, next) => {
    console.log('my first next for products');
    next();
  },
  (req, res, next) => {
    console.log('my second next for products');
    next();
  },
  (req, res) => {
    res.send(db.products);
  },
);

app.put('/products/:id', (req, res) => {
  db.products[parseInt(req.params.id) - 1] = {
    ...req.body,
    id: parseInt(req.params.id),
  };
  res.send(db.products[parseInt(req.params.id) - 1]);
});
app.delete('/products/:id', (req, res) => {
  res.send();
});

const startServer = PORT => {
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
