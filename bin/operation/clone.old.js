"use strict";

const { exec } = require("child_process"),
      { fileSystemUtilities } = require("necessary");

const { checkEntryExists } = fileSystemUtilities;

const { getOptions } = require("../configuration"),
      { DEFAULT_GITHUB_HOST_NAME } = require("../defaults");

function cloneOperation(proceed, abort, context) {
  const { releaseName } = context,
        path = releaseName, ///
        entryExists = checkEntryExists(path);

  if (entryExists) {
    const { quietly } = context;

    if (!quietly) {
      console.log(`Cannot clone the '${releaseName}' package because an entry of that name already exists.`);
    }

    proceed();

    return;
  }

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
  });
}

module.exports = cloneOperation;
