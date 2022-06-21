"use strict";


function validateUsername(username) { return /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(username); }

function validatePassword(password) { return /^[a-zA-Z0-9!@#$%^&*_.,\-]{8,24}$/.test(password); }

function validateAffirmation(affirmation) { return /^(:?yes|no|y|n)$/i.test(affirmation); }

function validateReleaseName(releaseName) { return /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(releaseName); }

function validateEmailAddress(emailAddress) { return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,16}$/.test(emailAddress); }

function validateGitHubHostName(gitHubHostName) { return /^[a-zA-Z0-9.\-]*$/.test(gitHubHostName); }

module.exports = {
  validateUsername,
  validatePassword,
  validateAffirmation,
  validateReleaseName,
  validateEmailAddress,
  validateGitHubHostName
};
