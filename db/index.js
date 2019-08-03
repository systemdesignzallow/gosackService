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
} else if (env === 'docker') {
const { dockerHost, dockerPort, dockerUser, dockerDbPassword, dockerDb } = require('../config');
console.log(dockerHost);
const homes = mariadb.createPool({
  host: dockerHost,
  port: dockerPort,
  user: dockerUser,
  password: dockerDbPassword,
  database: dockerDb
});

module.exports = homes;
// }

// TODO Production
