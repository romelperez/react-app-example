import appConsts  from '../../app-consts';
import defaults   from './defaults';
import buy        from './buy';
import update     from './update';

export default function (state, action) {

  if (!state) {
    return defaults();
  }

  switch (action.type) {

    case appConsts.ACTION.USR_BUY:
      return buy(state, action);

    case appConsts.ACTION.USR_UPDATE:
      return update(state, action);

    default:
      return state;
  }
};
