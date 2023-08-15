"use strict";

const { OCCAM_OPEN_CLI } = require("../constants"),
      { getPackageVersion } = require("../utilities/packageJSON");

function versionAction() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${OCCAM_OPEN_CLI} version ${version}`);

  process.exit();
}

module.exports = versionAction;
