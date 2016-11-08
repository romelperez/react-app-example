export default function (state, action) {
  const details = action.payload;
  return state.update('details', details);
};
