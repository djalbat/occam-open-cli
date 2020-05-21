"use strict";

const constants = require("../constants"),
      packageJSONUtilities = require("../utilities/packageJSON");

const { OCCAM_OPEN_CLI } = constants,
      { getPackageVersion } = packageJSONUtilities;

function version() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${OCCAM_OPEN_CLI} version ${version}`);
}

module.exports = version;
