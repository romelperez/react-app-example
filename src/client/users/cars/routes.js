import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import App    from './containers/App';
import Brands from './containers/Brands';
import Brand  from './containers/Brand';
import Car    from './containers/Car';
import User   from './containers/User';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Brands} />
    <Route path='/brand/:brandId' component={Brand} />
    <Route path='/car/:carId' component={Car} />
    <Route path='/user' component={User} />
    <Redirect from='*' to='/' />
  </Route>
);
