"use strict";

import { checkConfigurationFileExists, createConfigurationFile } from "../configuration";
import { FAILED_INITIALISE_MESSAGE, SUCCESSFUL_INITIALISE_MESSAGE } from "../messages";

export default function initialiseAction() {
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
}
