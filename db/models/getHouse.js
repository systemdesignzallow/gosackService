const House = require('../index');

let getHouse = (houseID) => {
  return new Promise ((resolve, reject) => {
    console.log(typeof Number.isNaN(parseInt(houseID, 10)));
    if (Number.isNaN(parseInt(houseID, 10))) {
      console.log('error');
      throw new Error('Bad Request');
    }   

    House.getConnection()
      .then(conn => {
        let sql = `SELECT * FROM homes WHERE homeID=?`;
        return conn.query(sql, [houseID]);
      })
      .then(rows => {
        if(rows.length === 0) {
          throw new Error('No record found');
        }
        resolve(rows);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      })
  });
}

module.exports = getHouse;