
module.exports = (controllerFunction) => {
  return function (req, res, next) {
    controllerFunction(req, res).catch((err) => {
      next(err);
    });
  };
};
// (controllerFunction) => (req, res, next) => controllerFunction().catch((err) => next(err));