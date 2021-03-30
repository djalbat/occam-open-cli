"use strict";

const { fileSystemUtilities } = require("../../lib/main"), ///
      { UNABLE_TO_CREATE_RELEASE_MESSAGE } = require("../messages");

const { releaseFromName } = fileSystemUtilities;

function createReleaseCallback(proceed, abort, context) {
  const { releaseName } = context,
        name = releaseName, ///
        release = releaseFromName(name);

  if (release === null) {
    console.log(UNABLE_TO_CREATE_RELEASE_MESSAGE);

    abort();

    return;
  }

  Object.assign(context, {
    release
  });

  proceed();
}

module.exports = createReleaseCallback;
