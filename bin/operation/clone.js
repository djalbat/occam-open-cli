"use strict";

const { exec } = require("child_process");

const { getOptions } = require("../configuration"),
      { DEFAULT_GITHUB_HOST_NAME } = require("../defaults");

function cloneOperation(proceed, abort, context) {
  let { repository } = context;

  const options = getOptions(),
        { ssh } = options;

  if (ssh) {
    const { gitHubHostName } = ssh;

    repository = repository.replace(`https://${DEFAULT_GITHUB_HOST_NAME}/`, `git@${gitHubHostName}:`)
  }

  const command = `git clone ${repository}.git`;

  exec(command, (error) => {
    if (error) {
      abort();

      return;
    }

    proceed();
  })
}

module.exports = cloneOperation;
