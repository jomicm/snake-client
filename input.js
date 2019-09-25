const { MOVES } = require('./constants');
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
};

const handleUserInput  = (input) => {
  input.on('data', key => {
    if (key === '\u0003') process.exit();
    if (MOVES[key]) {
      connection.write(MOVES[key]);
    }
  });
};

module.exports = setupInput;