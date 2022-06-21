"use strict";

const { VERSION_1_5 } = require("../versions"),
      { DEFAULT_GITHUB_HOST_NAME, DEFAULT_HOST_URL } = require("../defaults");

function createConfiguration() {
  const version = VERSION_1_5,  ///
        options = {},
        hostURL = DEFAULT_HOST_URL, ///
        configuration = {
          version,
          options,
          hostURL
        } ;

  return configuration;
}

function migrateConfigurationToVersion_1_5(configuration) {
  let { options } = configuration;

  const version = VERSION_1_5,  ///
        { accessToken } = json,
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

  if (accessToken) {
    Object.assign(configuration, {
      accessToken
    });
  }

  return configuration;
}

module.exports = {
  migrateConfigurationToVersion_1_5
};
