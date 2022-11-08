"use strict";

function packReleaseOperation(proceed, abort, context) {
  let { release } = context;

  const releaseJSON = release.toJSON();

  release = releaseJSON;  ///

  Object.assign(context, {
    release
  });

  proceed();
}

module.exports = packReleaseOperation;
