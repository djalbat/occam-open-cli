"use strict";

import openOperation from "../operation/open";
import openReleasesOperation from "../operation/openReleasees";
import releaseNamePromptOperation from "../operation/prompt/releaseName";

import { executeOperations } from "../utilities/operation";
import { SUCCESSFUL_OPEN_MESSAGE, FAILED_OPEN_MESSAGE } from "../messages";

export default function openAction(releaseName, dependencies, headless, quietly, yes) {
  const operations = [
          releaseNamePromptOperation,
          openOperation,
          openReleasesOperation
        ],
        context = {
          yes,
          quietly,
          headless,
          releaseName,
          dependencies
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_OPEN_MESSAGE :
                        FAILED_OPEN_MESSAGE;

    console.log(message);
  }, context);
}
