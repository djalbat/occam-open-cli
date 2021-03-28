"use strict";

const action = require("../action"),
      passwordPromptCallback = require("../callback/prompt/password"),
      areYouSurePromptCallback = require("../callback/prompt/areYouSure"),
      releaseNamePromptCallback = require("../callback/prompt/releaseName"),
      retrieveAccessTokenCallback = require("../callback/retrieveAccessToken");

const { DEPRECATE_URI } = require("../uris"),
      { FAILED_DEPRECATE_MESSAGE, SUCCESSFUL_DEPRECATE_MESSAGE } = require("../messages");

function deprecate(argument) {
  const releaseName = argument,  ///
        password = null,
        uri = DEPRECATE_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          releaseNamePromptCallback,
          passwordPromptCallback,
          areYouSurePromptCallback
        ],
        context = {
          password,
          releaseName
        };

  action(callbacks, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_DEPRECATE_MESSAGE) :
        console.log(FAILED_DEPRECATE_MESSAGE);

    process.exit();
  }, context);
}

module.exports = deprecate;
