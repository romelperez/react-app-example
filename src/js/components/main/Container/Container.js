import React, { PropTypes } from 'react';
import mergeClasses from 'tools/mergeClasses';

/**
 * Main container.
 */
const Container = function (props) {

  const { t, className, children } = props;
  const cls = mergeClasses('main-container', className);

  return (
    <main {...props} className={cls}>
      {children}
    </main>
  );
};

export default Container;
