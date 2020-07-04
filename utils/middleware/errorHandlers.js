const config = require('../../config/index');

function withErrorStack(error, stack) {
  if (config.dev) {
    return {
      error,
      stack,
    };
  }

  return error;
}

function logErrors(err, req, res, next) {
  console.error('[err]', err);

  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json(withErrorStack(err.message, err.stack));
}

module.exports = {
  errorHandler,
  logErrors,
};
