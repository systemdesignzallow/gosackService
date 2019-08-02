import React from 'react';
import ReactDOM from 'react-dom';
import GenDesc from './components/App.jsx';
const dotenv = require('dotenv');
dotenv.config();
const { servicePort } = require('../config');

const houseId = window.location.pathname;
fetch(`http://localhost:${servicePort}${houseId}}`)
  .then(house => house.json())
  .then(house => ReactDOM.render(<GenDesc house={house} />, document.getElementById('gendesc')));
