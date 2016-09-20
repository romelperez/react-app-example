import store from '../store';

export default function (info) {

  const state = store.getState();
  const user = state.get('user');

  return user.toJS();
};
