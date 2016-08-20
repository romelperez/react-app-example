import chai, { expect, assert } from 'chai';
import enzyme, { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import React, { PropTypes } from 'react';
import i18n from 'i18n';
import Content from './Content';

const shallowContent = function (props={}, children) {
  props.t = i18n.t.bind(i18n);
  return shallow(
    <Content {...props}>{children}</Content>
  );
};

describe('Component', function () {
  describe('Main', function () {
    describe('Content', function () {

      it('Has proper class name', function () {
        const actual = shallowContent().hasClass('main-content');
        const expected = true;
        expect(actual).to.equal(expected);
      });
    });
  });
});
