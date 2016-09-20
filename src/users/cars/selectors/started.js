import store from '../store';

export default function (info) {

  const started = store.
    getState().
    get('intern').
    get('started');

  return started;
};
