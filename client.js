
const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: BKS")
  });
  // setTimeout(() => {
  //   setInterval(() => { conn.write('Move: up') }, 400)
  //   setInterval(() => { conn.write('Move: left') }, 750)
  // }, 250);
  return conn;
};


module.exports = {
  connect
}