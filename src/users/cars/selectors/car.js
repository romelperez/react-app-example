import store from '../store';

export default function (info) {

  const { _id } = info;

  const car = store.
    get('cars').
    find(car => car.get('_id') === _id);

  if (car) {
    return car.toJS();
  }
};
