import chai, { expect, assert } from 'chai';
import enzyme, { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import React from 'react';
import i18n from 'i18n';
import Container from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Container', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Container />).hasClass('main-container');
        const expected = true;
        expect(actual).to.equal(expected);
      });
    });
  });
});
