"use strict";

import { characters } from "necessary";

import { execute } from "../utilities/shell";
import { EMPTY_STRING } from "../constants";
import { retrieveShellCommands } from "../configuration";

const { DASH_CHARACTER } = characters;

export default function executeShellCommandsOperation(proceed, abort, context) {
  const { success, releaseName } = context;

  if (success) {
    let shellCommands = retrieveShellCommands();

    if (shellCommands !== EMPTY_STRING) {
      shellCommands = shellCommands.replace(/{packageName}/, releaseName);  ///

      let message;

      const output = execute(shellCommands),
            { messages } = context,
            { stderr = null } = output;

      if (stderr !== null) {
        message = DASH_CHARACTER; //

        messages.push(message);

        message = stderr; ///

        messages.push(message);
      } else {
        const outputs = output.split(/\n/),
              outputsLength = outputs.length;

        if (outputsLength > 0) {
          let message;

          const { messages } = context;

          message = DASH_CHARACTER; //

          messages.push(message);

          outputs.forEach((output) => {
            message = output; ///

            messages.push(message);
          });
        }
      }
    }
  }

  proceed();
}
