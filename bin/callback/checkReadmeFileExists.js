"use strict";

const { README_FILE_DOES_NOT_EXIST_MESSAGE } = require("../messages");

function checkReadmeFileExistsCallback(proceed, abort, context) {
  const { release } = context,
        readmeFile = release.getReadmeFile(),
        readmeFileExists = (readmeFile !== null);

  if (!readmeFileExists) {
    console.log(README_FILE_DOES_NOT_EXIST_MESSAGE);

    abort();

    return;
  }

  proceed();
}

module.exports = checkReadmeFileExistsCallback;
