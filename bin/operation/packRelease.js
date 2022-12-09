"use strict";

const { Release } = require("occam-file-system");

function packReleaseOperation(proceed, abort, context) {
  let release;

  const { project } = context;

  release = Release.fromProject(project);

  const releaseJSON = release.toJSON();

  release = releaseJSON;  ///

  Object.assign(context, {
    release
  });

  proceed();
}

module.exports = packReleaseOperation;
