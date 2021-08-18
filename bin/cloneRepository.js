"use strict";

const { exec } = require("child_process");

const { retrieveOptions } = require("./configuration"),
      { DEFAULT_GITHUB_HOST_NAME } = require("./defaults");

function cloneRepository(repository, callback) {
  const options = retrieveOptions(),
        { ssh } = options;

  if (ssh) {
    const { gitHubHostName } = ssh;

    repository = repository.replace(`https://${DEFAULT_GITHUB_HOST_NAME}/`, `git@${gitHubHostName}:`)
  }

  const command = `git clone ${repository}.git`;

  exec(command, (error) => {
    const success = !error;

    if (error) {
      console.log(`An error occurred: ${error}`);
    }

    callback(success);
  })
}

module.exports = cloneRepository;
