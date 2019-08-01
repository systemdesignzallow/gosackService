import React from 'react';
import ReactDOM from 'react-dom';
import GenDesc from './components/App.jsx';
// const servicePort = 6001;
// ${servicePort}

const houseId = window.location.pathname;
fetch(`http://localhost:6001${houseId}}`)
  .then(house => house.json())
  .then(house => ReactDOM.render(<GenDesc house={house} />, document.getElementById('gendesc')));
