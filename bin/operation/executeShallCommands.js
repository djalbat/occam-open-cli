"use strict";

const { EMPTY_STRING } = require("../constants");
const { retrieveShellCommands } = require("../configuration");

function executeShellCommandsOperation(proceed, abort, context) {
  const { success } = context;

  if (success) {
    const shellCommands = retrieveShellCommands();

    if (shellCommands !== EMPTY_STRING) {
      debugger
    }
  }

  proceed();
}

module.exports = executeShellCommandsOperation;
