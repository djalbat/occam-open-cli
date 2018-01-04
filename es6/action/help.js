'use strict';

function help() {
    console.log(`Usage: 
  
  open [--help|-h]                 Show this help
  
  open --version|-v                Show the version

  open <package_name>              Install the given package

  open <command> [<argument>]

Commmands:

  help                             Show this help

  version                          Show the version

  install <package_name>           Install the given package

  remove <package_name>            Remove the given package

  register [<username>]            Register
   
  confirm [<email_address>]        Confirm your email address
 
  login [<username>]               Login 

  logout                           Logout 

  change-password [<username>]     Change your password 

  recover-password [<username>]    Recover your password 
`);
}

module.exports = help;
