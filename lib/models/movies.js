const { Schema, model } = require('mongoose');

const authorSchema = new Schema({
  name: String,
  surname: String,
  position: String,
});

const movieSchema = new Schema({
  title: String,
  description: String,
  cover_src: String,
  video_src: String,
  duration: Number,
  year: Number,
  age_rate: Number,
  genres: [{ type: Schema.Types.ObjectId, ref: 'genres' }],
  authors: [authorSchema],
});

const moviesModel = model('Movies', movieSchema);

module.exports = moviesModel;
