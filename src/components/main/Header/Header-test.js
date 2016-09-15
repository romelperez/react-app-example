import chai, { expect, assert } from 'chai';
import enzyme, { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import React, { PropTypes } from 'react';
import i18n from 'i18n';
import Header from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Header', function () {

      it('Has proper class name', function () {
        const el = shallow(<Header />);
        const expected = 'main-header';
        expect(el).to.have.className(expected);
      });

      it('Has project title', function () {
        const el = shallow(<Header />).find('.main-header__title');
        const expected = i18n.t('project.title');
        expect(el).to.contain(expected);
      });
    });
  });
});
