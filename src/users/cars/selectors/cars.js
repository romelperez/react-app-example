import store from '../store';

export default function (info) {
  return store.get('cars').toJS();
};
