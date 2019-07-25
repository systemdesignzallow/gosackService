require('dotenv').config();
const express = require('express');
const { House } = require('../db/index');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.static('./public'));
app.use(cors());
app.get('/houses/*', (req, res) => {
  let houseID = req.path.split('/');
  houseID = houseID[houseID.length - 1];
  House.findOne({ _id: houseID }, (err, docs) => {
    res.send(docs);
  });
});

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
