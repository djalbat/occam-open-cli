'use strict';

const state = require('../state');

const { getVersionString } = state;

function version() {
  const versionString = getVersionString();

  console.log(`Open-CLI version ${versionString}`);
}

module.exports = version;
