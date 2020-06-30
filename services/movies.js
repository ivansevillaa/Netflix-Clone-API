const moviesMock = require('../utils/mocks/movies');

async function listMovies(genre) {
  if (genre) {
    // code to filter by the genre
    const filteredMovies = await Promise.resolve(moviesMock[0]);

    return filteredMovies;
  }

  const movies = await Promise.resolve(moviesMock);

  return movies;
}

async function getMovie(movieId) {
  const movie = await Promise.resolve(moviesMock[0]);

  return movie;
}

async function createMovie(newMovie) {
  const createdMovie = await Promise.resolve(moviesMock[0]);

  return createdMovie;
}

async function updateMovie(movieId) {
  const updatedMovie = await Promise.resolve(moviesMock[0]);

  return updatedMovie;
}

async function deleteMovie(movieId) {
  const deletedMovieId = await Promise.resolve(moviesMock[0].id);

  return deletedMovieId;
}

module.exports = {
  listMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
