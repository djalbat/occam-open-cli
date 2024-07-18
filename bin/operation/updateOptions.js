"use strict";

const { updateOptions } = require("../configuration");

function updateOptionsOperation(proceed, abort, context) {
  const { useSSH } = context,
        options = {};

  if (useSSH) {
    const { gitHubHostName } = context,
          ssh = {
            gitHubHostName
          };

    Object.assign(options, {
      ssh
    });
  }

  updateOptions(options);

  proceed();
}

module.exports = updateOptionsOperation;
