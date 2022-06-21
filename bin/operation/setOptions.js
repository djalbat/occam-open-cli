"use strict";

const { setOptions } = require("../configuration");

function setOptionsOperation(proceed, abort, context) {
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

  setOptions(options);

  proceed();
}

module.exports = setOptionsOperation;
