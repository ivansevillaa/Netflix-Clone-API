/* eslint-disable import/no-extraneous-dependencies */
// set DEBUG=app:* && set NODE_ENV=development && node utils/seeds/movies.js
const chalk = require('chalk');
const debug = require('debug')('app:scripts:movies');
const moviesMock = require('../mocks/movies');
const mongo = require('../../lib/mongo');
const Movies = require('../../lib/models/movies');

// eslint-disable-next-line consistent-return
async function seedMovies() {
  try {
    mongo();

    const promises = moviesMock.map(async (movie) => {
      const newMovie = new Movies(movie);
      await newMovie.save();
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} movies have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (err) {
    debug(chalk.red(err));
    process.exit(1);
  }
}

seedMovies();
