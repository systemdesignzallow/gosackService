require('newrelic');
require('dotenv').config();
const express = require('express');
const House = require('../db/index');
const cors = require('cors');
const app = express();

app.use(express.static('./public'));
app.use(cors());

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Read / GET - read a house
// abstact to models
app.get('/houses/*', (req, res) => {
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
  });

  app.get('/test', (req, res) => {
    let houseID = getRandomInt(1e7);
    House.getConnection()
    .then(conn => {
      conn.query(`SELECT * FROM homes WHERE homeID=${House.escape(houseID)}`)
        .then((rows) => {
          res.send(rows); 
          conn.end();
        })
        .catch(err => {
          conn.end();
        })
    }).catch(err => {
      console.log(`Not connected to MariaDB: ${err}`);
    });
  });

  // Delete / DELETE - delete an item
  // app.delete('/houses/delete/*', (req, res) => {
  //   let houseID = req.path.split('/');
  //   houseID = houseID[houseID.length - 1];
  //   House.findOneAndDelete({ _id: houseID }, (err, docs) => {
  //     res.send(docs);
  // });

  // Update / PUT - update an item
  // app.put('/houses/update/*', (req, res) => {
  //   let houseID = req.path.split('/');
  //   houseID = houseID[houseID.length - 1];
  //   House.findOneAndUpdate({ _id: houseID }, (err, docs) => {
  //     res.send(docs);
  // });

  // Create / POST - create a new item
//   app.post('/houses/create/', (req, res) => {
//     House.insert({
//       appliances: req.appliances,
//        interiorFeatures: req.interiorFeatures,
//        construction: req.construction,
//        roof: req.roof,
//        exterior: req.exterior,
//        flooring: req.flooring,
//        homeId: req.homeId,
//        homeAddress: req.homeAddress,
//        price: req.price,
//        beds: req.beds,
//        baths: req.baths,
//        rooms: req.rooms,
//        stories: req.stories,
//        floorSize: req.floorSize,
//        spaces: req.spaces,
//        houseDescription: req.houseDescription,
//        houseType: req.houseType,
//        yearBuilt: req.yearBuilt,
//        heating: req.heating,
//        cooling: req.cooling,
//        parking: req.parking,
//        lotSize: req.lotSize,
//        daysListed: req.daysListed,
//        saves: req.saves
//       }, (err, docs) => {
//       res.send(docs);
//   });
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
