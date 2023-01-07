"use strict";

const { shellUtilities } = require("necessary");

const { YES, NO } = require("../../constants"),
      { isAnswerAffirmative } = require("../../utilities/prompt"),
      { validateAffirmation } = require("../../utilities/validate"),
      { INVALID_AFFIRMATION_MESSAGE } = require("../../messages"),
      { CLONE_DEPENDENCIES_DESCRIPTION } = require("../../descriptions");

const { prompt } = shellUtilities;

function cloneDependenciesPromptOperation(proceed, abort, context) {
  let answer = null;

  const { yes, no } = context;

  if (yes) {
    answer = YES;
  }

  if (no) {
    answer = NO;
  }

  const description = CLONE_DEPENDENCIES_DESCRIPTION,
        errorMessage = INVALID_AFFIRMATION_MESSAGE,
        validationFunction = validateAffirmation,  ///
        options = {
          answer,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const valid = (answer !== null);

    if (valid) {
      const affirmative = isAnswerAffirmative(answer),
            cloneDependencies = affirmative; ///

      Object.assign(context, {
        cloneDependencies
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = cloneDependenciesPromptOperation;
