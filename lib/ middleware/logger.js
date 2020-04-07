'use strict';

const logger = (req, res, next) => {
  console.log('My first logger function', req.url, 'at', new Date());
  next();
};

module.exports = logger;
