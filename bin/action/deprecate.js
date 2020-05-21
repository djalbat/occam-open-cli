"use strict";

const uris = require("../uris"),
      action = require("../action"),
      messages = require("../messages"),
      passwordPromptCallback = require("../callback/prompt/password"),
      areYouSurePromptCallback = require("../callback/prompt/areYouSure"),
      releaseNamePromptCallback = require("../callback/prompt/releaseName"),
      retrieveAccessTokenCallback = require("../callback/retrieveAccessToken");

const { exit } = process,
      { DEPRECATE_URI } = uris,
      { FAILED_DEPRECATE_MESSAGE, SUCCESSFUL_DEPRECATE_MESSAGE } = messages;

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

    exit();
  }, context);
}

module.exports = deprecate;
