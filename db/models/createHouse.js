const House = require('../index');
const { generateQueryForCreate } = require('./modelHelpers');

let createHouse = houseData => {
  return new Promise((resolve, reject) => {
    House.getConnection()
      .then(conn => {
        let [sql, values] = generateQueryForCreate(houseData);
        console.log(sql, values);
        return [conn.query(sql, values), conn];
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

module.exports = createHouse;
