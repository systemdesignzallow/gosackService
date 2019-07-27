require('dotenv').config();
const express = require('express');
const { House } = require('../db/index');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.static('./public'));
app.use(cors());
// Read / GET - read an item
app.get('/houses/*', (req, res) => {
  let houseID = req.path.split('/');
  houseID = houseID[houseID.length - 1];
  House.findOne({ _id: houseID }, (err, docs) => {
    res.send(docs);
  });
  
  // Delete / DELETE - delete an item
  app.delete('/houses/delete/*', (req, res) => {
    let houseID = req.path.split('/');
    houseID = houseID[houseID.length - 1];
    House.findOneAndDelete({ _id: houseID }, (err, docs) => {
      res.send(docs);
  });

  // Update / PUT - update an item
  app.put('/houses/update/*', (req, res) => {
    let houseID = req.path.split('/');
    houseID = houseID[houseID.length - 1];
    House.findOneAndUpdate({ _id: houseID }, (err, docs) => {
      res.send(docs);
  });

  // Create / POST - create a new item
  app.post('/houses/create/', (req, res) => {
    let houseID = req.path.split('/');
    House.findOneAndDelete({ _id: houseID }, (err, docs) => {
      houseID = houseID[houseID.length - 1];
      res.send(docs);
  });
});

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
