const boom = require('@hapi/boom');
const ApiKeys = require('../lib/models/apiKeys');

async function getApiKey(token) {
  const apiKey = await ApiKeys.find({ token });

  if (!apiKey.length) {
    return false;
  }

  return apiKey;
}

module.exports = {
  getApiKey,
};
