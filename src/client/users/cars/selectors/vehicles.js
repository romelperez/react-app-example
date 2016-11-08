import store from '../store';

const brands = function () {
  return store.getState().vehicles.get('brands').toJS();
};

export default {
  brands
};
