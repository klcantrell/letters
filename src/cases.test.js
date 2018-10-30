const buildDiamond = require('./app');

describe('test cases for the buildDiamond function', () => {
  test('A', () => {
    console.log(buildDiamond('A'));
    expect(buildDiamond('A').trim()).toBe('A'.trim());
  });
  test('B', () => {
    console.log(buildDiamond('B'));
    expect(buildDiamond('B').trim()).toBe(' A \nB B\n A '.trim());
  });
  test('C', () => {
    console.log(buildDiamond('C'));
    expect(buildDiamond('C').trim()).toBe(
      '  A  \n B B \nC   C\n B B \n  A  '.trim()
    );
  });
});
