"use strict";

const { OPEN_MESSAGE } = require("../messages");

function open(argument) {
  const message = OPEN_MESSAGE;

  console.log(message);

  process.exit();
}

module.exports = open;
