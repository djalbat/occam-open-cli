"use strict";

const { fileSystemUtilities } = require("../../lib/main"); ///

const { releaseFromReleaseName } = fileSystemUtilities;

function createReleaseOperation(proceed, abort, context) {
  const { releaseName } = context,
        release = releaseFromReleaseName(releaseName);

  if (release === null) {
    abort();

    return;
  }

  Object.assign(context, {
    release
  });

  proceed();
}

module.exports = createReleaseOperation;
