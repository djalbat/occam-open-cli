"use strict";

import childProcess from "child_process";

import { encodings } from "necessary";
import { trimTrailingCarriageReturn } from "./string";

const { UTF_8_ENCODING } = encodings;

export function execute(shellCommands) {
  let output;

  try {
    const stdio = [],
          encoding = UTF_8_ENCODING,  ///
          options = {
            stdio,
            encoding
          };

    output = childProcess.execSync(shellCommands, options);

    output = trimTrailingCarriageReturn(output); ///
  } catch (error) {
    output = error; ///
  }

  return output;
}
