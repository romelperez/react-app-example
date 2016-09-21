import { List } from 'immutable';

const update = function (state, action) {

  const newBrands = action.payload;

  return state.
    update('brands', brands => {
      return brands.merge(List(newBrands));
    });
};

export default { update };
