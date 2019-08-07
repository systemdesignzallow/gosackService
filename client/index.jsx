import React from 'react';
import ReactDOM from 'react-dom';
import GenDesc from './components/App.jsx';
const url = 'ec2-52-32-60-132.us-west-2.compute.amazonaws.com';

ReactDOM.hydrate(<GenDesc house={house} />, document.getElementById('gendesc'));

export default url;
