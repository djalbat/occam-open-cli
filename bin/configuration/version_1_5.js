"use strict";

const { VERSION_1_5 } = require("../versions"),
      { DEFAULT_GITHUB_HOST_NAME } = require("../defaults");

function migrateConfigurationToVersion_1_5(configuration) {
  let { options } = configuration;

  const version = VERSION_1_5,  ///
        { useSSH, hostURL, hostNameSuffix } = options;

  options = {};

  if (useSSH) {
    const gitHubHostName = `${DEFAULT_GITHUB_HOST_NAME}${hostNameSuffix}`,
          ssh = {
            gitHubHostName
          };

    Object.assign(options, {
      ssh
    });
  }

  configuration = {
    version,
    options,
    hostURL
  };

  return configuration;
}

module.exports = {
  migrateConfigurationToVersion_1_5
};
