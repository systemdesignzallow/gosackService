import React from 'react';
import ReactDOM from 'react-dom';
import GenDesc from './app.jsx';

fetch(
  `http://ec2-52-14-98-3.us-east-2.compute.amazonaws.com/houses/${Math.floor(Math.random() * 98)}`
)
  .then(res => res.json())
  .then(house => ReactDOM.render(<GenDesc house={house} />, document.getElementById('gendesc')));
