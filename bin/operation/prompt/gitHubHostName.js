"use strict";

const { shellUtilities } = require("necessary");

const { EMPTY_STRING } = require("../../constants"),
      { validateGitHubHostName } = require("../../utilities/validate"),
      { DEFAULT_GITHUB_HOST_NAME } = require("../../defaults"),
      { GITHUB_HOST_NAME_DESCRIPTION } = require("../../descriptions"),
      { INVALID_GITHUB_HOST_NAME_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function gitHubHostNamePromptOperation(proceed, abort, context) {
  const { useSSH } = context;

  if (!useSSH) {
    proceed();

    return;
  }

  const description = GITHUB_HOST_NAME_DESCRIPTION,
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
      if (gitHubHostName === EMPTY_STRING) {
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

module.exports = gitHubHostNamePromptOperation;
