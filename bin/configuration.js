'use strict';

const necessary = require('necessary');

const constants = require('./constants'),
      latestConfiguration = require('./configuration/latest');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
			{ RC_BASE_EXTENSION } = constants,
      { createVacuousConfigurationFile } = latestConfiguration,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, readRCFile } = rc;

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

module.exports = {
  retrieveOptions,
  updateOptions,
  addAccessToken,
  removeAccessToken,
  retrieveAccessToken,
  checkConfigurationFileExists,
  createVacuousConfigurationFile
};
