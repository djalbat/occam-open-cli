"use strict";

const post = require("../post");

const { CLONE_API_URI } = require("../uris");

function repositoryOperation(proceed, abort, context) {
  const { releaseName } = context,
        uri = CLONE_API_URI,
        json = {
          releaseName
        };

  post(uri, json, (json) => {
    const { dependency = null } = json;

    if (dependency === null) {
      abort();

      return;
    }

    Object.assign(context, {
      dependency
    });

    proceed();
  });
}

module.exports = repositoryOperation;
