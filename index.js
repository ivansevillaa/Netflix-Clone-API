const express = require('express');
const config = require('./config/index');
const moviesApi = require('./routes/movies');
const genresApi = require('./routes/genres');
const authApi = require('./routes/auth');
const mongo = require('./lib/mongo');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

// connect to moongodb
mongo();

// body parser
app.use(express.json());

// routes
authApi(app);
moviesApi(app);
genresApi(app);

// 404 handler
app.use(notFoundHandler);

// error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`App is listening on http://localhost:${config.port}`);
});
