"use strict";

const { loadRelease } = require("occam-file-system");

function loadReleaseOperation(proceed, abort, context) {
  const { releaseName } = context;

  let release = null;

  try {
    release = loadRelease(releaseName);
  } catch (error) {
    ///
  }

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
