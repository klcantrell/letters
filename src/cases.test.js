const buildDiamond = require('./app');

describe('test cases for the buildDiamond function', () => {
  test('A', () => {
    console.log(buildDiamond('A'));
    expect(buildDiamond('A')).toBe('A');
  });
  test('B', () => {
    console.log(buildDiamond('B'));
    expect(buildDiamond('B')).toBe(' A \nB B\n A ');
  });
  test('C', () => {
    console.log(buildDiamond('C'));
    expect(buildDiamond('C')).toBe('  A  \n B B \nC   C\n B B \n  A  ');
  });
  test('F', () => {
    console.log(buildDiamond('F'));
    expect(buildDiamond('F')).toBe(
      '     A     \n    B B    \n   C   C   \n  D     D  \n E       E \nF         F\n E       E \n  D     D  \n   C   C   \n    B B    \n     A     '
    );
  });
});
