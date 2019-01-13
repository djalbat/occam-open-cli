'use strict';

const childProcess = require('child_process');

const configuration = require('./configuration');

const { exec } = childProcess,
      { retrieveOptions } = configuration;

function cloneRepository(repository, callback) {
  const options = retrieveOptions(),
        { useSSH, hostNameSuffix } = options;

  if (useSSH) {
    repository = repository.replace('https://github.com/', 'git@github.com:')
  }

  if (hostNameSuffix) {
    repository = repository.replace('github.com', `github.com${hostNameSuffix}`);
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
