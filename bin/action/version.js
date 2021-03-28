"use strict";

const { OCCAM_OPEN_CLI } = require("../constants"),
      { getPackageVersion } = require("../utilities/packageJSON");

function version() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${OCCAM_OPEN_CLI} version ${version}`);
}

module.exports = version;
