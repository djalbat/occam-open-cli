'use strict';

const necessary = require('necessary');

const configuration = require('../configuration');

const { pathUtilities } = necessary,
      { cwd, chdir } = process,
      { bottommostNameFromPath } = pathUtilities,
      { checkConfigurationFileExists } = configuration;

function changeDirectory() {
  let releaseName = null;

	const currentWorkingDirectoryPath = cwd(); ///

	chdir('..');

	const oldCurrentWorkingDirectoryPath = currentWorkingDirectoryPath, ///
				configurationFileExists = checkConfigurationFileExists();

	if (configurationFileExists) {
		const bottommostOldCurrentWorkingDirectoryName = bottommostNameFromPath(oldCurrentWorkingDirectoryPath);

		releaseName = bottommostOldCurrentWorkingDirectoryName; ///
	} else {
		chdir(oldCurrentWorkingDirectoryPath);
	}

  return releaseName;
}

module.exports = {
	changeDirectory
};
