"use strict";

export function validateAnswer(answer) { return  /^(:?yes|no|y|n)$/i.test(answer); }

export function validateUsername(username) { return /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(username); }

export function validatePassword(password) { return /^[a-zA-Z0-9!@#$%^&*_.,\-]{8,24}$/.test(password); }

export function validateAffirmation(affirmation) { return /^(:?yes|no|y|n)$/i.test(affirmation); }

export function validateReleaseName(releaseName) { return /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(releaseName); }

export function validateEmailAddress(emailAddress) { return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,16}$/.test(emailAddress); }

export function validateShellCommands(shellCommands) { return  /^.*$/.test(shellCommands); }

export function validateRepositoryName(repositoryName) { return /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(repositoryName); }

export function validateGitHubHostName(gitHubHostName) { return /^[a-zA-Z0-9.\-]*$/.test(gitHubHostName); }

export function validateEmailAddressOrUsername(emailAddressOrUsername) {
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
