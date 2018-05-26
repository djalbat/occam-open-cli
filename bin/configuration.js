'use strict';

const necessary = require('necessary');

const commands = require('./commands'),
      parameters = require('./parameters'),
      defaultOptions = require('./defaultOptions');

const { commandFromArgv } = parameters,
      { pathUtilities, fileSystemUtilities, miscellaneousUtilities } = necessary,
      { bottommostNameFromPath, pathWithoutBottommostNameFromPath } = pathUtilities,
      { readFile } = fileSystemUtilities,
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

addVersionString();

function addAccessToken(accessToken) {
  updateRCFile({
    accessToken: accessToken
  });
}

function removeAccessToken() {
  updateRCFile(null, 'accessToken');
}

function retrieveOptions() {
  const json = readRCFile();

  let { options } = json;

  options = Object.assign(defaultOptions, options); ///

  return options;
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
  retrieveOptions: retrieveOptions,
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

function addVersionString() {
  const binDirectoryName = __dirname, ///
        applicationDirectoryName = pathWithoutBottommostNameFromPath(binDirectoryName), ///
        packageJSONFilePath = `${applicationDirectoryName}/package.json`,  ///
        packageJSONFile = readFile(packageJSONFilePath),
        packageJSON = JSON.parse(packageJSONFile),
        { version } = packageJSON,
        versionString = version;  ///

  Object.assign(rc, {
    versionString: versionString
  });
}
