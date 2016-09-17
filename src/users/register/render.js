import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const el = document.querySelector('#app');

export default function () {
  ReactDOM.render(<App />, el);
};
