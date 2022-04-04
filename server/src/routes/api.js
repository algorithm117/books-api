const express = require('express');

const booksRouter = require('./books/books_router');
const apiKeysRouter = require('./apikeys/apikeys_router');

const api = express.Router();

api.use('/books', booksRouter);
api.use('/apikey', apiKeysRouter);

module.exports = api;
