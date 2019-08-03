const mariadb = require('mariadb');
require('dotenv').config();
const { env } = require('../config');

if (env === 'development') {
  console.log(`Environment ${env}`);
  const { devSocketPath, devDbUser, devDbPassword, devDb } = require('../config');
  const homes = mariadb.createPool({
    socketpath: devSocketPath,
    user: devDbUser,
    password: devDbPassword,
    database: devDb
  });

  module.exports = homes;
} else if (env === 'test') {
  console.log(`Environment ${env}`);
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
  console.log(`Environment ${env}`);
  const homes = mariadb.createPool({
    host: dockerHost,
    user: dockerUser,
    password: dockerDbPassword,
    database: dockerDb
  });

  module.exports = homes;
}

// TODO Production
