const {
  calculateRowWidth,
  buildRow,
  appendNewline,
  centerRow,
} = require('./index');

describe('calculateWidestRow function', () => {
  it('should return the length of the widest row', () => {
    expect(calculateRowWidth('A')).toBe(1);
    expect(calculateRowWidth('B')).toBe(3);
  });
});

describe('buildRow function', () => {
  it('should return a string representing a row', () => {
    expect(buildRow('A')).toBe('A');
    expect(buildRow('B')).toBe('B B');
  });
});

describe('centerRow function', () => {
  it(`should pad the beginning and end of a row so that it's centered`, () => {
    expect(centerRow('A', 5)).toBe('  A  ');
  });
  it(`should pad the beginning and end of a row so that it's centered`, () => {
    expect(centerRow('B B', 5)).toBe(' B B ');
  });
});

describe('appendNewline function', () => {
  it('should append a newline character to the input string', () => {
    expect(appendNewline('A')).toBe('A\n');
  });
});
