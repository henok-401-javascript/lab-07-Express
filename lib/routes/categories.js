'use strict';

const express = require('express');
const router = express.Router();
const swaggerDoc = require('./routes/lib/doc/swagger.js');

const { category } = require('../models/model.js');

// swaggerDoc(express);
/**
 * This page will give the created categories.
 * @route GET /categories
 * @group categories
 * @returns {object} 200 - return the created categories in JSON format.
 */
router.get('/', async (req, res, next) => {
  let result = await category.readByQuery({});
  console.log(result);
  res.send(result);
});
/**
 * This page will give the created categories.
 * @route GET /categories/:id
 * @group categories
 * @returns {object} 200 - return the category by id .
 */
router.get('/:id', async (req, res, next) => {
  console.log('we are here');
  let results = await category.read(req.params.id);
  console.log(results);
  res.send(results);
});

/**
 * It allow us to create categories .
 * @route POST /categories
 * @group categories
 * @returns {object} 200 - The created Object.
 * @returns {error} - if something wrong on creating categories.
 */
router.post('/', async (req, res, next) => {
  let newCreate = await category.create(req.body);
  console.log(newCreate);
  res.send(newCreate);
});

/**
 * This page will allow you to update category.
 * @route PUT /categories/:id
 * @group categories
 * @param {Number} id.params.require - the id of the Object or field you want to update.
 * @returns {object} 200 - The updated object.
 */
router.put('/', async (req, res, next) => {
  let updateID = await category.update(req.params.id);
  res.send(updateID);
});

/**
 * This page will allow you to delete category.
 * @route DELETE /categories/:id
 * @group categories
 * @param {Number} id.params.require - the id of the object or field that you want to delete.
 * @returns {object} 200 - will be deleted the selected object.
 */

router.delete('/:_id', async (req, res, next) => {
  let deleteId = await category.delete(req.params.id);
  res.send(deleteId);
});

module.exports = router;
