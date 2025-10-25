"use strict";

import { shellUtilities } from "necessary";

import { validateRepositoryName } from "../../utilities/validate";
import { REPOSITORY_NAME_DESCRIPTION } from "../../descriptions";
import { INVALID_REPOSITORY_NAME_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function repositoryNamePromptOperation(proceed, abort, context) {
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
