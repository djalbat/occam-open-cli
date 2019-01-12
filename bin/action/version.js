'use strict';

const packageUtilities = require('../utilities/package');

const { getVersionString } = packageUtilities;

function version() {
  const versionString = getVersionString();

  console.log(`Open-CLI version ${versionString}`);
}

module.exports = version;
