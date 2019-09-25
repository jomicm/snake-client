const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting...');
const conn = connect();
const si = setupInput(conn);

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
