import i18n from 'i18n';
import React, { PropTypes } from 'react';
import mergeClasses from 'tools/mergeClasses';

/**
 * Main header.
 */
const Header = function (props) {

  const { className, children, ...other } = props;
  const title = i18n.t('project.title');
  const cls = mergeClasses('main-header', className);

  return (
    <header {...other} className={cls}>
      <div className='row'>
        <div className='column small-12 medium-6'>
          <h1>
            <a href='/' className='main-header__title'>{title}</a>
          </h1>
        </div>
        <div className='column small-12 medium-6'>
          {children}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {

  /**
   * Header can optionally have an element content.
   */
  children: PropTypes.element
};

export default Header;
