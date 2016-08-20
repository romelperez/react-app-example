import chai, { expect, assert } from 'chai';
import enzyme, { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import React, { PropTypes } from 'react';
import i18n from 'i18n';
import Options from './Options';

const shallowOptions = function (props={}, children) {
  props.t = i18n.t.bind(i18n);
  return shallow(
    <Options {...props}>{children}</Options>
  );
};

describe('Component', function () {
  describe('Main', function () {
    describe('Options', function () {

      it('Has proper class name', function () {
        const actual = shallowOptions().hasClass('main-options');
        const expected = true;
        expect(actual).to.equal(expected);
      });

      it('Process a list of items', function () {
        const list = [
          { href: '/xyz', target: '_blank', children: 'Abcd' },
          { href: '/abc', children: 'Efgh' },
          { href: '/mno', target: '_blank', children: 'Abcd Efgh' }
        ];
        const el = shallowOptions({ list });
        const expected = (
          <span>
            <a href='/xyz' target='_blank'>Abcd</a>
            <a href='/abc'>Efgh</a>
            <a href='/mno' target='_blank'>Abcd Efgh</a>
          </span>
        );
        expect(el).to.contain(expected);
      });
    });
  });
});
