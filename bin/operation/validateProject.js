"use strict";

const { MISSING_README_FILE_MESSAGE, MISSING_META_JSON_FILE_MESSAGE } = require("../messages");

function validateProjectOperation(proceed, abort, context) {
  const { project } = context,
        readMeFile = project.getReadmeFile(),
        metaJSONFile = project.getMetaJSONFile();

  const messages = [];

  if (readMeFile === null) {
    const message = MISSING_README_FILE_MESSAGE;

    messages.push(message);
  }

  if (metaJSONFile === null) {
    const message = MISSING_META_JSON_FILE_MESSAGE;

    messages.push(message);
  } else {
    const version = project.getVersion();


  }

  const messagesLength = messages.length;

  if (messagesLength > 0) {
    const success = false;

    Object.assign(context, {
      success,
      messages
    });

    abort();

    return;
  }

  debugger

  proceed();
}

module.exports = validateProjectOperation;
