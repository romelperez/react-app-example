import appConsts  from '../../app-consts';
import defaults   from './defaults';
import start      from './start';
import started    from './started';

export default function (state, action) {

  if (!state) {
    return defaults();
  }

  switch (action.type) {

    case appConsts.ACTION.INT_START:
      return start(state, action);

    case appConsts.ACTION.INT_STARTED:
      return started(state, action);

    default:
      return state;
  }
};
