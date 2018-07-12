'use strict';

const necessary = require('necessary');

const constants = require('../constants');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { updateRCFile, readRCFile } = rc,
			{ USE_SSH, HOST_URL, HOST_NAME_SUFFIX } = constants;

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

module.exports = {
	setDefaultOptions,
  retrieveOptions,
  updateOptions,
  addAccessToken,
  removeAccessToken,
  retrieveAccessToken
};
