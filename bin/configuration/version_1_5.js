'use strict';

const necessary = require('necessary');

const versions = require('../versions'),
      constants = require('../constants'),
      packageUtilities = require('../utilities/package');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { VERSION_1_5 } = versions,
      { isVersionUpToDate } = packageUtilities,
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

function upgradeConfigurationFile() {
  const json = readRCFile(),
        { version } = json,
        versionUpToDate = isVersionUpToDate(version);

  if (!versionUpToDate) {
    upgradeConfigurationFileToVersion_1_5()
  }
}

module.exports = {
  createConfigurationFile,
  upgradeConfigurationFile
};

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
