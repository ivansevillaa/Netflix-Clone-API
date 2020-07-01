const express = require('express');
const config = require('./config/index');
const moviesApi = require('./routes/movies');
const mongo = require('./lib/mongo');

const app = express();

// body parser
app.use(express.json());

moviesApi(app);
mongo();

app.listen(config.port, () => {
  console.log(`App is listening on http://localhost:${config.port}`);
});
