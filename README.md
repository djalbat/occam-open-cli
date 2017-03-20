# Open-CLI

Occam's c**o**mmand line **p**ackag**e** manageme**n**t tool.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Versioning](#versioning)
- [Signatures](#signatures)
- [Contact](#contact)

## Introduction

The `open` command line tool will leverage [Git](https://git-scm.com/) to provide similar functionality to [npm](https://www.npmjs.com/), but for Occam projects.

Although a remote service would be needed, there is no intention to hold source code remotely. This is what is meant by leveraging Git. Package names would mirror repository names although the treatment of package names will be case insensitive.

## Installation

The tool would be installed globally via npm:

    npm install --global occam-open-cli

## Usage

The following commands are envisaged:

    open [help] [<command>]

    open [install] <package_name>[@version]

    open update <package_name>[@version] | [everything]

    open publish <package_name> | [everything]

    open register <user_name> [<email address>]

    open login <user_name>

    open logout

    open verify [password]

    open recover [password]

The usage is slightly different from npm in that the `open` command line tool would be executed from the parent directory of any project. In a `~/Mathematics/` directory, say, with all of the projects being contained in sub-directories of this parent directory. For this reason the `package_name` must be identical to the Git repository name. Clashes are avoided by package names being unique.

An access token would be stored in a `.openrc` file in much the same way as npm makes use of a `.npmrc` file, the difference being that whilst npm stores the `.npmrc` file in the user's home directory by default, Open will store it in the parent directory.

## Versioning

Versioning would be taken out of the user's hands to avoid problems. Version numbers would be bumped whenever packages are published according to the rules that follow.

* Let P be a package, namely a project that is published or about to be published. Packages are published incrememtally, thus P<sub>0</sub>,P<sub>1</sub>,...P<sub>n</sub>. 

* Let V(P) be the version of a package P and let V<sub>n</sub> be equivalent to V(P<sub>n</sub>). Versions are sequences (M,m,p) where M is the major version number, m the minor version number and p the patch number. 

* Let ∑(P) be the signature of a package, yet to be defined, and let ∑<sub>n</sub> be equivalent to ∑(P<sub>n</sub>).

* The versions V<sub>0</sub>, V<sub>1</sub>,... V<sub>n</sub> of any package P, where V<sub>k</sub>=(M,n,p), are defined by the following formal rules:
  - V<sub>0</sub> = (0,0,0)
  - if ∑<sub>k+1</sub>=∑<sub>k</sub> then V<sub>k+1</sub>=(M,n,p+1)
  - if ∑<sub>k+1</sub>⊃∑<sub>k</sub> then V<sub>k+1</sub>=(M,n+1,0)
  - if ∑<sub>k+1</sub>⊉∑<sub>k</sub> then V<sub>k+1</sub>=(M+1,0,0)
  
Intuitively, if the signature doesn't change the patch number is bumped, if the new signature encloses the old the minor version nummber is bumped, otherwise the major version number is bumped. This is in line with other versioning systems such as [semver](http://semver.org/). It is worth stressing again, however, that the version is not defined by the user and stored in a project meta file. It is calcuated accorinding to the above formal rules whenever new packages are published, in order to avoid mistakes and deliberate oversights, the author in particular being often guilty of this.

### Signatures

Roughly speaking the signature of a package would be the union of the signatures of all the rules, axioms, definitions, lemma, theorems, etc in the package. The signature of any of these elements would completely characterise it from outside. Inuitively two rules, say, if they shared identical premises and conclusion, regardless of the details of their proofs, would have the same signature. The definition is less than straightforward because grammars play a role in exactly how statements, which make up premises and conclusions, can be considered to be the same. Also the elements would be labelled and it is unclear whether these labels should have a bearing on sameness.
## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
