'use strict';

const releaseName = null,
			state = {
				releaseName
			};

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
	getReleaseName,
	setReleaseName
};
