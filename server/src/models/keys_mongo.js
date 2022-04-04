const mongoose = require('mongoose');

const keysSchema = new mongoose.Schema({
  keyId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  'Key',
  keysSchema
);
