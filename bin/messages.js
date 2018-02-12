'use strict';

const SERVER_FAILED_TO_RESPOND_MESSSAGE = 'The server failed to respond in a timely fasion. If this problem persists, please be kind enough to report it.',
      INVALID_USERNAME_MESSAGE = 'Usernames must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.',
      INVALID_PASSWORD_MESSAGE = 'Passwords must consist of at least eight letters, numbers or common punctuation symbols.',
      INVALID_EMAIL_ADDRESS_MESSAGE = 'The email address does not appear to be a valid one.',
      INVALID_CONFIRMATION_CODE_MESSAGE = 'Confirmation codes consist of eight alphabetical characters.',
      PASSWORDS_DO_NOT_MATCH_MESSAGE = 'The passwords do not match.',
      FAILED_TO_LOGIN_MESSAGE = 'Failed to login.',
      FAILED_TO_REGISTER_MESSAGE = 'Failed to register.'

const messages = {
  SERVER_FAILED_TO_RESPOND_MESSSAGE: SERVER_FAILED_TO_RESPOND_MESSSAGE, 
  INVALID_USERNAME_MESSAGE: INVALID_USERNAME_MESSAGE,
  INVALID_PASSWORD_MESSAGE: INVALID_PASSWORD_MESSAGE,
  INVALID_EMAIL_ADDRESS_MESSAGE: INVALID_EMAIL_ADDRESS_MESSAGE,
  INVALID_CONFIRMATION_CODE_MESSAGE: INVALID_CONFIRMATION_CODE_MESSAGE,
  PASSWORDS_DO_NOT_MATCH_MESSAGE: PASSWORDS_DO_NOT_MATCH_MESSAGE,
  FAILED_TO_LOGIN_MESSAGE: FAILED_TO_LOGIN_MESSAGE,
  FAILED_TO_REGISTER_MESSAGE: FAILED_TO_REGISTER_MESSAGE
};

module.exports = messages;
