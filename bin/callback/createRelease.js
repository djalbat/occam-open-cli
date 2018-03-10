'use strict';

const messages = require('../messages'),
      Release = require('../../es6/release');

const { UNABLE_TO_CREATE_RELEASE } = messages;

function createRelease(proceed, abort, context) {
  const { packageName } = context,
        release = Release.fromPackageName(packageName);

  if (release === null) {
    console.log(UNABLE_TO_CREATE_RELEASE);

    abort();

    return;
  }

  Object.assign(context, {
    release: release
  });

  proceed();
}

module.exports = createRelease;
