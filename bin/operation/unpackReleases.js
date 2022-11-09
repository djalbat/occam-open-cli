"use strict";

const { fileSystemUtilities } = require("necessary");

const { writeFile, checkEntryExists } = fileSystemUtilities;

function unpackReleasesOperation(proceed, abort, context) {
  const { releases } = context;

  if (releases === null) {
    abort();

    return;
  }

  const { quietly } = context;

  releases.forEach((release) => {
    const { name } = release,
          path = name, ///
          entryExists = checkEntryExists(path);

    if (!entryExists) {
      const filePath = path,  ///
            releaseJSON = release,  ///
            releaseJSONString = JSON.stringify(releaseJSON),
            content = releaseJSONString; ///

      writeFile(filePath, content);

      return;
    }

    if (!quietly) {
      console.log(`Cannot write the '${name}' package to disk because an entry of that name already exists.`);
    }
  });

  proceed();
}

module.exports = unpackReleasesOperation;
