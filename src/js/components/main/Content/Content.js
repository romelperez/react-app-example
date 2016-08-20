import React, { PropTypes } from 'react';
import mergeClasses from 'tools/mergeClasses';

/**
 * Main content.
 */
const Content = function (props) {

  const { t, className, children } = props;
  const cls = mergeClasses('main-content', className);

  return (
    <section {...props} className={cls}>
      {children}
    </section>
  );
};

export default Content;
