import React from 'react';
import abc from 'tools/abc';

const Component2 = function ({ msg }) {
  return (
    <div className='component2'>
      <h1>Title</h1>
      <p>{msg}</p>
    </div>
  );
};

describe('Component2', function () {

  it('Feature1', function () {
    expect(true).to.be.true;
  });

  it('Feature2', function () {
    expect(false).to.be.false;
  });

  it('Feature3', function () {
    expect(abc()).to.be.equal(20);
  });
});
