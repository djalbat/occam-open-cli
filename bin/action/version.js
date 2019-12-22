'use strict';

const constants = require('../constants'),
      packageJSONUtilities = require('../utilities/packageJSON');

const { OPEN_CLI } = constants,
      { getPackageVersion } = packageJSONUtilities;

function version() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${OPEN_CLI} version ${version}`);
}

module.exports = version;
