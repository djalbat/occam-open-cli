"use strict";

const { VERSION_5_1 } = require("../versions"),
      { DEFAULT_HOST, DEFAULT_SHELL_COMMANDS } = require("../defaults");

function createConfiguration() {
  const version = VERSION_5_1,
        host = DEFAULT_HOST,
        options = {},
        shellCommands = DEFAULT_SHELL_COMMANDS,
        identityToken = null,
        configuration = {
          version,
          host,
          options,
          shellCommands,
          identityToken
        };

  return configuration;
}

function migrateConfigurationToVersion_5_1(configuration) {
  const version = VERSION_5_1,
        shellCommands = DEFAULT_SHELL_COMMANDS;

  Object.assign(configuration, {
    version,
    shellCommands
  });

  return configuration;
}

module.exports = {
  createConfiguration,
  migrateConfigurationToVersion_5_1
};
