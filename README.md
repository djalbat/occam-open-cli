# Occam Open-CLI

[Occam](https://github.com/djalbat/occam)'s c**o**mmand line **p**ackag**e** manageme**n**t tool.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Introduction

The `open` command line tool provides similar functionality to [`npm`](https://www.npmjs.com/), but for[Occam packages. Published packages appear on the [Open Mathematics](https://openmathematics.org) website and can be utilised in Occam.

## Installation

If you are an end user, you can install `open` via `npm`. Instructions for doing so, together with other relevant information, can be found in the 'How to contribute' section on the front page of the aforementioned Open Mathematics website.

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-open-cli.git

...and then install the dependencies with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Usage

These are the commands and options:

```
  open [<command>] [<argument>]

Commands:

  [help]                                         Show this help
  
  [install] <package_name>                       Install a package

  initialise                                     Create a configuration file

  clone <package_name>                           Clone a package with Git

  publish <package_name>                         Publish a package

  deprecate <package_name>                       Deprecate a package

  create-account [<email_address>]               Create an account
   
  sign-in [<email_address_or_username>]          Sign in 

  sign-out                                       Sign out 

  set-options                                    Set options 

  reset-password [<email_address>]               Reset your password 

Options:

  --version|-v                                   Show the version

  --help|-h                                      Show this help
```

This is slightly different from `npm` in that `open` is usually executed from the parent directory of a project rather than from within the project sub-directory itself. Projects might reside in a `~/Mathematics/` directory, for example, in which case you should initialise `open` in there:

    open initialise

This will create a hidden `.openrc` file which you should never share. The reason is that if you log in to or register with the Open Mathematics site, your access token will be stored in this hidden file.

If you wish to publish the `induction` package, say, assuming that you have a sub-directory called `induction` for that package, run the following:

    open publish induction

Actually you can in fact get away with publishing from within projects' sub-directories by running `open publish` in them, in which cases `open` will go up one directory in order to find the `.openrc` file and figure out the package name for itself.

Bear in mind that Occam does not as yet directly support packages. Therefore for now it is best to clone them, which you can again do with `open`. For example:

    open clone natural-numbers

In these cases `open` will recover the underlying GitHub repository from the package's meta-data and clone the repository for you. If you just wanted the bare package and not the repository, the following would suffice:

    open natural-numbers

Both Occam and the Open Mathematics site are works in progress, as indeed is `open`. The remainder of this readme file gives some of the current thinking on versioning and so forth that has yet to be implemented.

## Building

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
