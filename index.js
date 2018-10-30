function readline() {
  return process.env.argv[2];
}

function test(arg) {
  console.log(arg);
  return arg;
}

function print(result) {
  console.log(result);
}

module.exports = {
  test,
};
