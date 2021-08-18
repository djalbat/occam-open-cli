"use strict";

const { VERSION_2_0 } = require("../versions"),
      { DEFAULT_HOST_URL } = require("../defaults");

function createConfiguration() {
  const version = VERSION_2_0,  ///
        options = {},
        hostURL = DEFAULT_HOST_URL, ///
        configuration = {
          version,
          options,
          hostURL
        };

  return configuration;
}

function migrateConfigurationToVersion_2_0(configuration) {
  const version = VERSION_2_0;

  Object.assign(configuration, {
    version
  });

  return configuration;
}

module.exports = {
  createConfiguration,
  migrateConfigurationToVersion_2_0
};
