/* eslint-disable no-use-before-define */
/* eslint-disable comma-dangle */
const express = require('express');
const passport = require('passport');
const movieService = require('../services/movies');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandler');

// JWT strategy
require('../utils/auth/strategies/jwt');

function moviesApi(app) {
  const router = express.Router();
  app.use('/movies', router);

  router.get('/', passport.authenticate('jwt', { session: false }), listMovies);

  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    getMovie
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(createMovieSchema),
    createMovie
  );

  router.patch(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    updateMovie
  );

  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    deleteMovie
  );
}

async function listMovies(req, res, next) {
  const { genre } = req.query;

  try {
    const movies = await movieService.listMovies(genre);

    res.status(200).send({
      error: false,
      message: 'Movies listed succesfully',
      data: movies,
    });
  } catch (err) {
    next(err);
  }
}

async function createMovie(req, res, next) {
  const { body: movie } = req;

  try {
    const createdMovie = await movieService.createMovie(movie);

    res.status(201).send({
      error: false,
      message: 'Movie created succesfully',
      data: createdMovie,
    });
  } catch (err) {
    next(err);
  }
}

async function getMovie(req, res, next) {
  const { movieId } = req.params;

  try {
    const movie = await movieService.getMovie(movieId);

    res.status(200).send({
      error: false,
      message: 'Movie retrieved succesfully',
      data: movie,
    });
  } catch (err) {
    next(err);
  }
}

async function updateMovie(req, res, next) {
  const { body: movieData } = req;
  const { movieId } = req.params;

  try {
    const updatedMovie = await movieService.updateMovie(movieId, movieData);

    res.status(200).send({
      error: false,
      message: 'Movie updated succesfully',
      data: updatedMovie,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteMovie(req, res, next) {
  const { movieId } = req.params;

  try {
    await movieService.deleteMovie(movieId);

    res.status(200).send({
      error: false,
      message: 'Movie deleted succesfully',
      data: {},
    });
  } catch (err) {
    next(err);
  }
}

module.exports = moviesApi;
