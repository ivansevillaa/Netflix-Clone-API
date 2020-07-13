/* eslint-disable import/no-extraneous-dependencies */
// set DEBUG=app:* && set NODE_ENV=development && node utils/seeds/users.js
const bcrypt = require('bcrypt');
const chalk = require('chalk');
const debug = require('debug')('app:scripts:users');
const usersMock = require('../mocks/users');
const mongo = require('../../lib/mongo');
const Users = require('../../lib/models/users');

async function createUser(user) {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const newUser = new Users({
    ...user,
    password: hashedPassword,
  });

  await newUser.save();
}

// eslint-disable-next-line consistent-return
async function seedUsers() {
  try {
    mongo();

    const promises = usersMock.map(async (user) => {
      await createUser(user);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} users have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (err) {
    debug(chalk.red(err));
    process.exit(1);
  }
}

seedUsers();
