import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes   from '../../routes';
import store    from '../../store';

const history = syncHistoryWithStore(hashHistory, store);

const Root = function () {
  return (
    <Router history={history} routes={routes} />
  );
};

export default Root;
