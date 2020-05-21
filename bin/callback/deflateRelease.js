"use strict";

const zlib = require("zlib");

const constants = require("../constants");

const { deflate } = zlib,
      { BASE64_ENCODING } = constants;

function deflateRelease(proceed, abort, context) {
  const { release } = context,
        releaseJSON = release.toJSON(),
        releaseJSONString = JSON.stringify(releaseJSON);

  deflate(releaseJSONString, (error, buffer) => {
    if (error) {
      abort();

      return;
    }

    const encoding = BASE64_ENCODING,
          deflatedReleaseJSONString = buffer.toString(encoding),
          deflatedRelease = deflatedReleaseJSONString;  ///

    Object.assign(context, {
      deflatedRelease
    });

    proceed();
  });
}

module.exports = deflateRelease;
