"use strict";

const { OPEN_CLI } = require("../constants"),
      { getPackageVersion } = require("../utilities/packageJSON");

function version() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${OPEN_CLI} version ${version}`);
}

module.exports = version;
