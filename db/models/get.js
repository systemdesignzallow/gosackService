const House = require('../index');

let getHouse = (req, res) => {
 let houseID = req.path.split('/');
 houseID = houseID[houseID.length - 1];
 House.getConnection()
    .then(conn => {
      let sql = `SELECT * FROM homes WHERE homeID=?`;
      conn.query(sql, [houseID])
        .then(rows => {
          res.send(rows); 
          conn.end();
        })
        .catch(err => {
          conn.end();
          console.error(err);
          res.sendStatus(400);
          res.render('QUERY ERROR', err);
        })
    }).catch(err => {
      console.log(`Not connected to MariaDB: ${err}`);
      res.render('DATABASE ERRROR', err);
    });
}

module.exports = getHouse;