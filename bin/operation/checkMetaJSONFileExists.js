"use strict";

function checkMetaJSONFileExistsOperation(proceed, abort, context) {
  const { release } = context,
        metaJSONFile = release.getMetaJSONFile(),
        metaJSONFileExists = (metaJSONFile !== null);

  if (!metaJSONFileExists) {
    abort();

    return;
  }

  proceed();
}

module.exports = checkMetaJSONFileExistsOperation;
