"use strict";

const post = require("../post");

const { CLONE_API_URI } = require("../uris");

function cloneOperation(proceed, abort, context) {
  const { releaseName } = context,
        uri = `${CLONE_API_URI}/${releaseName}`,
        json = {};

  post(uri, json, (json) => {
    const { success, releases = null } = json;

    Object.assign(context, {
      success,
      releases
    });

    success ?
      proceed() :
        abort();
  });
}

module.exports = cloneOperation;
