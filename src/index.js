const io = require('./io');
const buildDiamond = require('./app');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const welcomeMessage = 'Type a letter then press Enter';

rl.on('line', line => {
  const character = io.validate(line);
  if (character) {
    const normalizedCharacter = io.normalize(character);
    io.print(buildDiamond(normalizedCharacter));
  }
  io.print(welcomeMessage);
});

io.print(welcomeMessage);
