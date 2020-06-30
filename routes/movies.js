const express = require('express');
const movieService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/movies', router);

  router.get('/', async (req, res, next) => {
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
  });

  router.get('/:movieId', async (req, res, next) => {
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
  });

  router.post('/', async (req, res, next) => {
    const { body: newMovie } = req;

    try {
      const createdMovie = await movieService.createMovie(newMovie);

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
    const { movieId } = req.params;

    try {
      const updatedMovie = await movieService.updateMovie(movieId);

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
    const { movieId } = req.params;

    try {
      const deletedMovieId = await movieService.deleteMovie(movieId);

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
