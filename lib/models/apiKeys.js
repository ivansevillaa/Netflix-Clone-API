const { Schema, model } = require('mongoose');

const apiKeysSchema = new Schema({
  token: String,
  scopes: Array,
});

const apiKeysModel = model('Api-Keys', apiKeysSchema);

module.exports = apiKeysModel;
