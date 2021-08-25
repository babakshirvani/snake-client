// const connect = require("./client");
// const input = require("./input");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
setupInput(connect());
// connect();