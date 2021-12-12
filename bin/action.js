"use strict";

const post = require("./post");

const { executeOperations } = require("./utilities/operation");

function action(operations, uri, callback, context) {
  executeOperations(operations, (completed) => {
    if (!completed) {
      process.exit(1);
    }

    const data = context; ///

    post(uri, data, callback);
  }, context);
}

module.exports = action;
