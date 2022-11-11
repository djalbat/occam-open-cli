"use strict";

const { pathUtilities } = require("necessary");

const actions = require("./actions");

const { DOUBLE_DOTS } = require("./constants"),
      { PUBLISH_COMMAND } = require("./commands"),
      { DEFAULT_HELP, DEFAULT_VERSION } = require("./defaults"),
      { checkConfigurationFileExists, migrateConfigurationFile } = require("./configuration");

const { bottommostNameFromPath } = pathUtilities;

function main(command, argument, options) {
  const commandExists = (command !== null),
        { help = DEFAULT_HELP, version = DEFAULT_VERSION } = options;

  let configurationFileExists = checkConfigurationFileExists();

  if (!help && !version && !commandExists && !configurationFileExists) {  ///
    const currentWorkingDirectoryPath = process.cwd(); ///

    process.chdir(DOUBLE_DOTS);

    const oldCurrentWorkingDirectoryPath = currentWorkingDirectoryPath; ///

    configurationFileExists = checkConfigurationFileExists();

    if (configurationFileExists) {
      const bottommostOldCurrentWorkingDirectoryName = bottommostNameFromPath(oldCurrentWorkingDirectoryPath);

      argument = bottommostOldCurrentWorkingDirectoryName; ///

      command = PUBLISH_COMMAND;
    }
  }

  if (configurationFileExists) {
    migrateConfigurationFile();
  }

  actions(command, argument, options);
}

module.exports = main;
