import store from '../store';

export default function (info) {
  return store.get('brands').toJS();
};
