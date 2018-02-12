'use strict';

const SERVER_FAILED_TO_RESPOND_ERROR_MESSSAGE = 'The server failed to respond in a timely fasion. If this problem persists, please be kind enough to report it.',
      SERVER_ERROR_MESSAGE = 'There was an error on the server. If the problem persists, please be kind enough to report it (including the date and time).',
      INVALID_USERNAME_MESSAGE = 'Usernames must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.',
      INVALID_PASSWORD_MESSAGE = 'Passwords must consist of at least eight letters, numbers or common punctuation symbols.',
      INVALID_EMAIL_ADDRESS_MESSAGE = 'The email address does not appear to be a valid one.',
      INVALID_CONFIRMATION_CODE_MESSAGE = 'Confirmation codes consist of eight alphabetical characters.',
      PASSWORDS_DO_NOT_MATCH_MESSAGE = 'The passwords do not match.',
      FAILED_LOGIN_MESSAGE = 'Failed to login.',
      FAILED_REGISTER_MESSAGE = 'Failed to register.',
      SUCCESSFUL_LOGIN_MESSAGE = 'You have logged in successfully.',
      SUCCESSFUL_REGISTER_MESSAGE = 'You have been registered successfully.'

const messages = {
  SERVER_FAILED_TO_RESPOND_ERROR_MESSSAGE: SERVER_FAILED_TO_RESPOND_ERROR_MESSSAGE, 
  SERVER_ERROR_MESSAGE: SERVER_ERROR_MESSAGE,
  INVALID_USERNAME_MESSAGE: INVALID_USERNAME_MESSAGE,
  INVALID_PASSWORD_MESSAGE: INVALID_PASSWORD_MESSAGE,
  INVALID_EMAIL_ADDRESS_MESSAGE: INVALID_EMAIL_ADDRESS_MESSAGE,
  INVALID_CONFIRMATION_CODE_MESSAGE: INVALID_CONFIRMATION_CODE_MESSAGE,
  PASSWORDS_DO_NOT_MATCH_MESSAGE: PASSWORDS_DO_NOT_MATCH_MESSAGE,
  FAILED_LOGIN_MESSAGE: FAILED_LOGIN_MESSAGE,
  FAILED_REGISTER_MESSAGE: FAILED_REGISTER_MESSAGE,
  SUCCESSFUL_LOGIN_MESSAGE: SUCCESSFUL_LOGIN_MESSAGE,
  SUCCESSFUL_REGISTER_MESSAGE: SUCCESSFUL_REGISTER_MESSAGE
};

module.exports = messages;
