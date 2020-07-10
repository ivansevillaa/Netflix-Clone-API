const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
  photo_src: String,
  isAdmin: Boolean,
});

const usersModel = model('Users', userSchema);

module.exports = usersModel;
