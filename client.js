const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = () => {
  const conn = net.createConnection({
    host: '172.46.3.245',
    //host: '172.46.2.204',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to server!!!');
    conn.write('Name: MCM');
    //setInterval(() => conn.write("Move: down"), 500);
  });
  return conn;
};

//console.log('Connecting ...');
//connect();

module.exports = connect;