"use strict";

const { deflate } = require("zlib");

const { BASE64 } = require("../constants");

function deflateRelease(proceed, abort, context) {
  const { release } = context,
        releaseJSON = release.toJSON(),
        releaseJSONString = JSON.stringify(releaseJSON);

  deflate(releaseJSONString, (error, buffer) => {
    if (error) {
      abort();

      return;
    }

    const encoding = BASE64,
          deflatedReleaseJSONString = buffer.toString(encoding),
          deflatedRelease = deflatedReleaseJSONString;  ///

    Object.assign(context, {
      deflatedRelease
    });

    proceed();
  });
}

module.exports = deflateRelease;
