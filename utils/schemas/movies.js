const joi = require('@hapi/joi');

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/); // mongodb id regex
const movieTitleSchema = joi.string().max(52);
const movieDescriptionSchema = joi.string().max(300);
const movieCoverSrcSchema = joi.string().uri();
const movieVideoSrcSchema = joi.string().uri();
const movieDurationSchema = joi.number().min(1).max(720);
const movieYearSchema = joi.number().min(1888).max(2020);
const movieAgeRateSchema = joi.number().max(18);
// TODO
// const movieGenresSchema = joi.array().items();
// const movieAuthorsSchema = joi.array().items();

const createMovieSchema = {
  title: movieTitleSchema.required(),
  description: movieDescriptionSchema.required(),
  cover_src: movieCoverSrcSchema.required(),
  video_src: movieVideoSrcSchema.required(),
  duration: movieDurationSchema.required(),
  year: movieYearSchema.required(),
  age_rate: movieAgeRateSchema.required(),
  // TODO
  // genres: movieGenresSchema.required(),
  // authors: movieAuthorsSchema.required(),
};

const updateMovieSchema = {
  title: movieTitleSchema,
  description: movieDescriptionSchema,
  cover_src: movieCoverSrcSchema,
  video_src: movieVideoSrcSchema,
  duration: movieDurationSchema,
  year: movieYearSchema,
  age_rate: movieAgeRateSchema,
  // TODO
  // genres: movieGenresSchema,
  // authors: movieAuthorsSchema,
};

module.exports = {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
};
