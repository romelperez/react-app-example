import appConsts  from '../app-consts';
import store      from '../store';

export default function (info) {
  store.dispatch({
    type: appConsts.ACTION.STARTED,
  });
};
