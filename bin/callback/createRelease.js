'use strict';

const messages = require('../messages'),
      Release = require('../../es6/release');

const { UNABLE_TO_CREATE_RELEASE_MESSAGE } = messages;

function createReleaseCallback(proceed, abort, context) {
  const { releaseName } = context,
        name = releaseName, ///
        release = Release.fromName(name);

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
