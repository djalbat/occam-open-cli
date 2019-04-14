'use strict';

const necessary = require('necessary');

const versions = require('../versions'),
      constants = require('../constants');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { VERSION_2_0 } = versions,
      { DEFAULT_HOST_URL } = constants,
      { readRCFile, writeRCFile } = rc;

function createConfigurationFile() {
  const version = VERSION_2_0,  ///
        options = {},
        hostURL = DEFAULT_HOST_URL; ///

  writeRCFile({
    version,
    options,
    hostURL
  });
}

function upgradeConfigurationFileToVersion_2_0() {
  const json = readRCFile(),
        version = VERSION_2_0;

  Object.assign(json, {
    version
  });

  writeRCFile(json);
}

module.exports = {
  createConfigurationFile,
  upgradeConfigurationFileToVersion_2_0
};

