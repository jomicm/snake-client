const connect = require('./client');
console.log('Connecting...');
const conn = connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //handleUserInput(stdin);
  //console.log(stdin);
  return stdin;
};

setupInput().on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "\033[A") { // up
    conn.write('Move: up');
  } else if (key === "\033[B") { // down
    conn.write('Move: down');
  } else if (key === "\033[D") { // right
    conn.write('Move: left');
  } else if (key === "\033[C") { // left
    conn.write('Move: right');
  }
});

const handleUserInput  = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};
setupInput();