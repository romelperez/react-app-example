import React from 'react';
import abc from 'tools/abc';

describe('Component2', function () {

  it('Feature1', function () {
    expect(true).to.be.true;
  });

  it('Feature2', function () {
    expect(abc()).to.be.equal(10);
  });
});
