"use strict";

const post = require("../post");

const { CLONE_API_URI } = require("../uris");

function repositoryOperation(proceed, abort, context) {
  const { releaseName } = context,
        uri = `${CLONE_API_URI}/${releaseName}`,
        json = {};

  post(uri, json, (json) => {
    const { repository = null } = json;

    if (repository === null) {
      abort();

      return;
    }

    Object.assign(context, {
      repository
    });

    proceed();
  });
}

module.exports = repositoryOperation;
