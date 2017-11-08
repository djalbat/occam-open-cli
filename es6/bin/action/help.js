'use strict';

function help() {
    console.log(`
Open-CLI

Occam's command line package management tool.

usage: open --help|-h        Show this help
       
       open --version|-v     Show the version

       open <package_name>   Install the given package

       open <command> [<args>]

Commmands

   help      Show this help

   version   Show the version
`);
};

module.exports = help;