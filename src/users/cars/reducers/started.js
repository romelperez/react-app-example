import { Map } from 'immutable';

export default function (state, action) {

  const { user } = action.payload;

  return state.
    update('user', () => Map(user)).
    updateIn(['intern', 'starting'], () => false).
    updateIn(['intern', 'started'], () => true);
};
