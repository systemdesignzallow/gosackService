const House = require('../index');

let createHouse = (houseID, houseData) => {
  return new Promise ((resolve, reject) => {
    if (Number.isNaN(parseInt(houseID, 10))) {
      throw new Error('Bad Request');
    }   

    // Single table syntax example
    // INSERT INTO person (first_name, last_name) VALUES ('John', 'Doe');

    House.getConnection()
      .then(conn => {
        let sql = `INSERT INTO homes  

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

module.exports = createHouse;