import appConsts  from '../app-consts';
import store      from '../store';

export default function () {
  store.dispatch({
    type: appConsts.ACTION.BUY,
  });
};
