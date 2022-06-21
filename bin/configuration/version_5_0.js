"use strict";

const { VERSION_5_0 } = require("../versions"),
      { DEFAULT_HOST_URL } = require("../defaults");

function createConfiguration() {
  const version = VERSION_5_0,
        options = {},
        hostURL = DEFAULT_HOST_URL,
        configuration = {
          version,
          options,
          hostURL
        };

  return configuration;
}

function migrateConfigurationToVersion_5_0(configuration) {
  const version = VERSION_5_0;

  Object.assign(configuration, {
    version
  });

  return configuration;
}

module.exports = {
  createConfiguration,
  migrateConfigurationToVersion_5_0
};
