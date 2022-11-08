"use strict";

const { fileSystemUtilities } = require("necessary");

const { writeFile, checkEntryExists } = fileSystemUtilities;

function unpackReleasesOperation(proceed, abort, context) {
  const { releases } = context;

  if (releases === null) {
    abort();

    return;
  }

  let error = false;

  const releaseNames = Object.keys(releases); ///

  releaseNames.forEach((releaseName) => {
    const releaseJSON = releases[releaseName],
          releaseJSONString = JSON.stringify(releaseJSON),
          path = releaseName, ///
          entryExists = checkEntryExists;

    if (!entryExists) {
      const filePath = path,  ///
            content = releaseJSONString; ///

      writeFile(filePath, content);

      return;
    }

    console.log(`Cannot write the '${releaseName}' package to disk because an entry of that name already exists.`);

    error = true;
  });

  error ?
    abort() :
      proceed();
}

module.exports = unpackReleasesOperation;
