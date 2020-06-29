const express = require('express');
const moviesMock = require('../../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/movies', router);

  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);

      res.status(200).send({
        error: false,
        message: 'Movies listed succesfully',
        data: movies,
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:movieId', async (req, res, next) => {
    try {
      const movie = await Promise.resolve(moviesMock[0]);

      res.status(200).send({
        error: false,
        message: 'Movie retrieved succesfully',
        data: movie,
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const createdMovie = await Promise.resolve(moviesMock[0]);

      res.status(201).send({
        error: false,
        message: 'Movie created succesfully',
        data: createdMovie,
      });
    } catch (err) {
      next(err);
    }
  });

  router.patch('/:movieId', async (req, res, next) => {
    try {
      const updatedMovie = await Promise.resolve(moviesMock[0]);

      res.status(200).send({
        error: false,
        message: 'Movie updated succesfully',
        data: updatedMovie,
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieId', async (req, res, next) => {
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(200).send({
        error: false,
        message: 'Movie deleted succesfully',
        data: deletedMovieId,
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;
