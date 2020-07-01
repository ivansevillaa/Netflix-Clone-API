const mongoose = require('mongoose');
const config = require('../config/index');

const dbUser = encodeURIComponent(config.dbUser);
const dbPassword = encodeURIComponent(config.dbPassword);
const MONGO_URI = `mongodb+srv://${dbUser}:${dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

async function connect(uri = MONGO_URI) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('[mongodb] is connected');
  } catch (err) {
    console.error('[mongodb] we could not connected\n', err);
  }
}

module.exports = connect;
