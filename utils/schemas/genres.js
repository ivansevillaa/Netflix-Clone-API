const joi = require('@hapi/joi');

const genreIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/); // mongodb id regex

// for create a genre and update a genre the genre field have to be required
const genreSchema = {
  genre: joi.string().min(1).max(18).required(),
};

module.exports = {
  genreIdSchema,
  genreSchema,
};
