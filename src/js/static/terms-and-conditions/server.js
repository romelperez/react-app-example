import React, { PropTypes, createFactory } from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from './containers/App';

const AppFactory = createFactory(App);

const render = function (props) {
  const AppInstance = AppFactory(props);
  return renderToStaticMarkup(AppInstance);
};

export default render;
