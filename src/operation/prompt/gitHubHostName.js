"use strict";

import { shellUtilities } from "necessary";

import { EMPTY_STRING } from "../../constants";
import { validateGitHubHostName } from "../../utilities/validate";
import { DEFAULT_GITHUB_HOST_NAME } from "../../defaults";
import { GITHUB_HOST_NAME_DESCRIPTION } from "../../descriptions";
import { INVALID_GITHUB_HOST_NAME_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function gitHubHostNamePromptOperation(proceed, abort, context) {
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
