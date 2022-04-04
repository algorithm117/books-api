const generateApiKeyEmail = require('../services/email');
const generateApiKey = require('generate-api-key');
const keysDatabase = require('../models/keys_mongo');

async function getApiKey(userEmailAddress) {
  try {
    const userHasApiKey =
      await checkUserHasApiKey(userEmailAddress);

    if (userHasApiKey) {
      throw new Error(
        'This email address has already registered for an API Key. Please check your email for the API Key.'
      );
    }

    const apiKey = generateApiKey({
      method: 'string',
      length: 26,
    });

    await generateApiKeyEmail(
      userEmailAddress,
      apiKey
    );

    await keysDatabase.findOneAndUpdate(
      {
        keyId: apiKey,
      },
      {
        keyId: apiKey,
        email: userEmailAddress,
      },
      {
        upsert: true,
      }
    );
  } catch (err) {
    throw err;
  }
}

async function checkUserHasApiKey(
  userEmailAddress
) {
  return await keysDatabase.findOne({
    email: userEmailAddress,
  });
}

module.exports = getApiKey;
