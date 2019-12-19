'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages'),
      constants = require('../../constants');

const { miscellaneousUtilities } = necessary,
      { validateGitHubHostName } = validate,
      { prompt } = miscellaneousUtilities,
      { DEFAULT_GITHUB_HOST_NAME } = constants,
      { INVALID_GITHUB_HOST_NAME_MESSAGE } = messages;

function gitHubHostNamePromptCallback(proceed, abort, context) {
  const { useSSH } = context;

  if (!useSSH) {
    proceed();

    return;
  }

  const description = 'GitHub host name (leave blank for default): ',
        errorMessage = INVALID_GITHUB_HOST_NAME_MESSAGE,
        validationFunction = validateGitHubHostName,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (gitHubHostName) => {
    const valid = (gitHubHostName !== null);

    if (valid) {
      if (gitHubHostName === '') {
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
