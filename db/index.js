const mariadb = require('mariadb');

// sock : /run/mysqld/mysqld.sock --I found this by stopping the mariaDb service and attempting to run the cli
// const homes = mariadb.createPool({
//   socketpath: '/run/mysqld/mysqld.sock',
//   user: 'patrick',
//   password: 'ekauq',
//   database: 'gosackService'
// });

const homes = mariadb.createPool({
  // change for test/dev/production
  // process.env
  // set environment variable in npm script
  socketpath: '/run/mysqld/mysqld.sock',
  user: 'root',
  password: 'ekauq',
  // make special database for test
  database: 'testService'
});

module.exports = homes;
