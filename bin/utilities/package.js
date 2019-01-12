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
			versionString = version;  ///

function getVersionString() {
	return versionString;
}

module.exports = {
	getVersionString
};
