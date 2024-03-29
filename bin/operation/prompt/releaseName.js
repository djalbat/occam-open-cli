"use strict";

const { shellUtilities } = require("necessary");

const { validateReleaseName } = require("../../utilities/validate"),
      { RELEASE_NAME_DESCRIPTION } = require("../../descriptions"),
      { INVALID_RELEASE_NAME_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function releaseNamePromptOperation(proceed, abort, context) {
  const { releaseName } = context,
				errorMessage = INVALID_RELEASE_NAME_MESSAGE;

  if (releaseName !== null) {
    const valid = validateReleaseName(releaseName);

    if (valid) {
      proceed();
      
      return;
    }

    console.log(errorMessage);
  }

  const description = RELEASE_NAME_DESCRIPTION,
        validationFunction = validateReleaseName, ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const releaseName = answer, ///
          valid = (releaseName !== null);

    if (valid) {
      Object.assign(context, {
        releaseName
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = releaseNamePromptOperation;
