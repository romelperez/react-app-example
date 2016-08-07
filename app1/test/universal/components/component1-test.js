import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

const Component1 = ({ msg }) => (
  <div className='component1'>
    <h1>Title</h1>
    <p>{msg}</p>
  </div>
);

describe('Component1', function () {

  it('Feature1', function () {
    expect(shallow(<Component1 />)).to.contain(<h1>Title</h1>);
  });

  it('Feature2', function () {
    expect(mount(<Component1 />)).to.have.className('component1');
  });
});
