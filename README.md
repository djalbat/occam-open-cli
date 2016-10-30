# Open

Occam's c**o**mmand line **p**ackag**e** manageme**n**t tool.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Introduction

The `open` command line tool will leverage [Git](https://git-scm.com/) to provide similar functionality to [npm](https://www.npmjs.com/), but for Occam projects.

Although a remote service would be needed in order to hold associations of package names with Git repositories, as well as manage ownership of these associations, there is no intention to hold source code remotely. This is what is meant by leveraging Git.

## Installation

The tool would be installed globally via npm:

    npm install --global occam-open-cli

## Usage

The following commands are envisaged:

    open

    open help [<command>]

    open install <package_name>[@version]

    open update <package_name>[@version]

    open publish <directory_name> [--version major|minor]

    open register <user_name>

    open login <user_name>

    open logout

    open verify

    open recover

The usage is slightly different from npm in that the `open` command line tool would be executed from the parent directory of any project. In a `~/Mathematics/` directory, say, with all of the projects being contained in sub-directories of this parent directory. This is why the `publish` command takes a `directory_name` argument. Open will look in the `package.json` file within the directory, namely the sub-directory of the directory in which it is executed, to find the package name.

An access token would be stored in a `.openrc` file in much the same way as npm makes use of a `.npmrc` file, the difference being that whilst npm stores the `.npmrc` file in the user's home directory by default, Open will store it in the parent directory.

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
