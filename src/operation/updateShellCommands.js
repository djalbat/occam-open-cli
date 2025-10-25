"use strict";

import { updateShellCommands } from "../configuration";

export default function updateShellCommandsOperation(proceed, abort, context) {
  const { shellCommands } = context;

  updateShellCommands(shellCommands);

  proceed();
}
