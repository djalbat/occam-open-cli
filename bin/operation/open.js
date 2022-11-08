"use strict";

const post = require("../post");

const { OPEN_API_URI } = require("../uris");

function openOperation(proceed, abort, context) {
  const { releaseName } = context,
        uri = `${OPEN_API_URI}/${releaseName}`,
        json = {};

  post(uri, json, (json) => {
    const { success } = json;

    Object.assign(context, {
      success
    });

    proceed();
  });
}

module.exports = openOperation;
