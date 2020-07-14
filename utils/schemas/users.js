const joi = require('@hapi/joi');

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/); // mongodb id regex
const userEmailSchema = joi.string().max(99).regex(emailRegex);
const userUsernameSchema = joi.string().min(1).max(16);
const userPasswordSchema = joi.string().regex(passwordRegex);
const userPhotoSrcSchema = joi.string().uri();
const userIsAdminSchema = joi.boolean();

const createUserSchema = {
  email: userEmailSchema.required(),
  username: userUsernameSchema.required(),
  password: userPasswordSchema.required(),
  photo_src: userPhotoSrcSchema,
  isAdmin: userIsAdminSchema,
};

const updateUserSchema = {
  email: userEmailSchema,
  username: userUsernameSchema,
  password: userPasswordSchema,
  photo_src: userPhotoSrcSchema,
  isAdmin: userIsAdminSchema,
};

module.exports = {
  userIdSchema,
  createUserSchema,
  updateUserSchema,
};
