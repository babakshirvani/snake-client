const { up, down, left, right, stdin } = require('./constants');

let connection;



const setupInput = (conn) => {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};

const handleUserInput = function(input) {
  if (input === '\u0003') {
    console.log("you've pressed ctrl+c to exit the game :(");
    process.exit();
  }
  if (input === 'w') {
    console.log("W", up);
    connection.write(up);
  }
  if (input === 'a') {
    console.log("A", left);
    connection.write(left);
  }

  if (input === 's') {
    console.log("S", down);
    connection.write(down);
  }

  if (input === 'd') {
    console.log("D", right);
    connection.write(right);
  }

  if (input === 'h') {
    console.log("h");
    connection.write("Say: Hello");
  }
  if (input === 'j') {
    console.log("hj");
    connection.write("Say: lighthouse");
  }
  if (input === 'k') {
    console.log("k");
    connection.write("Say: lab");
  }

};

module.exports = {
  setupInput
}