"use strict";

const { META_JSON_FILE_DOES_NOT_EXIST_MESSAGE } = require("../messages");

function checkMetaJSONFileExistsCallback(proceed, abort, context) {
  const { release } = context,
        metaJSONFile = release.getMetaJSONFile(),
        metaJSONFileExists = (metaJSONFile !== null);

  if (!metaJSONFileExists) {
    console.log(META_JSON_FILE_DOES_NOT_EXIST_MESSAGE);

    abort();

    return;
  }

  proceed();
}

module.exports = checkMetaJSONFileExistsCallback;
