/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
// set DEBUG=app:* && set NODE_ENV=development && node utils/seeds/apiKeys.js
const crypto = require('crypto');
const chalk = require('chalk');
const debug = require('debug')('app:scripts:apiKeys');
const mongo = require('../../lib/mongo');
const ApiKeys = require('../../lib/models/apiKeys');

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:users',
  'read:genres',
  'create:genres',
  'update:genres',
  'delete:genres',
  'read:movies',
  'create:movies',
  'update:movies',
  'delete:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies',
];

const publicScopes = [
  'signin:auth',
  'signup:auth',
  'read:genres',
  'read:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies',
];

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes,
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes,
  },
];

function generateRandomToken() {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex');
}

// eslint-disable-next-line consistent-return
async function seedApiKeys() {
  try {
    mongo();

    const promises = apiKeys.map(async (apiKey) => {
      const newApiKey = new ApiKeys(apiKey);
      await newApiKey.save();
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} api keys have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (err) {
    debug(chalk.red(err));
    process.exit(1);
  }
}

seedApiKeys();
