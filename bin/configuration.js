'use strict';

const necessary = require('necessary');

const commands = require('./commands'),
      parameters = require('./parameters');

const { commandFromArgv } = parameters,
      { pathUtilities, miscellaneousUtilities } = necessary,
      { bottommostNameFromPath } = pathUtilities,
      { rc } = miscellaneousUtilities,
      { cwd, chdir } = process,
      { PUBLISH_COMMAND } = commands,
      { setRCBaseExtension, checkRCFileExists, createVacuousRCFile, updateRCFile, readRCFile } = rc;

let releaseName = null;

setRCBaseExtension('open');

const rcFileExists = checkRCFileExists();

if (!rcFileExists) {
  const success = changeDirectoryAndSetReleaseName();  ///

  if (!success) {
    createVacuousRCFile();
  }
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

function updateContextReleaseName(context) {
  if (releaseName !== null) {
    Object.assign(context, {
      releaseName: releaseName
    })
  }
}

module.exports = {
  addAccessToken: addAccessToken,
  removeAccessToken: removeAccessToken,
  retrieveAccessToken: retrieveAccessToken,
  updateContextReleaseName: updateContextReleaseName
};

function changeDirectoryAndSetReleaseName() {
  let success = false;

  const { argv } = process,
        command = commandFromArgv(argv),
        commandPublishCommand = (command === PUBLISH_COMMAND);

  if (commandPublishCommand) {
    const oldCurrentWorkingDirectoryPath = changeDirectory('..'),
          rcFileExists = checkRCFileExists();

    if (rcFileExists) {
      const bottommostOldCurrentWorkingDirectoryName = bottommostNameFromPath(oldCurrentWorkingDirectoryPath);

      releaseName = bottommostOldCurrentWorkingDirectoryName; ///

      success = true;
    } else {
      changeDirectory(oldCurrentWorkingDirectoryPath);
    }
  }

  return success;
}

function changeDirectory(directoryPath) {
  const currentWorkingDirectoryPath = cwd(); ///

  chdir(directoryPath);

  const oldCurrentWorkingDirectoryPath = currentWorkingDirectoryPath; ///

  return oldCurrentWorkingDirectoryPath;
}
