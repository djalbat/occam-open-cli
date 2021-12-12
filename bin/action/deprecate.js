"use strict";

const action = require("../action"),
      passwordPromptOperation = require("../operation/prompt/password"),
      areYouSurePromptOperation = require("../operation/prompt/areYouSure"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName"),
      retrieveAccessTokenOperation = require("../operation/retrieveAccessToken");

const { DEPRECATE_API_URI } = require("../uris"),
      { FAILED_DEPRECATE_MESSAGE, SUCCESSFUL_DEPRECATE_MESSAGE } = require("../messages");

function deprecate(argument) {
  const releaseName = argument,  ///
        password = null,
        uri = DEPRECATE_API_URI,
        operations = [
          retrieveAccessTokenOperation,
          releaseNamePromptOperation,
          passwordPromptOperation,
          areYouSurePromptOperation
        ],
        context = {
          password,
          releaseName
        };

  action(operations, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_DEPRECATE_MESSAGE) :
        console.log(FAILED_DEPRECATE_MESSAGE);

    process.exit();
  }, context);
}

module.exports = deprecate;
