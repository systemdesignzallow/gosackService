const mariadb = require('mariadb');
const redis = require('redis');
const { env } = require('../config');
require('dotenv').config();

if (env === 'development') {
  console.log(`Environment ${env}`);
  const { devDbHost, devDbUser, devDbPassword, devDb } = require('../config');
  const homes = mariadb.createPool({
    host: devDbHost,
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
  const {
    dockerHost,
    dockerUser,
    dockerDbPassword,
    dockerDb,
    redisPort,
    redisHost
  } = require('../config');
  console.log(`Environment ${env}`);
  let db = {
    House: mariadb.createPool({
      host: dockerHost,
      user: dockerUser,
      password: dockerDbPassword,
      database: dockerDb
    }),

    cache: redis.createClient({
      host: redisHost,
      port: redisPort
    })
  };

  module.exports = db;
}

