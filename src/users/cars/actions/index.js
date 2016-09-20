import appConsts  from '../app-consts';
import start      from './start';
import started    from './started';
import buy        from './buy';

export default function (action, info) {

  switch (action) {

    case appConsts.ACTION.START:
      return start(info);

    case appConsts.ACTION.STARTED:
      return started(info);

    case appConsts.ACTION.BUY:
      return buy(info);

    default:
      throw new Error('Action not found.');
  }
};
