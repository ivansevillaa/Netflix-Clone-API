const express = require('express');
const config = require('./config/index');
const moviesApi = require('./routes/movies');
const mongo = require('./lib/mongo');
const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

const app = express();

mongo();

// body parser
app.use(express.json());
// routes
moviesApi(app);
// error handlers
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`App is listening on http://localhost:${config.port}`);
});
