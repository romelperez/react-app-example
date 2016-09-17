import React, { PropTypes } from 'react';

import consts       from 'consts';
import i18n         from 'i18n';
import mergeClasses from 'tools/mergeClasses';

const preset = {
  login: {
    href: consts.ROUTE.LOGIN,
    children: i18n.t('login.title'),
  },
  register: {
    href: consts.ROUTE.REGISTER,
    children: i18n.t('register.title'),
  },
};

/**
 * Main options for header. Don't accept children.
 */
const Options = function (props) {

  const { className, list, ...other } = props;
  const cls = mergeClasses('main-options', className);

  const processedList = list.
    map((itemProps, key) => {

      if (typeof itemProps === 'string') {
        if (!preset[itemProps]) {
          throw new Error(`Invalid list option "${itemProps}"`);
        }
        itemProps = Object.assign({}, preset[itemProps]);
      }

      const children = itemProps.children || 'Link';
      delete itemProps.children;

      return (
        <a key={key} {...itemProps}>{children}</a>
      );
    });

  return (
    <nav {...other} className={cls}>
      <div className='row align-middle'>
        <div className='column small-12'>
          <span>{processedList}</span>
        </div>
      </div>
    </nav>
  );
};

Options.propTypes = {
  className: PropTypes.string,

  /**
   * A collection of objects with all the `<a />` elements props. The content
   * of each element is in the property `children`.
   * @type {Array}
   */
  list: PropTypes.array
};

Options.defaultProps = {
  list: []
};

export default Options;
