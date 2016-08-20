import React, { PropTypes } from 'react';
import mergeClasses from 'tools/mergeClasses';

/**
 * Main footer. Don't receive children.
 */
const Footer = function (props) {

  const { t, className, noTermsAndConditions } = props;
  const year = (new Date()).getFullYear();
  const title = t('app.title');
  const termsAndConditions = t('app.terms-and-conditions');
  const cls = mergeClasses('main-footer', className);
  const text = `&copy; ${year} ${title}`;

  return (
    <footer {...props} className={cls}>
      {noTermsAndConditions ? (
        <div className='row'>
          <div className='column small-12'>
            <span className='main-footer__text' dangerouslySetInnerHTML={{__html: text}} />
          </div>
        </div>
      ) : (
        <div className='row'>
          <div className='column small-12 medium-6'>
            <span className='main-footer__text' dangerouslySetInnerHTML={{__html: text}} />
          </div>
          <div className='column small-12 medium-6'>
            <a className='main-footer__tac' href='/terms-and-conditions'>{termsAndConditions}</a>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
