/* eslint-disable import/no-extraneous-dependencies */
// set DEBUG=app:* && set NODE_ENV=development && node utils/seeds/genres.js
const chalk = require('chalk');
const debug = require('debug')('app:scripts:genres');
const genresMock = require('../mocks/genres');
const mongo = require('../../lib/mongo');
const Genres = require('../../lib/models/genres');

// eslint-disable-next-line consistent-return
async function seedGenres() {
  try {
    mongo();

    const promises = genresMock.map(async (genre) => {
      const newGenre = new Genres(genre);
      await newGenre.save();
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} genres have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (err) {
    debug(chalk.red(err));
    process.exit(1);
  }
}

seedGenres();
