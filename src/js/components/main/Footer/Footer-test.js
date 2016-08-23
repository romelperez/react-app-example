import chai, { expect, assert } from 'chai';
import enzyme, { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import React, { PropTypes } from 'react';
import i18n from 'i18n';
import Footer from './Footer';

const shallowFooter = function (props={}, children) {
  props.t = i18n.t.bind(i18n);
  return shallow(
    <Footer {...props}>{children}</Footer>
  );
};

describe('Component', function () {
  describe('Main', function () {
    describe('Footer', function () {

      it('Has proper class name', function () {
        const actual = shallowFooter().hasClass('main-footer');
        const expected = true;
        expect(actual).to.equal(expected);
      });

      it('Has the proper text', function () {
        const year = (new Date()).getFullYear();
        const title = i18n.t('project.title');
        const actual = shallowFooter().find('.main-footer__text').html();
        const expected = `${year} ${title}`;
        expect(actual).to.contain(expected);
      });

      it('Has terms and conditions proper link', function () {
        const actual = shallowFooter().find('.main-footer__tac').prop('href');
        const expected = '/terms-and-conditions';
        expect(actual).to.be.equal(expected);
      });

      it('Has terms and conditions link with the proper text', function () {
        const el = shallowFooter().find('.main-footer__tac');
        const expected = i18n.t('terms-and-conditions.title');
        expect(el).to.contain(expected);
      });

      it('Disable the terms and conditions text', function () {
        const el = shallowFooter({ noTermsAndConditions: true }).find('.main-footer__tac');
        const expected = i18n.t('terms-and-conditions.title');
        expect(el).to.not.contain(expected);
      });
    });
  });
});
