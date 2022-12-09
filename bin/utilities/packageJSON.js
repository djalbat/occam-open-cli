"use strict";

const { pathUtilities, arrayUtilities, fileSystemUtilities } = require("necessary");

const { PACKAGE_JSON } = require("../constants");

const { second } = arrayUtilities,
      { readFile } = fileSystemUtilities,
      { concatenatePaths } = pathUtilities;

const utilitiesDirectoryName = __dirname, ///
      matches = utilitiesDirectoryName.match(/^(.+)\/bin\/utilities$/),
      secondMatch = second(matches),
      applicationDirectoryName = secondMatch, ///
      packageJSONFilePath = concatenatePaths(applicationDirectoryName, PACKAGE_JSON),
      packageJSONFile = readFile(packageJSONFilePath),
      packageJSON = JSON.parse(packageJSONFile),
      { version } = packageJSON,
      packageVersion = version;  ///

function getPackageVersion() {
  return packageVersion;
}

module.exports = {
  getPackageVersion
};
