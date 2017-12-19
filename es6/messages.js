'use strict';

const invalidUsernameMessage = 'Usernames must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.',
      invalidPasswordMessage = 'Passwords must consist of at least eight letters, numbers or common punctuation symbols.',
      invalidEmailAddressMessage = 'The email address does not appear to be a valid one.',
      invalidConfirmationCodeMessage = 'Confirmation codes consist of eight alphabetical characters.',
      passwordsDoNoMatchMessage = 'The passwords do not match.';

const messages = {
  invalidUsernameMessage: invalidUsernameMessage,
  invalidPasswordMessage: invalidPasswordMessage,
  invalidEmailAddressMessage: invalidEmailAddressMessage,
  invalidConfirmationCodeMessage: invalidConfirmationCodeMessage,
  passwordsDoNoMatchMessage: passwordsDoNoMatchMessage
};

module.exports = messages;
