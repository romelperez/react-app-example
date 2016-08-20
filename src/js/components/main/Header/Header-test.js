import chai, { expect, assert } from 'chai';
import enzyme, { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import React, { PropTypes } from 'react';
import i18n from 'i18n';
import Header from './Header';

const shallowHeader = function (props={}, children) {
  props.t = i18n.t.bind(i18n);
  return shallow(
    <Header {...props}>{children}</Header>
  );
};

describe('Component', function () {
  describe('Main', function () {
    describe('Header', function () {

      it('Has proper class name', function () {
        const el = shallowHeader();
        const expected = 'main-header';
        expect(el).to.have.className(expected);
      });

      it('Has project title', function () {
        const el = shallowHeader().find('.main-header__title');
        const expected = i18n.t('app.title');
        expect(el).to.contain(expected);
      });
    });
  });
});
