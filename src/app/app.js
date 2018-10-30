const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * @param {string} letter
 * @returns {number}
 */
function calculateRowWidth(letter) {
  return LETTERS.indexOf(letter) * 2 + 1;
}

/**
 * @param {string} letter
 * @returns {string}
 */
function buildRow(letter) {
  if (letter === 'A') {
    return letter;
  }
  const rowWidth = calculateRowWidth(letter);
  return letter.padEnd(rowWidth - 1, ' ') + letter;
}

/**
 * @param {string} row
 * @param {number} widestLength
 * @returns {string}
 */
function centerRow(row, widestLength) {
  if (widestLength === row.length) {
    return row;
  }
  const frontPadding = (widestLength - row.length) / 2 + row.length;
  return row.padStart(frontPadding, ' ').padEnd(widestLength, ' ');
}

/**
 * @param {string} line
 * @returns {string}
 */
function appendNewline(line) {
  return line + '\n';
}

/**
 * @param {string} letter
 * @param {number} widestLength
 * @returns {string}
 */
function buildCenteredRow(letter, widestLength) {
  return centerRow(buildRow(letter), widestLength);
}

/**
 * @param {string} letter
 * @param {number} widestLength
 * @returns {string}
 */
function buildCenteredRowWithNewline(letter, widestLength) {
  return appendNewline(buildCenteredRow(letter, widestLength));
}

/**
 * @param {string} letter
 * @returns {string}
 */
function buildDiamond(letter) {
  if (LETTERS.indexOf(letter) === -1) {
    return `Oops, you passed an invalid character.`;
  }
  const widestRowWidth = calculateRowWidth(letter);
  const pivot = LETTERS.indexOf(letter);
  const firstHalf = Array(pivot + 1)
    .fill()
    .map((row, idx, arr) => {
      const currentLetter = LETTERS[idx];
      if (arr.length === 1) {
        return buildCenteredRow(currentLetter, widestRowWidth);
      }
      return buildCenteredRowWithNewline(currentLetter, widestRowWidth);
    })
    .join('');
  const secondHalf = Array(pivot)
    .fill()
    .map((row, idx) => {
      const currentLetter = LETTERS[idx];
      if (idx === 0) {
        return buildCenteredRow(currentLetter, widestRowWidth);
      }
      return buildCenteredRowWithNewline(currentLetter, widestRowWidth);
    })
    .reverse()
    .join('');
  return firstHalf + secondHalf;
}

module.exports = {
  calculateRowWidth,
  buildRow,
  appendNewline,
  centerRow,
  buildDiamond,
};
