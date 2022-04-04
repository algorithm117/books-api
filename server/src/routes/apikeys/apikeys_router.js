const express = require('express');
const apiKeysRouter = express.Router();

const httpGetApiKey = require('./apikeys_controller');

apiKeysRouter.get('/', httpGetApiKey);

module.exports = apiKeysRouter;
