'use strict';

const necessary = require('necessary');

const configurationUtilities = require('../utilities/configuration');

const { pathUtilities } = necessary,
      { cwd, chdir } = process,
      { bottommostNameFromPath } = pathUtilities,
      { checkConfigurationFileExists } = configurationUtilities;

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
