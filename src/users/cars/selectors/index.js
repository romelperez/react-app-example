import appConsts  from '../app-consts';
import brands     from './brands';
import brand      from './brand';
import cars       from './cars';
import car        from './car';
import user       from './user';
import started    from './started';

export default function (selector, info) {

  switch (selector) {
    case appConsts.SELECTOR.BRANDS:
      return brands(info);

    case appConsts.SELECTOR.BRAND:
      return brand(info);

    case appConsts.SELECTOR.CARS:
      return cars(info);

    case appConsts.SELECTOR.CAR:
      return car(info);

    case appConsts.SELECTOR.USER:
      return user(info);

    case appConsts.SELECTOR.STARTED:
      return started(info);

    default:
      throw new Error('Selector not found.');
  }
};
