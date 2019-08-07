require('newrelic');
const House = require('../index');

let getHouse = houseID => {
  return new Promise((resolve, reject) => {
    if (Number.isNaN(parseInt(houseID, 10))) {
      throw new Error('Bad Request');
    }

    House.getConnection()
      .then(conn => {
        let sql = `SELECT * FROM homes WHERE homeID=?`;
        return [conn.query(sql, [houseID]), conn];
      })
      .then(([rows, conn]) => {
        if (rows.length === 0) {
          throw new Error('No record found');
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

module.exports = getHouse;
