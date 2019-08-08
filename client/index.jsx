import React from 'react';
import ReactDOM from 'react-dom';
import GenDesc from './components/App.jsx';

ReactDOM.hydrate(<GenDesc house={house} />, document.getElementById('app'));
