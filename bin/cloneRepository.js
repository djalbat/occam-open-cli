'use strict';

const childProcess = require('child_process');

const constants = require('./constants'),
      configuration = require('./configuration');

const { exec } = childProcess,
      { retrieveOptions } = configuration,
      { DEFAULT_GITHUB_HOST_NAME } = constants;

function cloneRepository(repository, callback) {
  const options = retrieveOptions(),
        { ssh } = options;

  if (ssh) {
    const { gitHubHostName } = ssh;

    repository = repository.replace(`https://${DEFAULT_GITHUB_HOST_NAME}/`, `git@${gitHubHostName}:`)
  }

  const command = `git clone ${repository}.git`;

  exec(command, function(error) {
    const success = !error;

    if (error) {
      console.log(`An error occurred: ${error}`);
    }

    callback(success);
  })
}

module.exports = cloneRepository;
