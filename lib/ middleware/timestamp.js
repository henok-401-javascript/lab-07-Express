'use strict';

const timeStamp = (req, res, next) => {
  // const.log('the timer Middleware' , req.url , new Date());
  req.time = new Date();
  next();
};

module.exports = timeStamp;
