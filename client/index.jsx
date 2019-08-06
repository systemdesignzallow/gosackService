import React from 'react';
import ReactDOM from 'react-dom';
import GenDesc from './components/App.jsx';
import { defaultCipherList } from 'constants';

const url = 'ec2-52-32-60-132.us-west-2.compute.amazonaws.com';

const houseId = window.location.pathname;
fetch(`http://${url}${houseId}}`)
  .then(house => house.json())
  .then(house => ReactDOM.render(<GenDesc house={house} />, document.getElementById('gendesc')));

export default url;
