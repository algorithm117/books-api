const express = require('express');
const booksRouter = express.Router();

const {
  httpGetAllBooks,
  httpGetBook,
  httpAddNewBook,
  httpUpdateBook,
  httpDeleteBook,
} = require('./books_controller');

const keysCollection = require('../../models/keys_mongo');

async function checkApiKeyIsPresentAndIsValid(
  req,
  res,
  next
) {
  if (!req.query.api_key) {
    return res.status(403).json({
      error:
        'Please make sure to include your API key when sending a request.',
    });
  }

  const validApiKey = await checkIfValidApiKey(
    req.query.api_key
  );

  if (!validApiKey) {
    return res.status(403).json({
      error:
        'You are using an invalid API key that is not registered. Please request a new API key.',
    });
  }

  next();
}

async function checkIfValidApiKey(apiKey) {
  return await keysCollection.findOne({
    keyId: apiKey,
  });
}

booksRouter.use(checkApiKeyIsPresentAndIsValid);

booksRouter.get('/', httpGetAllBooks);
booksRouter.get('/:id', httpGetBook);

booksRouter.post('/', httpAddNewBook);

booksRouter.put('/', httpUpdateBook);

booksRouter.delete('/', httpDeleteBook);

module.exports = booksRouter;
