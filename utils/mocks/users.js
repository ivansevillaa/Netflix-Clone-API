const config = require('../../config/index');

const users = [
  {
    email: 'thecrazywarwick@undefined.com',
    username: 'Warwick',
    password: config.defaultAdminPassword,
    photo_src: 'http://dummyimage.com/187x185.jpg/5fa2dd/ffffff',
    isAdmin: true,
  },
  {
    email: 'garen@undefined.com',
    username: 'Garen',
    password: config.defaultUserPassword,
    photo_src: 'http://dummyimage.com/187x185.jpg/5fa2dd/ffffff',
  },
  {
    email: 'tristana@undefined.com',
    username: 'Tristana',
    password: config.defaultUserPassword,
    photo_src: 'http://dummyimage.com/187x185.jpg/5fa2dd/ffffff',
  },
];

module.exports = users;
