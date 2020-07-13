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
      const user = await userService.getUser(email);
      if (!user) {
        return cb(boom.unauthorized(), false);
      }

      const match = await bcrypt.compare(password, user[0].password);

      if (!match) {
        return cb(boom.unauthorized(), false);
      }

      delete user.password;

      return cb(null, user);
    } catch (err) {
      cb(err);
    }
  })
);
