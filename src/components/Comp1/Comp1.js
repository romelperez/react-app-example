import React, { PropTypes } from 'react';
import abc from 'tools/abc';

/**
 * This is an awesome component to display titles.
 */
const Comp1 = function ({ children, color }) {
  const styles = { color, fontSize: abc(2.5)+'px' };
  return (
    <h1 className='comp1' style={styles}>
      <span>{children}</span>
    </h1>
  );
};

Comp1.propTypes = {

  /**
   * The children.
   */
  children: PropTypes.string.isRequired,

  /**
   * This is a color for the text.
   */
  color: PropTypes.string
};

Comp1.defaultProps = {
  color: 'red'
};

export default Comp1;
