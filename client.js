const net = require('net');
const { IP, IP_LOCAL, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = () => {
  const conn = net.createConnection({
    //host: '172.46.3.245',
    host: IP_LOCAL,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to server!!!');
    conn.write('Name: MCM');
  });
  return conn;
};

module.exports = connect;