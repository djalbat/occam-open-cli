'use strict';

const zlib = require('zlib');

const constants = require('../constants');

const { deflate } = zlib,
      { BASE64_ENCODING } = constants;

function deflateRelease(proceed, abort, context) {
  const { release } = context;

  delete context.release;

  const releaseJSON = release.toJSON(),
        releaseJSONString = JSON.stringify(releaseJSON);

  deflate(releaseJSONString, function(error, buffer) {
    if (error) {
      abort();

      return;
    }

    const encoding = BASE64_ENCODING,
          deflatedReleaseJSONString = buffer.toString(encoding),
          deflatedRelease = deflatedReleaseJSONString;  ///

    Object.assign(context, {
      deflatedRelease: deflatedRelease
    });

    proceed();
  });
}

module.exports = deflateRelease;
