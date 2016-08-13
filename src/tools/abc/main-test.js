import abc from './abc';

describe('abc', function () {

  it('feature1', function () {
    const actual = abc();
    const expected = 20;
    expect(actual).to.be.equal(expected);
  });

  it('feature2', function () {
    const actual = abc(5);
    const expected = 50;
    expect(actual).to.be.equal(expected);
  });
});
