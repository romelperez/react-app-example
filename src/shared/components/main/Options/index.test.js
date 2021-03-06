import enzyme, { shallow, mount, render } from 'enzyme';
import React, { PropTypes } from 'react';
import consts from 'shared/consts';
import i18n from 'shared/i18n';
import Options from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Options', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Options />).hasClass('main-options');
        const expected = true;
        expect(actual).to.equal(expected);
      });

      it('Process a list of items', function () {
        const list = [
          { href: '/xyz', target: '_blank', children: 'Abcd' },
          { href: '/abc', children: 'Efgh' },
          { href: '/mno', target: '_blank', children: 'Abcd Efgh' }
        ];
        const el = shallow(<Options list={list} />);
        const expected = (
          <span>
            <a href='/xyz' target='_blank'>Abcd</a>
            <a href='/abc'>Efgh</a>
            <a href='/mno' target='_blank'>Abcd Efgh</a>
          </span>
        );
        expect(el).to.contain(expected);
      });

      it('Process a list of preset items', function () {
        const list = ['register', 'login'];
        const el = shallow(<Options list={list} />);
        const expected = (
          <span>
            <a href={consts.ROUTE.REGISTER}>{i18n.t('register.title')}</a>
            <a href={consts.ROUTE.LOGIN}>{i18n.t('login.title')}</a>
          </span>
        );
        expect(el).to.contain(expected);
      });
    });
  });
});
