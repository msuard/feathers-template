module.exports = function(req, res, next) {
  // ADDS REQUEST HEADERS TO FEATHERS CONTEXT PARAMS
  req.feathers.headers = req.headers;
  next();
};
