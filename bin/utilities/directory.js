'use strict';

const necessary = require('necessary');

const { pathUtilities, miscellaneousUtilities } = necessary,
      { bottommostNameFromPath } = pathUtilities,
			{ rc } = miscellaneousUtilities,
      { cwd, chdir } = process,
      { checkRCFileExists } = rc;

function changeDirectory() {
  let releaseName = null;

	const currentWorkingDirectoryPath = cwd(); ///

	chdir('..');

	const oldCurrentWorkingDirectoryPath = currentWorkingDirectoryPath, ///
				rcFileExists = checkRCFileExists();

	if (rcFileExists) {
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
