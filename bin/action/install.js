"use strict";

const { INSTALL_MESSAGE } = require("../messages");

function install(argument) {
  const message = INSTALL_MESSAGE;

  console.log(message);

  process.exit(0);
}

module.exports = install;
