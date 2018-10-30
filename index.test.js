const { test } = require('./index');

describe('test function', () => {
  it('should return what is passed in', () => {
    expect(test(2)).toBe(2);
  });
});
