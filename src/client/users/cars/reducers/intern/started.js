export default function (state, action) {
  return state.
    update('starting', () => false).
    update('started', () => true);
};
