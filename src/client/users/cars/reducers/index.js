import { combineReducers } from 'redux';

import intern   from './intern';
import user     from './user';
import vehicles from './vehicles';

export default combineReducers({
  intern,
  user,
  vehicles,
});
