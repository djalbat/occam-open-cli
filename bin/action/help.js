'use strict';

function help() {
  console.log(`Usage: 
  
  open [help]                                    Show this help
  
  open [install] <package_name>                  Install a package

  open <command> [<argument>]

Commands:

  initialise                                     Create a configuration file

  clone <package_name>                           Clone a package with Git

  remove <package_name>                          Remove a package

  publish <package_name>                         Publish a package

  deprecate <package_name>                       Deprecate a package

  register [<username>]                          Register
   
  login [<username>]                             Log in 

  logout                                         Log out 

  set-options                                    Set options 

  reset-password [<username>]                    Reset your password 

  change-password [<username>]                   Change your password 
 
  change-email-address [<username>]              Change your email address
 
  confirm-email-address [<email_address>]        Confirm your email address

  resend-confirmation-code [<email_address>]     Resend a confirmation code
  
Options:

  --version|-v                                   Show the version

  --help|-h                                      Show this help
  

Further information:

Please see the readme file on GitHub:

  https://github.com/jecs-imperial/occam-open-cli
`);
}

module.exports = help;
