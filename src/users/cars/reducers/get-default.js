import { fromJS } from 'immutable';

export default function () {
  return fromJS({
    intern: {
      starting: false,
      started: false,
    },
    brands: [],
    cars: [],
    user: {},
    purchases: [],
  });
};
