/**
 * @returns {string} - argument from user
 */
function readline() {
  const arg = process.argv[2];
  if (arg === undefined) {
    print('Please pass in a single letter');
    return null;
  }
  if (arg.trim().length > 1) {
    print('Please pass in only one letter');
    return null;
  }
  return process.argv[2].toUpperCase();
}

/**
 * @param {string} result
 */
function print(result) {
  console.log(result);
}

module.exports = {
  readline,
  print,
};
