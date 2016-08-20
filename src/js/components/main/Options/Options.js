import React, { PropTypes } from 'react';
import mergeClasses from 'tools/mergeClasses';

/**
 * Main options for header. Don't accept children.
 */
const Options = function (props) {

  const { t, className, list } = props;
  const cls = mergeClasses('main-options', className);

  const processedList = list.
    map((itemProps, key) => {
      const { children } = itemProps;
      delete itemProps.children;
      return (
        <a key={key} {...itemProps}>{children}</a>
      );
    });

  return (
    <nav {...props} className={cls}>
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
