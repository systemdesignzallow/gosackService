const mariadb = require('mariadb');

// sock : /run/mysqld/mysqld.sock --I found this by stopping the mariaDb service and attempting to run the cli
const homes = mariadb.createPool({socketpath: '/run/mysqld/mysqld.sock', user: 'patrick', password:'ekauq', connectionLimit: 5, database:'gosackService'});

module.exports = homes;
