"use strict";

const { updateShellCommands } = require("../configuration");

function updateShellCommandsOperation(proceed, abort, context) {
  const { shellCommands } = context;

  updateShellCommands(shellCommands);

  proceed();
}

module.exports = updateShellCommandsOperation;
