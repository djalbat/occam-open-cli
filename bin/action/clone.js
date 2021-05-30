"use strict";

const action = require("../action"),
      cloneRepository = require("../cloneRepository"),
      releaseNamePromptCallback = require("../callback/prompt/releaseName");

const { CLONE_API_URI } = require("../uris"),
      { FAILED_CLONE_MESSAGE, SUCCESSFUL_CLONE_MESSAGE } = require("../messages");

function clone(argument) {
  const releaseName = argument,  ///
        name = releaseName, ///
        uri = CLONE_API_URI,
        callbacks = [
          releaseNamePromptCallback
        ],
        context = {
          name
        };

  action(callbacks, uri, (json) => {
    const { exists } = json;

    if (!exists) {
      console.log(FAILED_CLONE_MESSAGE);

      process.exit(1);
    }

    const { repository } = json;

    cloneRepository(repository, (success) => {
      success ?
        console.log(SUCCESSFUL_CLONE_MESSAGE) :
          console.log(FAILED_CLONE_MESSAGE);

      process.exit();
    });
  }, context);
}

module.exports = clone;
