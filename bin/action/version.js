'use strict';

const constants = require('../constants'),
      packageUtilities = require('../utilities/package');

const { OPEN_CLI } = constants,
      { getPackageVersion } = packageUtilities;

function version() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${OPEN_CLI} version ${version}`);
}

module.exports = version;
