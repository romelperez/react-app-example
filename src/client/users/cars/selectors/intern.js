import store from '../store';

const started = function () {
  return store.getState().intern.get('started').toJS();
};

export default {
  started
};
