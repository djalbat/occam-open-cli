'use strict';

const necessary = require('necessary');

const constants = require('./constants'),
      configurationVersion_1_5 = require('./configuration/version_1_5');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
			{ RC_BASE_EXTENSION } = constants,
      { upgradeConfigurationFile, createConfigurationFile } = configurationVersion_1_5,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, readRCFile } = rc;

setRCBaseExtension(RC_BASE_EXTENSION);

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

function checkConfigurationFileExists() {
  const rcFileExists = checkRCFileExists(),
        configurationFileExists = rcFileExists; ///

  return configurationFileExists;
}

module.exports = {
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
