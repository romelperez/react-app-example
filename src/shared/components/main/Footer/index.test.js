import enzyme, { shallow, mount, render } from 'enzyme';
import React, { PropTypes } from 'react';
import i18n from 'shared/i18n';
import Footer from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Footer', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Footer />).hasClass('main-footer');
        const expected = true;
        expect(actual).to.equal(expected);
      });

      it('Has the proper text', function () {
        const year = (new Date()).getFullYear();
        const title = i18n.t('project.title');
        const actual = shallow(<Footer />).find('.main-footer__text').html();
        const expected = `${year} ${title}`;
        expect(actual).to.contain(expected);
      });

      it('Has terms and conditions proper link', function () {
        const actual = shallow(<Footer />).find('.main-footer__tac').prop('href');
        const expected = '/terms-and-conditions';
        expect(actual).to.be.equal(expected);
      });

      it('Has terms and conditions link with the proper text', function () {
        const el = shallow(<Footer />).find('.main-footer__tac');
        const expected = i18n.t('terms-and-conditions.title');
        expect(el).to.contain(expected);
      });

      it('Disable the terms and conditions text', function () {
        const el = shallow(<Footer noTermsAndConditions={true} />).find('.main-footer__tac');
        const expected = i18n.t('terms-and-conditions.title');
        expect(el).to.not.contain(expected);
      });
    });
  });
});
