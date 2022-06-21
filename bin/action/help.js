"use strict";

function help() {
  console.log(`Usage: 
  
  open [<command>] [<argument>]

Commands:

  [help]                                         Show this help
  
  [install] <package_name>                       Install a package

  initialise                                     Create a configuration file

  clone <package_name>                           Clone a package with Git

  remove <package_name>                          Remove a package

  publish <package_name>                         Publish a package

  deprecate <package_name>                       Deprecate a package

  create-account [<email_address>]               Create an account
   
  sign-in [<email_address_or_username>]          Sign in 

  sign-out                                       Sign out 

  set-options                                    Set options 

  reset-password [<username>]                    Reset your password 

Options:

  --version|-v                                   Show the version

  --help|-h                                      Show this help
  

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/occam-open-cli
`);
}

module.exports = help;
