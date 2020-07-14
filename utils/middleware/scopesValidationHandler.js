const boom = require('@hapi/boom');

function scopesValidationHandler(allowedScopes) {
  return (req, res, next) => {
    if (!req.user || !req.user.scopes) {
      next(boom.unauthorized('Missing scopes'));
    }

    const hasAccess = allowedScopes
      .map((allowed) => req.user.scopes.includes(allowed))
      .find((allowed) => Boolean(allowed));

    if (hasAccess) {
      next();
    } else {
      next(boom.unauthorized('Insufficient scopes'));
    }
  };
}

module.exports = scopesValidationHandler;
