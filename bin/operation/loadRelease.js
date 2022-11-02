"use strict";

const { fileSystemUtilities } = require("occam-file-system");

const { loadRelease } = fileSystemUtilities;

function loadReleaseOperation(proceed, abort, context) {
  const { releaseName } = context,
        projectsDirectoryPath = process.cwd(), ///
        release = loadRelease(releaseName ,projectsDirectoryPath);

  if (release === null) {
    abort();

    return;
  }

  Object.assign(context, {
    release
  });

  proceed();
}

module.exports = loadReleaseOperation;
