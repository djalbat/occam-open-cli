"use strict";

const { pathUtilities } = require("necessary");

const { DOUBLE_DOTS } = require("./constants"),
      { DEFAULT_HELP, DEFAULT_VERSION } = require("./defaults"),
      { HELP_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND } = require("./commands"),
      { migrateConfigurationFile, checkConfigurationFileExists, assertConfigurationFileExists } = require("./configuration");

const { bottommostNameFromPath } = pathUtilities;

function configure(command, argument, options, main) {
  let configurationFileExists;

  const { help = DEFAULT_HELP, version = DEFAULT_VERSION } = options;

  if ((help === true) || (version === true) || (command === HELP_COMMAND) || (command === VERSION_COMMAND)) {
    main(command, argument, options);

    return;
  }

  configurationFileExists = checkConfigurationFileExists();

  if (command === null) {
    if (!configurationFileExists) {
      const currentWorkingDirectoryPath = process.cwd(); ///

      process.chdir(DOUBLE_DOTS);

      const oldCurrentWorkingDirectoryPath = currentWorkingDirectoryPath; ///

      configurationFileExists = checkConfigurationFileExists();

      if (configurationFileExists) {
        const bottommostOldCurrentWorkingDirectoryName = bottommostNameFromPath(oldCurrentWorkingDirectoryPath);

        command = PUBLISH_COMMAND;  ///

        argument = bottommostOldCurrentWorkingDirectoryName; ///
      }
    }
  }

  assertConfigurationFileExists();

  migrateConfigurationFile();

  main(command, argument, options);
}

module.exports = configure;
