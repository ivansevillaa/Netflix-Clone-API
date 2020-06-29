const express = require('express');

const config = require('./config/index');

const router = express.Router();
const app = express();

app.use(router);

router.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(config.port, () => {
  console.log(`App is listening on http://localhost:${config.port}`);
});
