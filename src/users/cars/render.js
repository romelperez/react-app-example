import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const el = document.querySelector('#app');

const render = function () {
  ReactDOM.render(<App />, el);
};

export default render;
