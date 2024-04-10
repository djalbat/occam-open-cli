"use strict";

const { pathUtilities } = require("necessary");

const { DOUBLE_DOTS } = require("./constants"),
      { PUBLISH_COMMAND } = require("./commands"),
      { checkConfigurationFileExists, migrateConfigurationFile } = require("./configuration");

const { bottommostNameFromPath } = pathUtilities;

function configure(command, argument, options, callback) {
  let configurationFileExists = checkConfigurationFileExists();

  if (command === PUBLISH_COMMAND) {  ///
    if (argument === null) {
      const currentWorkingDirectoryPath = process.cwd(); ///

      process.chdir(DOUBLE_DOTS);

      const oldCurrentWorkingDirectoryPath = currentWorkingDirectoryPath; ///

      configurationFileExists = checkConfigurationFileExists();

      if (configurationFileExists) {
        const bottommostOldCurrentWorkingDirectoryName = bottommostNameFromPath(oldCurrentWorkingDirectoryPath);

        argument = bottommostOldCurrentWorkingDirectoryName; ///
      }
    }
  }

  if (configurationFileExists) {
    migrateConfigurationFile();
  }

  callback(command, argument, options);
}

module.exports = configure;
