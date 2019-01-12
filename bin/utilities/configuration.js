'use strict';

const necessary = require('necessary');

const constants = require('../constants');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
			{ USE_SSH, HOST_URL, HOST_NAME_SUFFIX, RC_BASE_EXTENSION } = constants,
      { setRCBaseExtension, checkRCFileExists, createVacuousRCFile, updateRCFile, readRCFile } = rc;

setRCBaseExtension(RC_BASE_EXTENSION);

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

function createVacuousConfigurationFile() {
  createVacuousRCFile();

  setDefaultOptions();
}

module.exports = {
  retrieveOptions,
  updateOptions,
  addAccessToken,
  removeAccessToken,
  retrieveAccessToken,
  checkConfigurationFileExists,
  createVacuousConfigurationFile
};

function setDefaultOptions() {
  const useSSH = USE_SSH,
        hostURL = HOST_URL,
        hostNameSuffix = HOST_NAME_SUFFIX,
        defaultOptions = {
          useSSH,
          hostURL,
          hostNameSuffix
        },
        options = defaultOptions;	///

  updateRCFile({
    options
  });
}
