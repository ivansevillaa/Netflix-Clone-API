const boom = require('@hapi/boom');
const Movies = require('../lib/models/movies');

async function listMovies(genre) {
  let movies;

  if (genre) {
    movies = await Movies.find({ genre });
  } else {
    movies = await Movies.find();
  }

  return movies;
}

async function getMovie(movieId) {
  const movie = await Movies.findById(movieId);

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
