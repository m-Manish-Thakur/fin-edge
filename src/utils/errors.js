const ApiError = require("./ApiError");

// ========== Usage ============
// throw BadRequest("Invalid amount");
// throw NotFound("Transaction not found");
// throw Conflict("Email already exists");
// ==============================

const BadRequest = (message, code = null) => {
  return new ApiError(400, message, code);
};

const Unauthorized = (message, code = null) => {
  return new ApiError(401, message, code);
};

const Forbidden = (message, code = null) => {
  return new ApiError(403, message, code);
};

const NotFound = (message, code = null) => {
  return new ApiError(404, message, code);
};

const Conflict = (message, code = null) => {
  return new ApiError(409, message, code);
};

const UnprocessableEntity = (message, code = null) => {
  return new ApiError(422, message, code);
};

const InternalServerError = (message = "Internal Server Error", code = null) => {
  return new ApiError(500, message, code);
};

module.exports = {
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
  InternalServerError,
};
