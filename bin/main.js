"use strict";

const { pathUtilities } = require("necessary");

const actions = require("./actions");

const { DOUBLE_DOTS } = require("./constants"),
      { PUBLISH_COMMAND } = require("./commands"),
      { checkConfigurationFileExists, migrateConfigurationFile } = require("./configuration");

const { bottommostNameFromPath } = pathUtilities;

function main(command, argument, options) {
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

  actions(command, argument, options);
}

module.exports = main;
