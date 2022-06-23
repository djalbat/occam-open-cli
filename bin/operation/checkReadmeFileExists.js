"use strict";

function checkReadmeFileExistsOperation(proceed, abort, context) {
  const { release } = context,
        readmeFile = release.getReadmeFile(),
        readmeFileExists = (readmeFile !== null);

  if (!readmeFileExists) {
    abort();

    return;
  }

  proceed();
}

module.exports = checkReadmeFileExistsOperation;
