import appConsts  from '../../app-consts';
import defaults   from './defaults';
import brands     from './brands';

export default function (state, action) {

  if (!state) {
    return defaults();
  }

  switch (action.type) {

    case appConsts.ACTION.VEH_BRANDS_UPDATE:
      return brands.update(state, action);

    default:
      return state;
  }
};
