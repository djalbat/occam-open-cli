"use strict";

function helpAction() {
  console.log(`Usage: 
  
  open [<command>] [<argument>]

Commands:

  help                                           Show this help
  
  version                                        Show the version

  [install] <package_name>                       Install a package

  initialise                                     Create a configuration file

  set-options                                    Set options 

  clone <package_name>                           Clone a package with Git

  publish <package_name>                         Publish a package

  deprecate <package_name>                       Deprecate a package

  create-account [<email_address>]               Create an account
   
  sign-in [<email_address_or_username>]          Sign in 

  sign-out                                       Sign out 

  reset-password [<email_address>]               Reset password 

  set-shell-commands                             Set shell commands 

Options:

  --help|-h                                      Show this help

  --version|-v                                   Show the version

  --quietly|-q                                   Run with almost no console logging

  --log-level|-l                                 Set the log level when publishing
  
  --yes|-y                                       Initially answer yes to prompts

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/occam-open-cli
`);

  process.exit();
}

module.exports = helpAction;
