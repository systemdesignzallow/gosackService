const House = require('../index');
const { generateQueryForUpdate } = require('./modelHelpers');

let updateHouse = (houseID, houseData) => {
  return new Promise((resolve, reject) => {
    if (Number.isNaN(parseInt(houseID, 10))) {
      throw new Error('Bad Request');
    }

    let [sql, queryParameters] = generateQueryForUpdate(houseData);

    House.getConnection()
      .then(conn => {
        return [conn.query(sql, [...queryParameters, houseID]), conn];
      })
      .then(([rows, conn]) => {
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

module.exports = updateHouse;
