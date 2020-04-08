'use strict';
const express = require('express');
const db = require('../data/db.json');
const wrongRoute = require('./ middleware/404.js');
const logger = require('./ middleware/logger.js');

const app = express();
app.use(logger);
app.use(express.json());
// SWAGGER DOCUMENTATION .
/**
 * This page will give you HOME PAGE text/html format.
 * @route GET /
 * @param {string} name.query - name query and will add welcome message.
 * @produces text/html
 * @returns {object} 200 - The text/html to show on the home page.
 */

//HOME ROUTE.
app.get('/', (req, res) => {
  let homeHtml = '<h2>HOME PAGE</H2>';
  if (req.query.name) homeHtml += '<h3>welcome ' + req.query.name + '<h3>';
  else homeHtml;

  res.send(homeHtml);
});

/// CREATING FOR CATEGORY ENDPOINT
// CREATE READ UPDATE DELETE.....POST GET PUT DELETE
/**
 * It allow us to create categories .
 * @route POST /categories
 * @group categories
 * @returns {object} 200 - The created Object.
 * @returns {error} - if something wrong on creating categories.
 */

app.post('/categories', (req, res) => {
  let newCategory = req.body;
  newCategory.id = db.categories.length + 1;
  db.categories.push(newCategory);

  res.send(newCategory);
});
/**
 * This page will give the created categories.
 * @route GET /categories
 * @group categories
 * @returns {object} 200 - return the created categories in JSON format.
 */
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
/**
 * This page will allow you to update category.
 * @route PUT /categories/:id
 * @group categories
 * @param {Number} id.params.require - the id of the Object or field you want to update.
 * @returns {object} 200 - The updated object.
 */
app.put('/categories/:id', (req, res) => {
  db.categories[parseInt(req.params.id) - 1] = {
    ...req.body,
    id: parseInt(req.params.id),
  };
  res.send(db.categories[parseInt(req.params.id) - 1]);
});

/**
 * This page will allow you to delete category.
 * @route DELETE /categories/:id
 * @group categories
 * @param {Number} id.params.require - the id of the object or field that you want to delete.
 * @returns {object} 200 - will be deleted the selected object.
 */

app.delete('/categories/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let newIdFilter = db.categories.filter(data => {
    return data.id != id;

    // newIdFilter.push(data.id === parseInt(id));
  });
  db.categories = newIdFilter;
  res.send(db.categories);
});

//CREATING FOR PRODUCTS ENDPOING
//CREATE READ UPDATE DELETE .... POST GET PUT DELETE

/**
 * It allow us to create products .
 * @route POST /products
 * @group products
 * @returns {object} 200 - The created Object.
 * @returns {error} - if something wrong on creating products.
 */
app.post('/products', (req, res) => {
  let newProducts = req.body;
  newProducts.id = db.products.length + 1;
  db.products.push(newProducts);
  res.send(newProducts);
});

/**
 * This page will give the created products.
 * @route GET /products
 * @group products
 * @returns {object} 200 - return the created products in JSON format.
 */
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

/**
 * This page will allow you to update products.
 * @route PUT /products/:id
 * @group products
 * @param {Number} id.params.require - the id of the Object or field you want to update.
 * @returns {object} 200 - The updated object.
 */
app.put('/products/:id', (req, res) => {
  db.products[parseInt(req.params.id) - 1] = {
    ...req.body,
    id: parseInt(req.params.id),
  };
  res.send(db.products[parseInt(req.params.id) - 1]);
});
/**
 * This page will allow you to delete products.
 * @route DELETE /products/:id
 * @group products
 * @param {Number} id.params.require - the id of the object or field that you want to delete.
 * @returns {object} 200 - will be deleted the selected object.
 */
app.delete('/products/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let filterId = db.products.filter(data => {
    return data.id != id;
  });
  db.products = filterId;
  res.send(db.products);
});

app.use('*',wrongRoute);

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
