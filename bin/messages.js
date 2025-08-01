"use strict";

const NO_ARGUMENT_GIVEN_MESSAGE = "No argument has been given.",
      COMMAND_NOT_RECOGNISED_MESSAGE = "The command is not recognised.",
      PASSWORDS_DO_NOT_MATCH_MESSAGE = "The passwords do not match.",
      SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE = "The server did not respond in a timely or intelligible fashion. If this problem persists then please be kind enough to report it.",
      CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE = "The action cannot be performed because the configuration file is missing. Run 'open initialise' to create one.",
      SIGN_OUT_MESSAGE = "You have been signed out.",
      INVALID_ANSWER_MESSAGE = "You must answer (y)es or (n)o.",
      INVALID_USERNAME_MESSAGE = "Usernames must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.",
      INVALID_PASSWORD_MESSAGE = "Passwords must consist of at least eight letters, numbers or common punctuation symbols.",
      INVALID_AFFIRMATION_MESSAGE = "You must answer (y)es or (n)o.",
      INVALID_RELEASE_NAME_MESSAGE = "Package names must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.",
      INVALID_EMAIL_ADDRESS_MESSAGE = "The email address does not appear to be a valid one.",
      INVALID_REPOSITORY_NAME_MESSAGE = "Repository names must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.",
      INVALID_GITHUB_HOST_NAME_MESSAGE = "The GitHub host name can be any number of alphabetical, numeric, dash or period characters, or can be left blank.",
      INVALID_EMAIL_ADDRESS_OR_USERNAME_MESSAGE = "The email address or username does not appear to be a valid one.",
      FAILED_OPEN_MESSAGE = "Failed to open the package.",
      FAILED_CLONE_MESSAGE = "Failed to clone the repository.",
      FAILED_PUBLISH_MESSAGE = "Failed to publish the package.",
      FAILED_WITHDRAW_MESSAGE = "Failed to withdraw the package.",
      FAILED_INITIALISE_MESSAGE = "Failed to create a configuration file because one is already present.",
      FAILED_SET_OPTIONS_MESSAGE = "Failed to set the options.",
      FAILED_PROJECT_LOAD_MESSAGE = "Failed to load the project. Likely it is missing or perhaps it is already a package.",
      FAILED_SET_SHELL_COMMANDS_MESSAGE = "Failed to set the shell commands.",
      SUCCESSFUL_OPEN_MESSAGE = "The package has been opened successfully.",
      SUCCESSFUL_CLONE_MESSAGE = "The repository has been cloned successfully.",
      SUCCESSFUL_PUBLISH_MESSAGE = "The package has been published successfully.",
      SUCCESSFUL_WITHDRAW_MESSAGE = "The package has been withdrawn successfully.",
      SUCCESSFUL_INITIALISE_MESSAGE = "The configuration file has been created successfully.",
      SUCCESSFUL_SET_OPTIONS_MESSAGE = "The options have been set successfully.",
      SUCCESSFUL_SET_SHELL_COMMANDS_MESSAGE = "The shell commands have been set successfully.";

module.exports = {
  NO_ARGUMENT_GIVEN_MESSAGE,
  COMMAND_NOT_RECOGNISED_MESSAGE,
  PASSWORDS_DO_NOT_MATCH_MESSAGE,
  SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE,
  CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE,
  SIGN_OUT_MESSAGE,
  INVALID_ANSWER_MESSAGE,
  INVALID_USERNAME_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  INVALID_AFFIRMATION_MESSAGE,
  INVALID_RELEASE_NAME_MESSAGE,
  INVALID_EMAIL_ADDRESS_MESSAGE,
  INVALID_REPOSITORY_NAME_MESSAGE,
  INVALID_GITHUB_HOST_NAME_MESSAGE,
  INVALID_EMAIL_ADDRESS_OR_USERNAME_MESSAGE,
  FAILED_OPEN_MESSAGE,
  FAILED_CLONE_MESSAGE,
  FAILED_PUBLISH_MESSAGE,
  FAILED_WITHDRAW_MESSAGE,
  FAILED_INITIALISE_MESSAGE,
  FAILED_SET_OPTIONS_MESSAGE,
  FAILED_PROJECT_LOAD_MESSAGE,
  FAILED_SET_SHELL_COMMANDS_MESSAGE,
  SUCCESSFUL_OPEN_MESSAGE,
  SUCCESSFUL_CLONE_MESSAGE,
  SUCCESSFUL_PUBLISH_MESSAGE,
  SUCCESSFUL_WITHDRAW_MESSAGE,
  SUCCESSFUL_INITIALISE_MESSAGE,
  SUCCESSFUL_SET_OPTIONS_MESSAGE,
  SUCCESSFUL_SET_SHELL_COMMANDS_MESSAGE
};
