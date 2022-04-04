const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const express = require('express');
const rateLimit = require('express-rate-limit');

const api = require('./routes/api');

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: '*',
  })
);

// rate limit
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 100, // max number of requests you can make in the above time frame
});

app.use(limiter);
app.set('trust proxy', 1);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  express.static(
    path.join(__dirname, '..', 'public')
  )
);

app.use('/v1', api);

module.exports = app;
