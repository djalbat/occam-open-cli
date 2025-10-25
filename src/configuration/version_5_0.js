"use strict";

const { HOST_URL } = require("../constants"),
      { VERSION_5_0 } = require("../versions");

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
  migrateConfigurationToVersion_5_0
};
