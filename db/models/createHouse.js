const House = require('../index');
const { generateQueryForCreate } = require('./modelHelpers');

let createHouse = houseData => {
  return new Promise((resolve, reject) => {
    if (Number.isNaN(parseInt(houseID, 10))) {
      throw new Error('Bad Request');
    }
    House.getConnection()
      .then(conn => {
        let sql = generateQueryForCreate();
        return [conn.query(sql, [houseID]), conn];
      })
      .then(([rows, conn]) => {
        // what is this behavior now?
        if (rows.length === 0) {
          // throw new Error('No record found');
        }
        conn.end();
        resolve(rows);
      })
      .catch(err => {
        console.error(err);
        conn.end();
        reject(err);
      });
  });
};

module.exports = createHouse;
