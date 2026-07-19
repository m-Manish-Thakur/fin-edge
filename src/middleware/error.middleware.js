const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const response = {
    success: false,
    message: err.message || "Something went wrong",
  };

  if (err.code) {
    response.code = err.code;
  }

  return res.status(statusCode).json(response);
};

module.exports = errorHandler;
