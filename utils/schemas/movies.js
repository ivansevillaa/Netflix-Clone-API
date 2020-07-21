const joi = require('@hapi/joi');

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/); // mongodb id regex
const movieTitleSchema = joi.string().max(52);
const movieDescriptionSchema = joi.string().max(300);
const movieCoverSrcSchema = joi.string().uri();
const movieLogoSrcSchema = joi.string().uri();
const movieVideoSrcSchema = joi.string().uri();
const movieDurationSchema = joi.number().min(1).max(720);
const movieYearSchema = joi.number().min(1888).max(2020);
const movieAgeRateSchema = joi.number().max(18);
const movieGenresSchema = joi
  .array()
  .items(joi.string().regex(/^[0-9a-fA-F]{24}$/)); // mongodb id regex
const movieAuthorNameSchema = joi.string().min(1).max(12);
const movieAuthorSurnameSchema = joi.string().min(1).max(12);
const movieAuthorPositionSchema = joi.string().min(1).max(12);
const movieAuthorsSchema = joi.array();

const createMovieSchema = {
  title: movieTitleSchema.required(),
  description: movieDescriptionSchema.required(),
  cover_src: movieCoverSrcSchema.required(),
  logo_src: movieLogoSrcSchema.required(),
  video_src: movieVideoSrcSchema.required(),
  duration: movieDurationSchema.required(),
  year: movieYearSchema.required(),
  age_rate: movieAgeRateSchema.required(),
  genres: movieGenresSchema.required(),
  authors: movieAuthorsSchema
    .items({
      name: movieAuthorNameSchema.required(),
      surname: movieAuthorSurnameSchema.required(),
      position: movieAuthorPositionSchema.required(),
    })
    .required(),
};

const updateMovieSchema = {
  title: movieTitleSchema,
  description: movieDescriptionSchema,
  cover_src: movieCoverSrcSchema,
  logo_src: movieLogoSrcSchema,
  video_src: movieVideoSrcSchema,
  duration: movieDurationSchema,
  year: movieYearSchema,
  age_rate: movieAgeRateSchema,
  genres: movieGenresSchema,
  authors: movieAuthorsSchema.items({
    name: movieAuthorNameSchema,
    surname: movieAuthorSurnameSchema,
    position: movieAuthorPositionSchema,
  }),
};

module.exports = {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
};
