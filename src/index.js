// I/O

function readline() {
  return process.env.argv[2].toUpperCase();
}

/**
 * @param {string} result
 */
function print(result) {
  console.log(result);
}

// app

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * @param {string} letter
 * @returns {number}
 */
function calculateRowWidth(letter) {
  return LETTERS.indexOf(letter) * 2 + 1;
}

function buildRow(letter) {
  if (letter === 'A') {
    return letter;
  }
  const rowWidth = calculateRowWidth(letter);
  return letter.padEnd(rowWidth - 1, ' ') + letter;
}

function centerRow(row, widestLength) {
  if (widestLength === row.length) {
    return row;
  }
  const frontPadding = (widestLength - row.length) / 2 + row.length;
  return row.padStart(frontPadding, ' ').padEnd(widestLength, ' ');
}

function appendNewline(line) {
  return line + '\n';
}

function buildDiamond(letter) {
  const widestRowWidth = calculateRowWidth(letter);
  const pivot = LETTERS.indexOf(letter);
  const firstHalf = Array(pivot + 1)
    .fill()
    .map((row, idx) => {
      const currentLetter = LETTERS[idx];
      return appendNewline(centerRow(buildRow(currentLetter), widestRowWidth));
    })
    .join('');
  const secondHalf = Array(pivot)
    .fill()
    .map((row, idx) => {
      const currentLetter = LETTERS[idx];
      if (idx === 0) {
        return appendNewline(
          centerRow(buildRow(currentLetter), widestRowWidth)
        );
      }
      return appendNewline(centerRow(buildRow(currentLetter), widestRowWidth));
    })
    .reverse()
    .join('');
  console.log(firstHalf + secondHalf);
}

buildDiamond('Z');

module.exports = {
  calculateRowWidth,
  buildRow,
  appendNewline,
  centerRow,
};
