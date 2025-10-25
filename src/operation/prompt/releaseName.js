"use strict";

import { shellUtilities } from "necessary";

import { validateReleaseName } from "../../utilities/validate";
import { RELEASE_NAME_DESCRIPTION } from "../../descriptions";
import { INVALID_RELEASE_NAME_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function releaseNamePromptOperation(proceed, abort, context) {
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
