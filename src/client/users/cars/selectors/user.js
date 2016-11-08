import store from '../store';

const details = function () {
  return store.getState().user.get('details').toJS();
};

export default {
  details
};
