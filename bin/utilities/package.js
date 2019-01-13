'use strict';

const necessary = require('necessary');

const constants = require('../constants');

const { arrayUtilities, fileSystemUtilities } = necessary,
      { second } = arrayUtilities,
      { readFile } = fileSystemUtilities,
      { PACKAGE_JSON_FILE_NAME } = constants;

const utilitiesDirectoryName = __dirname, ///
      matches = utilitiesDirectoryName.match(/^(.+)\/bin\/utilities$/),
      secondMatch = second(matches),
			applicationDirectoryName = secondMatch, ///
			packageJSONFilePath = `${applicationDirectoryName}/${PACKAGE_JSON_FILE_NAME}`,
			packageJSONFile = readFile(packageJSONFilePath),
			packageJSON = JSON.parse(packageJSONFile),
			{ version } = packageJSON,
			currentVersion = version;  ///

function getCurrentVersion() {
	return currentVersion;
}

function isVersionUpToDate(version) {
  let versionUpToDate = false;

  if (version) {  ///
    versionUpToDate = true;
  }

  return versionUpToDate;
}

module.exports = {
	getCurrentVersion,
  isVersionUpToDate
};
