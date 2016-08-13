import abc from './abc';

describe('endpoint1', function () {

  it('params1', function () {
    expect(abc(5)).to.be.equal(50);
  });

  it('params2', function () {
    expect(false).to.be.false;
  });
});
