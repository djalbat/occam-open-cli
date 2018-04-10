'use strict';

function help() {
    console.log(`Usage: 
  
  open [--help|-h]                 Show this help
  
  open --version|-v                Show the version

  open <package_name>              Install a package

  open <command> [<argument>]

Commmands:

  install <package_name>           Install a package

  clone <package_name>             Clone a package with Git

  remove <package_name>            Remove a package

  publish <package_name>           Publish a package

  register [<username>]            Register
   
  login [<username>]               Log in 

  logout                           Log out 
 
  resend [<email_address>]         Resend a confirmation code

  confirm [<email_address>]        Confirm your email address

  reset-password [<username>]      Reset your password 

  change-password [<username>]     Change your password 
`);
}

module.exports = help;
