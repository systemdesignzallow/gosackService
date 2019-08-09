import GenDesc from '../client/components/App';
const React = require('react');
const ReactDOMServer = require('react-dom/server');

let renderHouse = houseData => ReactDOMServer.renderToString(<GenDesc house={houseData} />);

module.exports = renderHouse;
