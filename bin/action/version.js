'use strict';

const constants = require('../constants'),
      packageUtilities = require('../utilities/package');

const { OPEN_CLI } = constants,
      { getVersionString } = packageUtilities;

function version() {
  const versionString = getVersionString();

  console.log(`${OPEN_CLI} version ${versionString}`);
}

module.exports = version;
