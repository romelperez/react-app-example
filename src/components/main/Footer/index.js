import React, { PropTypes } from 'react';

/**
 * Main footer.
 */
const Footer = function () {
  return (
    <div className='row'>
      <div className='column small-12 medium-6'>&copy; 2016 Car Seller</div>
      <div className='column small-12 medium-6 text-right'>
        <a href='/terms-and-conditions'>Terms and Conditions</a>
      </div>
    </div>
  );
};

export default Footer;
