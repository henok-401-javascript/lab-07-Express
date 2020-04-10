'use strict';

const logger = (req, res, next) => {
  console.log('My first logger function', req.method, req.url, 'at', req.time);
  next();
};

module.exports = logger;
