'use strict';

const post = require('./post'),
      callbackUtilities = require('./utilities/callback');

const { exit } = process,
      { executeCallbacks } = callbackUtilities;

function action(callbacks, uri, callback, context) {
  executeCallbacks(callbacks, (completed) => {
    if (!completed) {
      exit();
    }

    const data = context; ///

    post(uri, data, callback);
  }, context);
}

module.exports = action;
