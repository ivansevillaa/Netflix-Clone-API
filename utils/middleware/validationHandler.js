const joi = require('@hapi/joi');
const boom = require('@hapi/boom');

function validate(schema, data) {
  const { error } = joi.object(schema).validate(data);

  return error;
}

// Check param it will is used to check the params of the request, e.g. req.body, req.params, etc.
function validationHandler(schema, check = 'body') {
  return (req, res, next) => {
    const error = validate(schema, req[check]);

    if (error) {
      next(boom.badRequest(error));
    }

    next();
  };
}

module.exports = validationHandler;
