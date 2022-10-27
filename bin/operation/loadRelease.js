"use strict";

const { fileSystemUtilities } = require("occam-file-system");

const { PERIOD } = require("../constants");

const { loadRelease } = fileSystemUtilities;

function loadReleaseOperation(proceed, abort, context) {
  const { releaseName } = context,
        projectsDirectoryPath = PERIOD, ///
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
