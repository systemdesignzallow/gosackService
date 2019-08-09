require('newrelic');
require('ignore-styles');
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const fs = require('fs');
const path = require('path');
const style = fs.readFileSync(path.join(__dirname, '../client/styles.css'), { encoding: 'utf8' });
const bodyParser = require('body-parser');
const Model = require('../db/models/index');
const renderHouse = require('../templates/renderHouse');
const express = require('express');
const cors = require('cors');
const app = express();
const { cache } = require('../db/index');

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
        res.sendStatus(201);
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
    .then(rows => {
      cache.set(`${houseID}`, `${JSON.stringify(rows[0])}`);
      let data = {
        html: renderHouse(rows[0]),
        style: style
      };
      res.send(data);
    })
    .catch(err => {
      if (err.message === 'Bad Request') {
        console.error(err);
        res.sendStatus(400);
      } else if (err.message === 'No record found') {
        console.error(err);
        res.sendStatus(404);
      } else {
        console.error(err);
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

const PORT = process.env.LOCAL_SERVICE_SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
