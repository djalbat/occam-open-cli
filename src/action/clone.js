"use strict";

import cloneOperation from "../operation/clone";
import cloneRepositoriesOperation from "../operation/cloneRepositories";
import repositoryNamePromptOperation from "../operation/prompt/repositoryName";

import { executeOperations } from "../utilities/operation";
import { SUCCESSFUL_CLONE_MESSAGE, FAILED_CLONE_MESSAGE } from "../messages";

export default function cloneAction(repositoryName, dependencies, headless, quietly) {
  const operations = [
          repositoryNamePromptOperation,
          cloneOperation,
          cloneRepositoriesOperation
        ],
        context = {
          quietly,
          headless,
          dependencies,
          repositoryName
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_CLONE_MESSAGE :
                        FAILED_CLONE_MESSAGE;

    console.log(message);
  }, context);
}
