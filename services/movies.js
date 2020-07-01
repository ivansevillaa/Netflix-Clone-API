const Movies = require('../lib/models/movies');

async function listMovies(genre) {
  let movies;

  if (genre) {
    movies = await Movies.find({ genre });
  }

  movies = await Movies.find();

  return movies;
}

async function getMovie(movieId) {
  const movie = await Movies.findById(movieId);

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

  return updatedMovie;
}

async function deleteMovie(movieId) {
  await Movies.deleteOne({ _id: movieId });
}

module.exports = {
  listMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
