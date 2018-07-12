'use strict';

function validateAnswer(answer) { return  /^(:?yes|no|y|n)$/i.test(answer); }

function validateUsername(username) { return  /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(username); }

function validatePassword(password) { return /^[a-zA-Z0-9!@#$%^&*_.,\-]{8,24}$/.test(password); }

function validateReleaseName(releaseName) { return  /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(releaseName); }

function validateEmailAddress(emailAddress) { return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,16}$/.test(emailAddress); }

function validateHostNameSuffix(hostNameSuffix) { return /^[a-zA-Z0-9.\-]*$/.test(hostNameSuffix); }

function validateConfirmationCode(confirmationCode) { return /^[a-zA-Z0-9]{6,10}$/.test(confirmationCode); }

module.exports = {
  validateAnswer,
  validateUsername,
  validatePassword,
  validateReleaseName,
  validateEmailAddress,
  validateHostNameSuffix,
  validateConfirmationCode
};
