'use strict';

const post = require('./post'),
      executeCallbacks = require('./executeCallbacks');

function action(callbacks, uri, callback, context) {
  executeCallbacks(callbacks, function(completed) {
    if (!completed) {
      exit();
    }

    const data = context; ///

    post(uri, data, callback);
  }, context);
}

module.exports = action;
