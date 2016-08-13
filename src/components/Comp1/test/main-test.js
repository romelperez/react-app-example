import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React, { PropTypes } from 'react';
import { shallow, mount, render } from 'enzyme';

chai.use(chaiEnzyme());

const Component1 = ({ msg }) => (
  <div className='component1'>
    <h1>Title</h1>
    <p>{msg}</p>
  </div>
);

describe('Component1', function () {

  it('Feature1', function () {
    expect(7).to.be.equal(7);
  });

  it('Feature2', function () {
    expect(shallow(<Component1 />)).to.contain(<h1>Title</h1>);
  });

  it('Feature3', function () {
    expect(mount(<Component1 />)).to.have.className('component1');
  });
});
