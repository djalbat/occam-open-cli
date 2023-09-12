"use strict";

const { packageUtilities } = require("necessary");

const { OCCAM_OPEN_CLI } = require("../constants");

const { getVersion } = packageUtilities;

function versionAction() {
  const version = getVersion(); ///

  console.log(`${OCCAM_OPEN_CLI} version ${version}`);
}

module.exports = versionAction;
