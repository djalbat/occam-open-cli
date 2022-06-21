"use strict";

const { checkConfigurationFileExists, createConfigurationFile } = require("../configuration"),
      { FAILED_INITIALISE_MESSAGE, SUCCESSFUL_INITIALISE_MESSAGE } = require("../messages");

function initialise() {
  let success;

  const configurationFileExists = checkConfigurationFileExists();

  if (configurationFileExists) {
    success = false;
  } else {
    createConfigurationFile();

    success = true;
  }

  const message = success ?
                    SUCCESSFUL_INITIALISE_MESSAGE :
                      FAILED_INITIALISE_MESSAGE;

  console.log(message);

  process.exit(0);
}

module.exports = initialise;
