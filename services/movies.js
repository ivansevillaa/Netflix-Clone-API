/* eslint-disable comma-dangle */
const boom = require('@hapi/boom');
const Movies = require('../lib/models/movies');

async function listMovies(genre) {
  let filter = {};

  if (genre) {
    filter = {
      genre,
    };
  }

  const movies = await Movies.find(filter).populate('genres');

  return movies;
}

async function getMovie(movieId) {
  const movie = await Movies.findById(movieId).populate('genres');

  if (!movie) {
    throw boom.notFound('Movie not found');
  }

  return movie;
}

async function createMovie(movie) {
  const newMovie = new Movies(movie);
  const createdMovie = await newMovie.save();

  return createdMovie;
}

async function updateMovie(movieId, movieData) {
  const updatedMovie = await Movies.findOneAndUpdate(
    { _id: movieId },
    { $set: movieData },
    { new: true }
  );

  if (!updatedMovie) {
    throw boom.notFound('Movie not found');
  }

  return updatedMovie;
}

async function deleteMovie(movieId) {
  const movie = await Movies.findById(movieId);

  if (movie) {
    await Movies.deleteOne(movie);
  } else {
    throw boom.notFound('Movie not found');
  }
}

module.exports = {
  listMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
