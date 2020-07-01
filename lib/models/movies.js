const { Schema, model } = require('mongoose');

const authorSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  position: { type: String, required: true },
});

const movieSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  cover_src: { type: String, required: true },
  video_src: { type: String, required: true },
  duration: { type: Number, required: true },
  year: { type: Date, required: true },
  age_rate: { type: Number, required: true },
  genres: [{ type: Schema.Types.ObjectId, ref: 'genres', required: true }],
  authors: [authorSchema],
});

const moviesModel = model('Movies', movieSchema);

module.exports = moviesModel;
