import React, { PropTypes } from 'react';

import consts     from 'consts';
import i18n       from 'i18n';
import Loading    from 'components/main/Loading';
import selectors  from '../../selectors';
import actions    from '../../actions';

const Brands = React.createClass({

  render () {

    const brands = selectors.brands();
    const loaded = !!brands.length;

    if (!loaded) {
      actions.brands.fetch();
    }

    return (
      <div className='row'>
        <div className='column small-12'>
          {loaded ? (
            <div>TODO: Brands</div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  },
});

export default Brands;
