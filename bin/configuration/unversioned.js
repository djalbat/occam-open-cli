'use strict';

const necessary = require('necessary');

const constants = require('../constants');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { createVacuousRCFile, updateRCFile } = rc,
			{ DEFAULT_USE_SSH, DEFAULT_HOST_URL, DEFAULT_HOST_NAME_SUFFIX } = constants;

function createVacuousConfigurationFile() {
  createVacuousRCFile();

  const useSSH = DEFAULT_USE_SSH,
        hostURL = DEFAULT_HOST_URL,
        hostNameSuffix = DEFAULT_HOST_NAME_SUFFIX,
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

module.exports = {
  createVacuousConfigurationFile
};
