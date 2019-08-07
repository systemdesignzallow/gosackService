import GenDesc from '../client/components/App';
const React = require('react');
const ReactDOMServer = require('react-dom/server');

let renderHouse = houseData => {
  const component = ReactDOMServer.renderToString(<GenDesc house={houseData[0]} />);
  return `<!DOCTYPE html>
          <head></head>
          <body>
          <div id="gendesc">${component}</div>
          <script src="app-bundle.js"></script>
          </body>`;
};

module.exports = renderHouse;
