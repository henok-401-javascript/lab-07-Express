//const 404func = (req , res , next) => {
//
//}

// route that is not explicitly defined
//404
//res.send('Resource Not Found’);

const wrongRoute = (req, res, next) => {
  res.status(404);
  res.end();
};

module.exports = wrongRoute;
