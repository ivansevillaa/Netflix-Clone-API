/* eslint-disable comma-dangle */
const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const userService = require('../../../services/users');

passport.use(
  // eslint-disable-next-line consistent-return
  new BasicStrategy(async (email, password, cb) => {
    try {
      const user = userService.getUser(email);

      if (!user) {
        return cb(boom.unauthorized(), false);
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return cb(boom.unauthorized(), false);
      }

      delete user.password;

      return cb(null, user);
    } catch (err) {
      cb(err);
    }
  })
);
