"use strict";

const post = require("./post");

const { executeCallbacks } = require("./utilities/callback");

function action(callbacks, uri, callback, context) {
  executeCallbacks(callbacks, (completed) => {
    if (!completed) {
      process.exit(1);
    }

    const data = context; ///

    post(uri, data, callback);
  }, context);
}

module.exports = action;
