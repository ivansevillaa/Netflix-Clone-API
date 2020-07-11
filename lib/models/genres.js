const { Schema, model } = require('mongoose');

const genreSchema = new Schema({
  genre: String,
});

const genreModel = model('Genres', genreSchema);

module.exports = genreModel;
