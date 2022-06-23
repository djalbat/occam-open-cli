"use strict";

const { fileSystemUtilities } = require("../../lib/main"); ///

const { releaseFromName } = fileSystemUtilities;

function createReleaseOperation(proceed, abort, context) {
  const { releaseName } = context,
        name = releaseName, ///
        release = releaseFromName(name);

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
