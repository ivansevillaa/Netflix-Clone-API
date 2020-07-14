/* eslint-disable comma-dangle */
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const Users = require('../lib/models/users');

async function listUsers() {
  const users = await Users.find();

  return users;
}

async function getUser(email) {
  const user = await Users.find({ email });
  if (!user.length) {
    // user not exist
    return null;
  }

  return user;
}

async function createUser(user) {
  const email = await Users.find({ email: user.email });
  if (email.length) {
    throw boom.conflict('Email already exists');
  }

  const username = await Users.find({ username: user.username });
  if (username.length) {
    throw boom.conflict('Username already exists');
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);

  const newUser = new Users({
    ...user,
    password: hashedPassword,
  });
  const createdUser = await newUser.save();

  const returnData = {
    id: createdUser._id,
    email: createdUser.email,
    username: createdUser.username,
  };

  return returnData;
}

async function updateUser(userId, userData) {
  const updatedUser = await Users.findOneAndUpdate(
    { _id: userId },
    { $set: userData },
    { new: true }
  );

  if (!updatedUser) {
    throw boom.notFound('User not found');
  }

  return updatedUser;
}

async function deleteUser(userId) {
  const user = await Users.findById(userId);

  if (user) {
    await Users.deleteOne(user);
  } else {
    throw boom.notFound('User not found');
  }
}

module.exports = {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
