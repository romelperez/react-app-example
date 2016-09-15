import React, { PropTypes } from 'react';
import mergeClasses from 'tools/mergeClasses';

/**
 * Main container.
 */
const Container = function (props) {

  const { className, children, ...other } = props;
  const cls = mergeClasses('main-container', className);

  return (
    <main {...other} className={cls}>
      {children}
    </main>
  );
};

export default Container;
