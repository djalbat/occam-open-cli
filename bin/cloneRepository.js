'use strict';

const childProcess = require('child_process');

const { exec } = childProcess;

function cloneRepository(repository, callback) {
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
