'use strict';

const necessary = require('necessary');

const versions = require('../es6/versions'),  ///
      constants = require('./constants'),
      configurationVersion_1_5 = require('./configuration/version_1_5'),
      configurationVersion_2_0 = require('./configuration/version_2_0');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
			{ RC_BASE_EXTENSION } = constants,
      { UNVERSIONED, VERSION_1_5, CURRENT_VERSION } = versions,
      { upgradeConfigurationFileToVersion_1_5 } = configurationVersion_1_5,
      { upgradeConfigurationFileToVersion_2_0, createConfigurationFile } = configurationVersion_2_0,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, readRCFile } = rc;

setRCBaseExtension(RC_BASE_EXTENSION);

function retrieveVersion() {
  const json = readRCFile();

  let { version } = json;

  if (version === undefined) {
    version = UNVERSIONED;
  }

  return version;
}

function retrieveHostURL() {
  const json = readRCFile(),
        { hostURL } = json;

  return hostURL;
}

function retrieveOptions() {
  const json = readRCFile(),
				{ options } = json;

  return options;
}

function updateOptions(options) {
  updateRCFile({
    options
  });
}

function addAccessToken(accessToken) {
  updateRCFile({
    accessToken
  });
}

function removeAccessToken() {
  updateRCFile(null, 'accessToken');
}

function retrieveAccessToken() {
  const json = readRCFile(),
        { accessToken } = json;

  return accessToken || null; ///
}

function upgradeConfigurationFile() {
  let version = retrieveVersion();

  while (version !== CURRENT_VERSION) {
    switch (version) {
      case UNVERSIONED:
        upgradeConfigurationFileToVersion_1_5();
        break;

      case VERSION_1_5:
        upgradeConfigurationFileToVersion_2_0();
        break;
    }

    version = retrieveVersion();
  }
}

function checkConfigurationFileExists() {
  const rcFileExists = checkRCFileExists(),
        configurationFileExists = rcFileExists; ///

  return configurationFileExists;
}

module.exports = {
  retrieveVersion,
  retrieveHostURL,
  retrieveOptions,
  updateOptions,
  addAccessToken,
  removeAccessToken,
  retrieveAccessToken,
  createConfigurationFile,
  upgradeConfigurationFile,
  checkConfigurationFileExists
};
