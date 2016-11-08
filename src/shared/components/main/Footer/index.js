import i18n from 'shared/i18n';
import React, { PropTypes } from 'react';
import mergeClasses from 'shared/tools/mergeClasses';

/**
 * Main footer. Don't receive children.
 */
const Footer = function (props) {

  const { className, noTermsAndConditions, ...other } = props;
  const year = (new Date()).getFullYear();
  const title = i18n.t('project.title');
  const termsAndConditions = i18n.t('terms-and-conditions.title');
  const cls = mergeClasses('main-footer', className);
  const text = `&copy; ${year} ${title}`;
  const textEl = <span className='main-footer__text'
                       dangerouslySetInnerHTML={{__html: text}} />;

  return (
    <footer {...other} className={cls}>
      {noTermsAndConditions ? (
        <div className='row'>
          <div className='column small-12'>
            {textEl}
          </div>
        </div>
      ) : (
        <div className='row'>
          <div className='column small-12 medium-6'>
            {textEl}
          </div>
          <div className='column small-12 medium-6'>
            <a className='main-footer__tac' href='/terms-and-conditions'>
              {termsAndConditions}
            </a>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
