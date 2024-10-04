# Occam Open-CLI

[Occam](https://github.com/djalbat/occam)'s c**o**mmand line **p**ackag**e** manageme**n**t tool.

*This readme file is mostly for developers. For instructions tailored to end users, see the following:*

https://openmathematics.org/how-to-contribute

### Contents

- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [License](#license)
- [Contact](#contact)

## Installation

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-open-cli.git

...and then install the dependencies with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Usage

These are the commands and options:

```
  open [<options>] [<command>] [<argument>]

Commands:

  help                                            Show this help
  
  version                                         Show the version

  [install] <package_name>                        Install a package

  initialise                                      Create a configuration file

  set-options                                     Set options 

  clone <package_name>                            Clone a package with Git

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
  
  --yes|-y                                        Initially answer yes to prompts

  --tail|-t                                       Sets the size of the tail of the log messages when publishing. The default is ten. 

  --follow|-f                                     Show all of the log messages when publishing. The default is false.
```

This is slightly different from `npm` in that `open` is usually executed from the parent directory of a project rather than from within the project sub-directory itself.

## Building

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## License

Copyright 2016-2023 James Smith

Licensed under the Apache License, Version 2.0 and Anti-996 License (collectively the "License"); you may not use this software except in compliance with the License and subject to the terms laid out after this notice. A copy of the License can be found at the following URL:

https://github.com/djalbat/occam-verify-cli/blob/master/license.txt

Unless required by applicable law or agreed to in writing, software distributed under the Licenses is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the Licenses for the specific language governing permissions and limitations under the Licenses.

### Terms

* This is **not** free software.
* It can be used *only for personal use and if not for profit*, otherwise you must contact the author.
* You cannot re-use the source code for any reason, even if only for personal use and if not for profit; or even if you have paid to use it otherwise.

## Contact

* james.smith@djalbat.com

