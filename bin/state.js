'use strict';

const necessary = require('necessary');

const { pathUtilities, fileSystemUtilities } = necessary,
			{ pathWithoutBottommostNameFromPath } = pathUtilities,
			{ readFile } = fileSystemUtilities;

const binDirectoryName = __dirname, ///
			applicationDirectoryName = pathWithoutBottommostNameFromPath(binDirectoryName), ///
			packageJSONFilePath = `${applicationDirectoryName}/package.json`,  ///
			packageJSONFile = readFile(packageJSONFilePath),
			packageJSON = JSON.parse(packageJSONFile),
			{ version } = packageJSON,
			versionString = version,  ///
			releaseName = null,
			state = {
				versionString,
				releaseName
			};

function getVersionString() {
	const { versionString } = state;

	return versionString;
}

function getReleaseName() {
	const { releaseName } = state;

	return releaseName;
}

function setReleaseName(releaseName) {
	Object.assign(state, {
		releaseName
	});
}

module.exports = {
	getVersionString,
	getReleaseName,
	setReleaseName
};
