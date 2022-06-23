"use strict";

const { HOST_URL } = require("../constants"),
      { VERSION_5_0 } = require("../versions"),
      { DEFAULT_HOST } = require("../defaults");

function createConfiguration() {
  const version = VERSION_5_0,
        host = DEFAULT_HOST,
        options = {},
        identityToken = null,
        configuration = {
          version,
          host,
          options,
          identityToken
        };

  return configuration;
}

function migrateConfigurationToVersion_5_0(configuration) {
  const { hostURL } = configuration,
        version = VERSION_5_0,
        host = hostURL, ///
        identityToken = null;

  delete configuration[HOST_URL];

  Object.assign(configuration, {
    version,
    host,
    identityToken
  });

  return configuration;
}

module.exports = {
  createConfiguration,
  migrateConfigurationToVersion_5_0
};
