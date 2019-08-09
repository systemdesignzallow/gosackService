require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV,
  servicePort: process.env.LOCAL_SERVICE_SERVER_PORT,
  newRelicKey: process.env.NEW_RELIC,

  devDB: process.env.DEV_DB,
  devDbHost: process.env.DEV_DB_HOST,
  devDbUser: process.env.DEV_DB_USER,
  devDbPassword: process.env.DEV_DB_PW,
  devDb: process.env.DEV_DB,

  testDB: process.env.TEST_DB,
  testSocketPath: process.env.TEST_DB_SOCKETPATH,
  testDbUser: process.env.TEST_DB_USER,
  testDbPassword: process.env.TEST_DB_PW,
  testDb: process.env.TEST_DB,

  dockerHost: process.env.DOCKER_DB_HOST,
  dockerPort: process.env.DOCKER_DB_PORT,
  dockerUser: process.env.DOCKER_DB_USER,
  dockerDbPassword: process.env.DOCKER_DB_PW,
  dockerDb: process.env.DOCKER_DB,

  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT
};
