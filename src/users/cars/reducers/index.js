import appConsts    from '../app-consts';
import getDefault   from './get-default';
import buy          from './buy';
import start        from './start';
import started      from './started';
import brands       from './brands';

export default function (state, action) {

  if (!state) {
    return getDefault();
  }

  switch (action.type) {

    case appConsts.ACTION.START:
      return start(state, action);

    case appConsts.ACTION.STARTED:
      return started(state, action);

    case appConsts.ACTION.BUY:
      return buy(state, action);

    case appConsts.ACTION.BRANDS_UPDATE:
      return brands.update(state, action);

    default:
      return state;
  }
};
