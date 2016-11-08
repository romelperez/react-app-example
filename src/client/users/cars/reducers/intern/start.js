export default function (state, action) {
  return state.
    update('starting', () => true).
    update('started', () => false);
};
