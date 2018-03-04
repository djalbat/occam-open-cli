'use strict';

const SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE = 'The server failed to respond in a timely fasion. If this problem persists, please be kind enough to report it.',
      SERVER_ERROR_MESSAGE = 'There was an error on the server. If the problem persists, please be kind enough to report it (including the date and time).',
      INVALID_USERNAME_MESSAGE = 'Usernames must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.',
      INVALID_PASSWORD_MESSAGE = 'Passwords must consist of at least eight letters, numbers or common punctuation symbols.',
      INVALID_EMAIL_ADDRESS_MESSAGE = 'The email address does not appear to be a valid one.',
      INVALID_CONFIRMATION_CODE_MESSAGE = 'Confirmation codes consist of six to ten alphabetical characters.',
      PASSWORDS_DO_NOT_MATCH_MESSAGE = 'The passwords do not match.',
      NOT_LOGGED_IN_MESSAGE = 'You are not logged in.',
      LOGGED_OUT_MESSAGE = 'You have been logged out.',
      FAILED_LOGIN_MESSAGE = 'Failed to login.',
      FAILED_REGISTER_MESSAGE = 'Failed to register.',
      FAILED_RESET_PASSWORD_MESSAGE = 'Failed to reset password.',
      FAILED_CHANGE_PASSWORD_MESSAGE = 'Failed to change password.',
      FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE = 'Failed to confirm email address.',
      FAILED_RESEND_CONFIRMATION_CODE_MESSAGE = 'Failed to resend confirmation code.',
      SUCCESSFUL_LOGIN_MESSAGE = 'You have logged in successfully.',
      SUCCESSFUL_REGISTER_MESSAGE = 'You have been registered successfully. You can now log in.',
      SUCCESSFUL_RESET_PASSWORD_MESSAGE = 'Your password has been reset successfully. Please check your email for further instructions.',
      SUCCESSFUL_CHANGE_PASSWORD_MESSAGE = 'Your password has been changed successfully.',
      SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE = 'You have successfully confirmed your email address.',
      SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE = 'A new confirmation code was sent successfully. Please check your email.';

const messages = {
  SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE: SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE: SERVER_ERROR_MESSAGE,
  INVALID_USERNAME_MESSAGE: INVALID_USERNAME_MESSAGE,
  INVALID_PASSWORD_MESSAGE: INVALID_PASSWORD_MESSAGE,
  INVALID_EMAIL_ADDRESS_MESSAGE: INVALID_EMAIL_ADDRESS_MESSAGE,
  INVALID_CONFIRMATION_CODE_MESSAGE: INVALID_CONFIRMATION_CODE_MESSAGE,
  PASSWORDS_DO_NOT_MATCH_MESSAGE: PASSWORDS_DO_NOT_MATCH_MESSAGE,
  NOT_LOGGED_IN_MESSAGE: NOT_LOGGED_IN_MESSAGE,
  LOGGED_OUT_MESSAGE: LOGGED_OUT_MESSAGE,
  FAILED_LOGIN_MESSAGE: FAILED_LOGIN_MESSAGE,
  FAILED_REGISTER_MESSAGE: FAILED_REGISTER_MESSAGE,
  FAILED_RESET_PASSWORD_MESSAGE: FAILED_RESET_PASSWORD_MESSAGE,
  FAILED_CHANGE_PASSWORD_MESSAGE: FAILED_CHANGE_PASSWORD_MESSAGE,
  FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE: FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE,
  FAILED_RESEND_CONFIRMATION_CODE_MESSAGE: FAILED_RESEND_CONFIRMATION_CODE_MESSAGE,
  SUCCESSFUL_LOGIN_MESSAGE: SUCCESSFUL_LOGIN_MESSAGE,
  SUCCESSFUL_REGISTER_MESSAGE: SUCCESSFUL_REGISTER_MESSAGE,
  SUCCESSFUL_RESET_PASSWORD_MESSAGE: SUCCESSFUL_RESET_PASSWORD_MESSAGE,
  SUCCESSFUL_CHANGE_PASSWORD_MESSAGE: SUCCESSFUL_CHANGE_PASSWORD_MESSAGE,
  SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE: SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE,
  SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE: SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE
};

module.exports = messages;
