import React from 'react';
import ReactDOM from 'react-dom';
import GenDesc from './components/App.jsx';
// TODO: Fix to env var, having webpack issues with dotenv
const servicePort = 6001;

const houseId = window.location.pathname;
fetch(`http://localhost:${servicePort}${houseId}}`)
  .then(house => house.json())
  .then(house => ReactDOM.render(<GenDesc house={house} />, document.getElementById('gendesc')));
