"use strict";

const { Release } = require("occam-entities");

function releaseToJSONOperation(proceed, abort, context) {
  let release;

  const { project } = context;

  release = Release.fromProject(project);

  if (release === null) {
    abort();

    return;
  }

  const releaseJSON = release.toJSON();

  release = releaseJSON;  ///

  Object.assign(context, {
    release
  });

  proceed();
}

module.exports = releaseToJSONOperation;
