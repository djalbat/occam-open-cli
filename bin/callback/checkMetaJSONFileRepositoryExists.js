'use strict';

const messages = require('../messages');

const { META_JSON_FILE_REPOSITORY_DOES_NOT_EXIST_MESSAGE } = messages;

function checkMetaJSONFileRepositoryExistsCallback(proceed, abort, context) {
  const { release } = context,
        metaJSONFile = release.getMetaJSONFile(),
        metaJSONFileRepositoryExists = metaJSONFile.checkRepositoryExists();

  if (!metaJSONFileRepositoryExists) {
    console.log(META_JSON_FILE_REPOSITORY_DOES_NOT_EXIST_MESSAGE);

    abort();

    return;
  }

  proceed();
}

module.exports = checkMetaJSONFileRepositoryExistsCallback;
