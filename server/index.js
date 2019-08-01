require('newrelic');
require('dotenv').config();

const bodyParser = require('body-parser');
const House = require('../db/index');
const Model = require('../db/models/index');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(cors());

var jsonParser = bodyParser.json();

// Create / POST - create a house
app.post('/houses/', jsonParser, (req, res) => {
  Model.createHouse(req.body)
    .then(({ affectedRows }) => {
      if (affectedRows === 0) {
        res.sendStatus(418);
      } else {
        res.sendStatus(200);
      }
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Read / GET - read a house
app.get('/houses/:houseID', (req, res) => {
  const { houseID } = req.params;
  Model.getHouse(houseID)
    .then(rows => res.send(rows))
    .catch(err => {
      if (err.message === 'Bad Request') {
        res.sendStatus(400);
      } else if (err.message === 'No record found') {
        res.sendStatus(404);
      } else {
        res.sendStatus(500);
      }
    });
});

// Update / PUT - update an item
app.put('/houses/:houseID', jsonParser, (req, res) => {
  const { houseID } = req.params;
  Model.updateHouse(houseID, req.body)
    .then(({ affectedRows }) => {
      if (affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

// Delete / DELETE - delete an item
app.delete('/houses/:houseID', (req, res) => {
  const { houseID } = req.params;
  Model.deleteHouse(houseID)
    .then(({ affectedRows }) => {
      if (affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
