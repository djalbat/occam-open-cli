"use strict";

const { fileSystemUtilities } = require("necessary");

const { fileNames } = require("occam-file-system");

const { META_JSON_FILE_NAME } = fileNames,

function updateVersionOperation(proceed, abort, context) {
  const { success } = context;

  if (success) {
    const { version } = context;


  }

  proceed();
}

module.exports = updateVersionOperation;
