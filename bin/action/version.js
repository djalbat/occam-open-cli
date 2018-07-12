'use strict';

const necessary = require('necessary');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities;

function version() {
  const { versionString } = rc;

  console.log(`Open-CLI version ${versionString}`);
}

module.exports = version;
