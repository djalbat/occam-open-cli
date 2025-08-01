"use strict";

function helpAction() {
  console.log(`Usage: 
  
  open [<options>] [<command>] [<argument>]

Commands:

  help                                            Show this help
  
  version                                         Show the version

  [install] <package_name>                        Install a package

  initialise                                      Create a configuration file

  set-options                                     Set options 

  clone <repository_name>                         Clone a repository with Git

  publish <package_name>                          Publish a package

  withdraw <package_name>                         Withdraw a package

  create-account [<email_address>]                Create an account
   
  sign-in [<email_address_or_username>]           Sign in 

  sign-out                                        Sign out 

  reset-password [<email_address>]                Reset password 

  set-shell-commands                              Set shell commands 

Options:

  --help|-h                                       Show this help

  --version|-v                                    Show the version

  --quietly|-q                                    Run with almost no console logging

  --log-level|-l                                  Set the log level when publishing
  
  --yes|-y                                        Automatically answer yes to affiermation prompts

  --tail|-t                                       Sets the size of the tail of the log messages when publishing. The default is ten 

  --follow|-f                                     Show all of the log messages when publishing. The default is false

  --headless|-x                                   Headless mode. Clone or open all dependencies bar the repository or package itself
  
  --dependencies|-a                               Include dependencies when cloning repositories or opening packages

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/occam-open-cli
`);
}

module.exports = helpAction;
