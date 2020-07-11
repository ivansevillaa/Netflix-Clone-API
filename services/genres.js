/* eslint-disable comma-dangle */
const boom = require('@hapi/boom');
const Genres = require('../lib/models/genres');

async function listGenres() {
  const genres = await Genres.find();

  return genres;
}

async function getGenre(genreId) {
  const genre = await Genres.findById(genreId);

  if (!genre) {
    throw boom.notFound('Genre not found');
  }

  return genre;
}

async function createGenre(genre) {
  // const isExistent = Genres.find({ genre: genre.genre });
  // if (isExistent) {
  //   throw boom.conflict('This genre already exists');
  // }

  const newGenre = new Genres(genre);
  const createdGenre = await newGenre.save();

  return createdGenre;
}

async function updateGenre(genreId, genreData) {
  const updatedGenre = await Genres.findOneAndUpdate(
    { _id: genreId },
    { $set: genreData },
    { new: true }
  );

  if (!updatedGenre) {
    throw boom.notFound('Genre not found');
  }

  return updatedGenre;
}

async function deleteGenre(genreId) {
  const genre = await Genres.findById(genreId);

  if (genre) {
    await Genres.deleteOne(genre);
  } else {
    throw boom.notFound('Genre not found');
  }
}

module.exports = {
  listGenres,
  getGenre,
  createGenre,
  updateGenre,
  deleteGenre,
};
