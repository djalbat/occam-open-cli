'use strict';

const messages = require('../messages');

const { README_FILE_DOES_NOT_EXIST_MESSAGE } = messages;

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
