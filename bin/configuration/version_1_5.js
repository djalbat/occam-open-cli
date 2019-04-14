'use strict';

const necessary = require('necessary');

const versions = require('../versions'),
      constants = require('../constants');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { VERSION_1_5 } = versions,
      { readRCFile, writeRCFile } = rc,
      { DEFAULT_GITHUB_HOST_NAME, DEFAULT_HOST_URL } = constants;

function createConfigurationFile() {
  const version = VERSION_1_5,  ///
        options = {},
        hostURL = DEFAULT_HOST_URL; ///

  writeRCFile({
    version,
    options,
    hostURL
  });
}

function upgradeConfigurationFileToVersion_1_5() {
  let json = readRCFile(),
      { options } = json;

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

  json = {
    version,
    options,
    hostURL
  };

  if (accessToken) {
    Object.assign(json, {
      accessToken
    });
  }

  writeRCFile(json);
}

module.exports = {
  createConfigurationFile,
  upgradeConfigurationFileToVersion_1_5
};
