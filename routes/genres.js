/* eslint-disable no-use-before-define */
/* eslint-disable comma-dangle */
const express = require('express');
const genreService = require('../services/genres');
const { genreIdSchema, genreSchema } = require('../utils/schemas/genres');
const validationHandler = require('../utils/middleware/validationHandler');

function genresApi(app) {
  const router = express.Router();
  app.use('/genres', router);

  router.get('/', listMovies);

  router.get(
    '/:genreId',
    validationHandler({ genreId: genreIdSchema }, 'params'),
    getGenre
  );

  router.post('/', validationHandler(genreSchema), createGenre);

  router.patch(
    '/:genreId',
    validationHandler({ genreId: genreIdSchema }, 'params'),
    validationHandler(genreSchema),
    updateGenre
  );

  router.delete(
    '/:genreId',
    validationHandler({ genreId: genreIdSchema }, 'params'),
    deleteGenre
  );
}

async function listMovies(req, res, next) {
  try {
    const genres = await genreService.listGenres();

    res.status(200).send({
      error: false,
      message: 'Genres listed succesfully',
      data: genres,
    });
  } catch (err) {
    next(err);
  }
}

async function getGenre(req, res, next) {
  const { genreId } = req.params;

  try {
    const genre = await genreService.getGenre(genreId);

    res.status(200).send({
      error: false,
      message: 'Genre retrieved succesfully',
      data: genre,
    });
  } catch (err) {
    next(err);
  }
}

async function createGenre(req, res, next) {
  const { body: genre } = req;

  try {
    const createdGenre = await genreService.createGenre(genre);

    res.status(201).send({
      error: false,
      message: 'Genre created succesfully',
      data: createdGenre,
    });
  } catch (err) {
    next(err);
  }
}

async function updateGenre(req, res, next) {
  const { genreId } = req.params;
  const { body: genreData } = req;

  try {
    const updatedGenre = await genreService.updateGenre(genreId, genreData);

    res.status(200).send({
      error: false,
      message: 'Genre updated succesfully',
      data: updatedGenre,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteGenre(req, res, next) {
  const { genreId } = req.params;

  try {
    await genreService.deleteGenre(genreId);

    res.status(200).send({
      error: false,
      message: 'Genre deleted succesfully',
      data: {},
    });
  } catch (err) {
    next(err);
  }
}

module.exports = genresApi;
