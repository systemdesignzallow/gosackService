const House = require('../index');

let getHouse = (houseID) => {
  return new Promise ((resolve, reject) => {
    House.getConnection()
      .then(conn => {
        let sql = `SELECT * FROM homes WHERE homeID=?`;
        conn.query(sql, [houseID])
          .then(rows => {
            conn.end();
            resolve(rows);
          })
          .catch(err => {
            conn.end();
            reject(err);
          })
      }).catch(err => {
        reject(err);
      })
  });
}
module.exports = getHouse;