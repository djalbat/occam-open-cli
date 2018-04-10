'use strict';

const necessary = require('necessary');

const { fileSystemUtilities } = necessary,
      { readFile } = fileSystemUtilities;

function version(dirname) {
  const packageJSONFilePath = `${dirname}/package.json`,  ///
        packageJSONFile = readFile(packageJSONFilePath),
        packageJSON = JSON.parse(packageJSONFile),
        { version } = packageJSON;

  console.log(`Open-CLI version ${version}`);
}

module.exports = version;
