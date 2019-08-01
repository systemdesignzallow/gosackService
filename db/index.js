const mariadb = require('mariadb');
require('dotenv').config();
const { env } = require('../config');

if (env === 'development') {
  const { devSocketPath, devDbUser, devDbPassword, devDb } = require('../config');
  const homes = mariadb.createPool({
    socketpath: devSocketPath,
    user: devDbUser,
    password: devDbPassword,
    database: devDb
  });
  
  module.exports = homes;
} else if (env === 'test') {
  const { testSocketPath, testDbUser, testDbPassword, testDb } = require('../config');
  const homes = mariadb.createPool({
    socketpath: testSocketPath,
    user: testDbUser,
    password: testDbPassword,
    database: testDb
  });

  module.exports = homes;
}
// TODO Production
