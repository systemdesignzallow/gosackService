const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  env: process.env.NODE_ENV,
  servicePort: process.env.LOCAL_SERVICE_SERVER_PORT,

  devDB: process.env.DEV_DB,
  devSocketPath: process.env.DEV_DB_SOCKETPATH,
  devDbUser: process.env.DEV_DB_USER,
  devDbPassword: process.env.DEV_DB_PW,
  devDb: process.env.DEV_DB,

  testDB: process.env.TEST_DB,
  testSocketPath: process.env.TEST_DB_SOCKETPATH,
  testDbUser: process.env.TEST_DB_USER,
  testDbPassword: process.env.TEST_DB_PW,
  testDb: process.env.TEST_DB
};