"use strict";

const { shellUtilities } = require("necessary");

const { validateRepositoryName } = require("../../utilities/validate"),
      { REPOSITORY_NAME_DESCRIPTION } = require("../../descriptions"),
      { INVALID_REPOSITORY_NAME_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function repositoryNamePromptOperation(proceed, abort, context) {
  const { repositoryName } = context,
				errorMessage = INVALID_REPOSITORY_NAME_MESSAGE;

  if (repositoryName !== null) {
    const valid = validateRepositoryName(repositoryName);

    if (valid) {
      proceed();
      
      return;
    }

    console.log(errorMessage);
  }

  const description = REPOSITORY_NAME_DESCRIPTION,
        validationFunction = validateRepositoryName, ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const repositoryName = answer, ///
          valid = (repositoryName !== null);

    if (valid) {
      Object.assign(context, {
        repositoryName
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = repositoryNamePromptOperation;
