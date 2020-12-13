"use strict";

const necessary = require("necessary");

const messages = require("../../messages"),
      constants = require("../../constants"),
      validateUtilities = require("../../utilities/validate");

const { miscellaneousUtilities } = necessary,
      { prompt } = miscellaneousUtilities,
      { validateGitHubHostName } = validateUtilities,
      { DEFAULT_GITHUB_HOST_NAME } = constants,
      { INVALID_GITHUB_HOST_NAME_MESSAGE } = messages;

function gitHubHostNamePromptCallback(proceed, abort, context) {
  const { useSSH } = context;

  if (!useSSH) {
    proceed();

    return;
  }

  const description = "GitHub host name (leave blank for default): ",
        errorMessage = INVALID_GITHUB_HOST_NAME_MESSAGE,
        validationFunction = validateGitHubHostName,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    let gitHubHostName = answer;  ///

    const valid = (gitHubHostName !== null);

    if (valid) {
      if (gitHubHostName === "") {
        gitHubHostName = DEFAULT_GITHUB_HOST_NAME;
      }

      Object.assign(context, {
        gitHubHostName
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = gitHubHostNamePromptCallback;
