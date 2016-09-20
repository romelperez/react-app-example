export default function (state, action) {
  return state.updateIn(['intern', 'starting'], () => true);
};
