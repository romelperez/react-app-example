import chai, { expect, assert } from 'chai';
import enzyme, { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import React, { PropTypes } from 'react';
import i18n from 'i18n';
import Content from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Content', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Content />).hasClass('main-content');
        const expected = true;
        expect(actual).to.equal(expected);
      });
    });
  });
});
