/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const config = require('../config/index');
const apiKeyService = require('../services/apiKeys');
const userService = require('../services/users');
const { createUserSchema } = require('../utils/schemas/users');
const validationHandler = require('../utils/middleware/validationHandler');

// Basic strategy
require('../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/auth', router);

  router.post('/sign-in', signIn);

  router.post('/sign-up', validationHandler(createUserSchema), signUp);
}

async function signIn(req, res, next) {
  const { apiKeyToken } = req.body;

  if (!apiKeyToken) {
    next(boom.unauthorized('apiKeyToken is required'));
  }

  passport.authenticate('basic', (err, user) => {
    try {
      if (err || !user) {
        next(boom.unauthorized());
      }

      req.login(user, { session: false }, async (err) => {
        if (err) {
          next(err);
        }

        const apiKey = await apiKeyService.getApiKey(apiKeyToken);

        if (!apiKey) {
          next(boom.unauthorized);
        }

        const { _id: id, username, email, photo_src: photoSrc } = user[0];

        const payload = {
          sub: id,
          username,
          email,
          photoSrc,
          scopes: apiKey[0].scopes,
        };

        const options = {
          expiresIn: '15m',
        };

        const token = jwt.sign(payload, config.authJwtSecret, options);

        res.status(200).send({
          error: false,
          token,
          data: {
            id,
            email,
            username,
            photoSrc,
          },
        });
      });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
}

async function signUp(req, res, next) {
  const { body: user } = req;

  try {
    const registeredUser = await userService.createUser(user);

    res.status(201).send({
      error: false,
      message: 'User registered succesfully',
      data: registeredUser,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = authApi;
