import store from '../store';

export default function (info) {

  const { _id } = info;

  const brand = store.
    get('brands').
    find(brand => brand.get('_id') === _id);

  if (brand) {
    return brand.toJS();
  }
};
