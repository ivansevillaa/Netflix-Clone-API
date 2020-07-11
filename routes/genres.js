/* eslint-disable comma-dangle */
const express = require('express');
const genreService = require('../services/genres');
const { genreIdSchema, genreSchema } = require('../utils/schemas/genres');
const validationHandler = require('../utils/middleware/validationHandler');

function genresApi(app) {
  const router = express.Router();
  app.use('/genres', router);

  router.get('/', async (req, res, next) => {
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
  });

  router.get(
    '/:genreId',
    validationHandler({ genreId: genreIdSchema }, 'params'),
    async (req, res, next) => {
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
  );

  router.post('/', validationHandler(genreSchema), async (req, res, next) => {
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
  });

  router.patch(
    '/:genreId',
    validationHandler({ genreId: genreIdSchema }, 'params'),
    validationHandler(genreSchema),
    async (req, res, next) => {
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
  );

  router.delete(
    '/:genreId',
    validationHandler({ genreId: genreIdSchema }, 'params'),
    async (req, res, next) => {
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
  );
}

module.exports = genresApi;
