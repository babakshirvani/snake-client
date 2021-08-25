// const { connect } = require("./client");
let connection;
const up = "Move: up";
const down = "Move: down";
const right = "Move: right";
const left = "Move: left";


const setupInput = (conn) => {
  const stdin = process.stdin;
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

};

module.exports = {
  setupInput
}