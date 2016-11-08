import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';

const el = document.querySelector('#app');

const render = function () {
  ReactDOM.render(<Root />, el);
};

export default render;
