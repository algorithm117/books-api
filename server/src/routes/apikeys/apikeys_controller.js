const getApiKey = require('../../models/keys_model');

async function httpGetApiKey(req, res) {
  if (!req.query || !req.query.email) {
    res.status(400).json({
      error:
        'Please provide a valid email to receive an API key.',
    });
  }

  try {
    const userEmailAddress = req.query.email;
    await getApiKey(userEmailAddress);

    res.status(200).json({
      success:
        'Your API key was generated and sent to your email. Please make sure to save it safely as you will not be able to request another key with the same email address.',
    });
  } catch (err) {
    res.status(500).json({
      error: `There was an error sending your API key. ${err}`,
    });
  }
}

module.exports = httpGetApiKey;
