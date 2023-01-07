"use strict";

function validateAnswer(answer) { return  /^(:?yes|no|y|n)$/i.test(answer); }

function validateUsername(username) { return /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(username); }

function validatePassword(password) { return /^[a-zA-Z0-9!@#$%^&*_.,\-]{8,24}$/.test(password); }

function validateAffirmation(affirmation) { return /^(:?yes|no|y|n)$/i.test(affirmation); }

function validateReleaseName(releaseName) { return /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(releaseName); }

function validateEmailAddress(emailAddress) { return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,16}$/.test(emailAddress); }

function validateShellCommands(shellCommands) { return  /^.*$/.test(shellCommands); }

function validateGitHubHostName(gitHubHostName) { return /^[a-zA-Z0-9.\-]*$/.test(gitHubHostName); }

function validateEmailAddressOrUsername(emailAddressOrUsername) {
  let valid = false;

  if (!valid) {
    const emailAddress = emailAddressOrUsername;  ///

    valid = validateEmailAddress(emailAddress);
  }

  if (!valid) {
    const username = emailAddressOrUsername;  ///

    valid = validateUsername(username);
  }

  return valid;
}

module.exports = {
  validateAnswer,
  validateUsername,
  validatePassword,
  validateAffirmation,
  validateReleaseName,
  validateEmailAddress,
  validateShellCommands,
  validateGitHubHostName,
  validateEmailAddressOrUsername
};
