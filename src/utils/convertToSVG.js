import React from 'react';
import { Buffer } from 'buffer';
import ReactDOMServer from 'react-dom/server';
import { Layer } from 'grommet-icons';
const convertToSVG = () => {
  const svgString = ReactDOMServer.renderToStaticMarkup(<Layer />);
  const base64String = Buffer.from(svgString).toString('base64');
  const dataURI = `data:image/svg+xml;base64,${base64String}`;
  return dataURI;
};

export default convertToSVG;
