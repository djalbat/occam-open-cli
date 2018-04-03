'use strict';

const necessary = require('necessary');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { setRCBaseExtension, checkRCFileExists, createVacuousRCFile, updateRCFile, readRCFile } = rc;

setRCBaseExtension('open');

const rcFileExists = checkRCFileExists();

if (!rcFileExists) {
  createVacuousRCFile();
}

function addAccessToken(accessToken) {
  updateRCFile({
    accessToken: accessToken
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
  addAccessToken: addAccessToken,
  removeAccessToken: removeAccessToken,
  retrieveAccessToken: retrieveAccessToken
};
