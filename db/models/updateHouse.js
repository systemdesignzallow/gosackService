const House = require('../index');

let updateHouse = (houseID, houseData) => {
  return new Promise ((resolve, reject) => {
    if (Number.isNaN(parseInt(houseID, 10))) {
      throw new Error('Bad Request');
    }   

    // Single table syntax example
    // UPDATE table_name SET column1 = value1, column2 = value2 WHERE id=100;

    House.getConnection()
      .then(conn => {
        let sql = `UPDATE homes WHERE 

        `;
        return [conn.query(sql, [houseID]), conn];
      })
      .then(([rows, conn]) => {
        if(rows.length === 0) {
          throw new Error('No record found');
        }
        conn.end();
        resolve(rows);
      })
      .catch(err => {
        console.error(err);
        conn.end();
        reject(err);
      })
  });
}

module.exports = updateHouse;