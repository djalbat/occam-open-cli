"use strict";

const PASSWORDS_DO_NOT_MATCH_MESSAGE = "The passwords do not match.",
      SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE = "The server did not respond in a timely or intelligible fashion. If this problem persists then please be kind enough to report it.",
      CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE = "The action cannot be performed because the configuration file is missing. Run 'open initialise' to create one.",
      OPEN_MESSAGE = "The open functionality is not implemented yet.",
      SIGN_OUT_MESSAGE = "You have been signed out.",
      INVALID_USERNAME_MESSAGE = "Usernames must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.",
      INVALID_PASSWORD_MESSAGE = "Passwords must consist of at least eight letters, numbers or common punctuation symbols.",
      INVALID_AFFIRMATION_MESSAGE = "You must answer (y)es or (n)o.",
      INVALID_RELEASE_NAME_MESSAGE = "Package names must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.",
      INVALID_EMAIL_ADDRESS_MESSAGE = "The email address does not appear to be a valid one.",
      INVALID_GITHUB_HOST_NAME_MESSAGE = "The GitHub host name can be any number of alphabetical, numeric, dash or period characters, or can be left blank.",
      INVALID_EMAIL_ADDRESS_OR_USERNAME_MESSAGE = "The email address or username does not appear to be a valid one.",
      FAILED_CLONE_MESSAGE = "Failed to clone the package.",
      FAILED_PUBLISH_MESSAGE = "Failed to publish the package.",
      FAILED_DEPRECATE_MESSAGE = "Failed to deprecate the package.",
      FAILED_INITIALISE_MESSAGE = "Failed to create a configuration file because one is already present.",
      FAILED_SET_OPTIONS_MESSAGE = "Failed to set the options.",
      SUCCESSFUL_CLONE_MESSAGE = "The package has been cloned successfully.",
      SUCCESSFUL_PUBLISH_MESSAGE = "The package has been published successfully.",
      SUCCESSFUL_DEPRECATE_MESSAGE = "The package has been deprecated successfully.",
      SUCCESSFUL_INITIALISE_MESSAGE = "The configuration file has been created successfully.",
      SUCCESSFUL_SET_OPTIONS_MESSAGE = "The options have been set successfully.";

module.exports = {
  PASSWORDS_DO_NOT_MATCH_MESSAGE,
  SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE,
  CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE,
  OPEN_MESSAGE,
  SIGN_OUT_MESSAGE,
  INVALID_USERNAME_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  INVALID_AFFIRMATION_MESSAGE,
  INVALID_RELEASE_NAME_MESSAGE,
  INVALID_EMAIL_ADDRESS_MESSAGE,
  INVALID_GITHUB_HOST_NAME_MESSAGE,
  INVALID_EMAIL_ADDRESS_OR_USERNAME_MESSAGE,
  FAILED_CLONE_MESSAGE,
  FAILED_PUBLISH_MESSAGE,
  FAILED_DEPRECATE_MESSAGE,
  FAILED_INITIALISE_MESSAGE,
  FAILED_SET_OPTIONS_MESSAGE,
  SUCCESSFUL_CLONE_MESSAGE,
  SUCCESSFUL_PUBLISH_MESSAGE,
  SUCCESSFUL_DEPRECATE_MESSAGE,
  SUCCESSFUL_INITIALISE_MESSAGE,
  SUCCESSFUL_SET_OPTIONS_MESSAGE
};
