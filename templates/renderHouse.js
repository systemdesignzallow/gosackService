import GenDesc from '../client/components/App';
const React = require('react');
const ReactDOMServer = require('react-dom/server');

let renderHouse = houseData => {
  // console.log(houseData);
  const component = ReactDOMServer.renderToString(<GenDesc house={houseData} />);
  // console.log(component);
  return component;
};

module.exports = renderHouse;
