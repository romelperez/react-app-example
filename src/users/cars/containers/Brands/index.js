import React, { PropTypes } from 'react';

import consts     from 'consts';
import appConsts  from '../../app-consts';
import i18n       from 'i18n';
import Loading    from 'components/main/Loading';
import selectors  from '../../selectors';

const Brands = React.createClass({

  render () {

    const started = selectors(appConsts.SELECTOR.STARTED);

    return (
      <div className='row'>
        <div className='column small-12'>
          {started ? (
            <div>Brands</div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  },
});

export default Brands;
