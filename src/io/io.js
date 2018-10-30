/**
 * @param {*} arg
 * @returns {string}
 */
function validate(arg) {
  if (arg === undefined || arg === '') {
    print('Hey there, you forgot to type a letter');
    return null;
  }
  if (arg.trim().length > 1) {
    print('Please pass in only one letter');
    return null;
  }
  return String(arg);
}

/**
 * @param {string} arg
 * @returns {string}
 */
function normalize(arg) {
  return arg.toUpperCase();
}

/**
 * @param {string} result
 */
function print(result) {
  console.log(result);
}

module.exports = {
  validate,
  print,
  normalize,
};
