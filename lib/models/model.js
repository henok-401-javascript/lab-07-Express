'use strict';
const category = require('./categories.schema.js');
const products = require('./products.schema.js');

class Model {
  constructor(schema) {
    this.schema = schema;
  }

  async create(data) {
    let createNew = new this.schema(data);
    console.log(createNew);
    return createNew.save();
  }
  async read(_id) {
    try {
      console.log('we are here at read');
      console.log(_id);
      let record = await this.schema.findById({ _id });
      console.log('this is record', record);
      return record;
    } catch (e) {
      console.error(e);
    }
  }
  async readByQuery(query) {
    let record = await this.schema.find(query);
    return record;
  }
  async update(_id, record) {
    return await this.schema.findByIdAndUpdate(_id, record, { new: true });
  }
  async delete(_id) {
    return await this.schema.findByIdAndUpdate(_id);
  }
}

module.exports = {
  category: new Model(category),
  products: new Model(products),
};
