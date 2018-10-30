const io = require('./io');
const buildDiamond = require('./app');

const arg = io.readline();

if (arg) {
  io.print(buildDiamond(arg));
}
