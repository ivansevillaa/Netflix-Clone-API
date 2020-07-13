/* eslint-disable comma-dangle */
const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');
const config = require('../../../config/index');
const userService = require('../../../services/users');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.authJwtSecret,
};

passport.use(
  // eslint-disable-next-line consistent-return
  new Strategy(options, async (jwtPayload, cb) => {
    try {
      const user = userService.getUser({ email: jwtPayload.email });
      if (!user) {
        return cb(boom(boom.unauthorized()), false);
      }

      delete user.password;

      return cb(null, { ...user, scopes: jwtPayload.scopes });
    } catch (err) {
      cb(err);
    }
  })
);
