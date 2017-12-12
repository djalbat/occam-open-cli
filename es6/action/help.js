'use strict';

function help() {
    console.log(`usage: 
  
  open [--help|-h]            Show this help
  
  open --version|-v           Show the version

  open <package_name>         Install the given package

  open <command> [<args>]

commmands:

  help                        Show this help

  version                     Show the version

  install <package_name>      Install the given package

  register [<username>]       Register so that you can publish packages. 

Please note for the moment that installing effectively means just cloning with Git.`);
}

module.exports = help;