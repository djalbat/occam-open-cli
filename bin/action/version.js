"use strict";

const { OPEN_CLI } = require("../constants"),
      { getPackageVersion } = require("../utilities/packageJSON");

function version() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${OPEN_CLI} version ${version}`);

  process.exit();
}

module.exports = version;
