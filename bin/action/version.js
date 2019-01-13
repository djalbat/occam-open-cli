'use strict';

const constants = require('../constants'),
      packageUtilities = require('../utilities/package');

const { OPEN_CLI } = constants,
      { getCurrentVersion } = packageUtilities;

function version() {
  const currentVersion = getCurrentVersion(),
        version = currentVersion; ///

  console.log(`${OPEN_CLI} version ${version}`);
}

module.exports = version;
