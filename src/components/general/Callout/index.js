import React, { PropTypes } from 'react';
import mergeClasses from 'tools/mergeClasses';

/**
 * A callout message container.
 */
const Callout = function (props) {

  // TODO:

  const { type, className, children, ...other } = props;
  const cls = mergeClasses('general-callout callout', type, className);

  return (
    <div className={cls} data-closable>
      {children}
      <button className='close-button' ariaLabel='Dismiss alert' type='button' data-close>
        <span ariaHidden='true' dangerouslySetInnerHTML={{__html: '&times;'}} />
      </button>
    </div>
  );
};

Callout.defaultProps = {
  type: 'alert'
};

export default Callout;
