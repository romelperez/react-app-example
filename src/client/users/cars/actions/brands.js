import data       from 'shared/data';
import appConsts  from '../app-consts';
import store      from '../store';

const fetch = function () {
  data.
    brands().
    then(function (response) {
      const brands = response.data;
      store.dispatch({
        type: appConsts.ACTION.BRANDS_UPDATE,
        payload: brands,
      });
    });
};

export default {
  fetch
};
