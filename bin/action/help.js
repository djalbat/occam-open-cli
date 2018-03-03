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

  install <package_name>           Install a package

  remove <package_name>            Remove a package

  register [<username>]            Register
   
  confirm [<email_address>]        Confirm your email address
 
  login [<username>]               Login 

  logout                           Logout 

  resend                           Resend a confirmation code

  change-password [<username>]     Change your password 

  reset-password [<username>]      Reset your password 
`);
}

module.exports = help;
