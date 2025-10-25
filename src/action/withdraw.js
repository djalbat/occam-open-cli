"use strict";

import withdrawOperation from "../operation/withdraw";
import areYouSurePromptOperation from "../operation/prompt/areYouSure";
import getIdentityTokenOperation from "../operation/getIdentityToken";
import releaseNamePromptOperation from "../operation/prompt/releaseName";

import { executeOperations } from "../utilities/operation";
import { FAILED_WITHDRAW_MESSAGE, SUCCESSFUL_WITHDRAW_MESSAGE } from "../messages";

export default function withdrawAction(releaseName) {
  const password = null,
        operations = [
          getIdentityTokenOperation,
          releaseNamePromptOperation,
          areYouSurePromptOperation,
          withdrawOperation
        ],
        context = {
          password,
          releaseName
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_WITHDRAW_MESSAGE :
                        FAILED_WITHDRAW_MESSAGE;

    console.log(message);
  }, context);
}
