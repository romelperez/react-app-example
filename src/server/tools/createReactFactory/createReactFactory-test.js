import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import createReactFactory from './index';

chai.use(chaiEnzyme());

describe('Tools', function () {
  describe('createReactFactory', function () {

    it('Create a basic factory', function () {
      const MyComponent = function (props) {
        return (
          <div>{props.text}</div>
        );
      };
      const factory = createReactFactory(MyComponent);
      const actual = factory({ text: 'My Great Component' });
      const expected = '<div>My Great Component</div>';
      expect(actual).to.equal(expected);
    });

  });
});
