"use strict";

const JSZip = require("jszip");

const { encodings } = require("necessary");

const { RELEASE_JSON } = require("../constants");

const { BASE64_ENCODING } = encodings;

function zipReleaseOperation(proceed, abort, context) {
  const { release } = context,
        type = BASE64_ENCODING,  ///
        jsZip = new JSZip(),
        releaseJSON = release.toJSON(),
        releaseJSONString = JSON.stringify(releaseJSON),
        name = RELEASE_JSON,
        content = releaseJSONString,  ///
        options = {
          type
        };

  jsZip.file(name, content);

  jsZip.generateAsync(options)
    .catch(abort)
    .then((zippedRelease) => {
      Object.assign(context, {
        zippedRelease
      });

      proceed();
    });
}

module.exports = zipReleaseOperation;
