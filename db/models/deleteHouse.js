const House = require('../index');

let deleteHouse = houseID => {
  return new Promise((resolve, reject) => {
    if (Number.isNaN(parseInt(houseID, 10))) {
      throw new Error('Bad Request');
    }

    House.getConnection()
      .then(conn => {
        let sql = `DELETE FROM homes WHERE homeID=?`;
        return [conn.query(sql, [houseID]), conn];
      })
      .then(([rows, conn]) => {
        conn.end();
        console.log(rows)
        resolve(rows);
      })
      .catch(err => {
        console.error(err);
        conn.end();
        reject(err);
      });
  });
};

module.exports = deleteHouse;
