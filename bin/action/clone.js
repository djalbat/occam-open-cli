"use strict";

const cloneOperation = require("../operation/clone"),
      cloneRepositoriesOperation = require("../operation/cloneRepositories"),
      repositoryNamePromptOperation = require("../operation/prompt/repositoryName");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_CLONE_MESSAGE, FAILED_CLONE_MESSAGE } = require("../messages");

function cloneAction(repositoryName, dependencies, headless, quietly) {
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

module.exports = cloneAction;
