import appConsts  from './app-consts';
import render     from './render';
import store      from './store';
import actions    from './actions';

store.subscribe(render);

render();

// DEBUG:
setTimeout(function () {
  actions.start();
}, 1500);
