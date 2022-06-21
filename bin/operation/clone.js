"use strict";

const { exec } = require("child_process");

const { retrieveOptions } = require("../configuration"),
      { DEFAULT_GITHUB_HOST_NAME } = require("../defaults");

function cloneOperation(proceed, abort, context) {
  let { repository } = context;

  const options = retrieveOptions(),
        { ssh } = options;

  if (ssh) {
    const { gitHubHostName } = ssh;

    repository = repository.replace(`https://${DEFAULT_GITHUB_HOST_NAME}/`, `git@${gitHubHostName}:`)
  }

  const command = `git clone ${repository}.git`;

  exec(command, (error) => {
    if (error) {
      console.log(`An error occurred: ${error}`);

      abort();

      return;
    }

    proceed();
  })
}

module.exports = cloneOperation;
