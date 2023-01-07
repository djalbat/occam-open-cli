"use strict";

const childProcess = require("child_process");

const { encodings } = require("necessary");
const { trimTrailingCarriageReturn } = require("./string");

const { UTF_8_ENCODING } = encodings;

function execute(shellCommands) {
  let output;

  try {
    const encoding = UTF_8_ENCODING,  ///
          options = {
            encoding
          };

    output = childProcess.execSync(shellCommands, options);

    output = trimTrailingCarriageReturn(output); ///
  } catch (error) {
    output = error; ///
  }

  return output;
}

module.exports = {
  execute
};
