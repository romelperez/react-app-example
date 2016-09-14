import chai, { expect, assert } from 'chai';
import enzyme, { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import React from 'react';
import i18n from 'i18n';
import Card from './index';

describe('Component', function () {
  describe('General', function () {
    describe('Card', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Card />).hasClass('general-card');
        const expected = true;
        expect(actual).to.equal(expected);
      });
    });
  });
});
