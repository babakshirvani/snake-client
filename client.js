
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: BYE")
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