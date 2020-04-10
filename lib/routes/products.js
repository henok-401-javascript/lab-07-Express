////I AM CREATING ALL THE ROUTE FOR CATEORY .

const express = require('express');
const router = express.Router();
const { products } = require('../models/model.js');

///// require productsSchena page .

/**
 * This page will give the created products.
 * @route GET /products
 * @group products
 * @returns {object} 200 - return the created products in JSON format.
 */

router.get('/', async (req, res, next) => {
  let results = await new products.readByQuery({});

  res.send(results);
});
/**
 * This page will give the created products.
 * @route GET /products/:id
 * @group products
 * @returns {object} 200 - return the category by id .
 */

router.get('/:_id', async (req, res, next) => {
  let results = await new products.read(res.params.id);
  res.send(results);
});
/**
 * It allow us to create products .
 * @route POST /products
 * @group products
 * @returns {object} 200 - The created Object.
 * @returns {error} - if something wrong on creating products.
 */

router.post('/', async (req, res, next) => {
  let results = await new products.create();
  res.send(results);
});
/**
 * This page will allow you to update products.
 * @route PUT /products/:id
 * @group products
 * @param {Number} id.params.require - the id of the Object or field you want to update.
 * @returns {object} 200 - The updated object.
 */

router.put('/:_id', async (req, res, next) => {
  let update = await new products.update(req.params.id);
  res.send(update);
});

/**
 * This page will allow you to delete products.
 * @route DELETE /products/:id
 * @group products
 * @param {Number} id.params.require - the id of the object or field that you want to delete.
 * @returns {object} 200 - will be deleted the selected object.
 */

router.delete('/:_id', async (req, res, next) => {
  let deleteId = await new products.delete(req.params.id);
  res.send(deleteId);
});
module.exports = router;
