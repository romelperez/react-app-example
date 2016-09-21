import data       from 'data';
import appConsts  from '../app-consts';
import store      from '../store';

export default function () {

  store.dispatch({
    type: appConsts.ACTION.START,
  });

  data.
    user().
    then(function (response) {
      const user = response.data;
      store.dispatch({
        type: appConsts.ACTION.STARTED,
        payload: { user },
      });
    });
};
