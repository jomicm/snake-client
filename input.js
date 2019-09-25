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
    if (key === '\u0003') {
      process.exit();
    } else if (key === "\033[A" || key.toLowerCase() === 'w') { // up
      connection.write('Move: up');
    } else if (key === "\033[B" || key.toLowerCase() === 's') { // down
      connection.write('Move: down');
    } else if (key === "\033[D" || key.toLowerCase() === 'a') { // right
      connection.write('Move: left');
    } else if (key === "\033[C" || key.toLowerCase() === 'd') { // left
      connection.write('Move: right');
    }
  });
};

//handleUserInput(setupInput);
module.exports = setupInput;