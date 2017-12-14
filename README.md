# Open-CLI

Occam's c**o**mmand line **p**ackag**e** manageme**n**t tool.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Versioning](#versioning)
- [Signatures](#signatures)
- [Resources](#resources)
- [Contact](#contact)

## Introduction

The `open` command line tool will provide similar functionality to [npm](https://www.npmjs.com/), but for Occam packages. 

A package would likely be defined P=(V,Z,H) where V is the version, Z is a zip file or some such containing the files and H≡H(Z) is the hash of Z.

## Installation

The tool would be installed globally via npm:

    npm install -g occam-open-cli
    
### Known issues

The installation of the `nodegit` package can cause a problem with `libssl`, the part of [OpenSSL](https://www.openssl.org/) that supports TLS. To fix it, on Ubuntu try...
 
    sudo apt install libssl-dev
    
...to install the latest version of `libssl`. On OSX, try...

    sudo xcode-select --install 
    
...yo update the Xcode CLT.

## Usage

This would be slightly different from npm in that the `open` command line tool would be executed from the parent directory of any project. In a `~/Mathematics/` directory, say, with all of the projects being contained in sub-directories of this parent directory. More like cloning with [Git](https://git-scm.com/), which is in fact what would be done by default if Git was installed.

An access token would be stored in a `.openrc` file in much the same way as npm makes use of a `.npmrc` file, the difference being that whilst npm stores the `.npmrc` file in the user's home directory by default, the `.openrc` file will be stored in the parent directory.

## Versioning

Versioning would be taken out of the user's hands to avoid problems. Version numbers would be bumped whenever packages are published according to the following rules:

* Let P be a package, namely a project that is published or about to be published. Packages are published incrementally, thus P<sub>0</sub>,P<sub>1</sub>,...P<sub>n</sub>.

* Let V(P) be the version of a package P and let V<sub>n</sub> be equivalent to V(P<sub>n</sub>). Versions are sequences (M,m,p) where M is the major version number, m the minor version number and p the patch number. 

* Let ∑(P) be the signature of a package, yet to be defined, and let ∑<sub>n</sub> be equivalent to ∑(P<sub>n</sub>).

* The versions V<sub>0</sub>, V<sub>1</sub>,... V<sub>n</sub> of any package P, where V<sub>k</sub>=(M,n,p), are defined by the following formal rules:
  - V<sub>0</sub> = (0,0,0)
  - if ∑<sub>k+1</sub>=∑<sub>k</sub> then V<sub>k+1</sub>=(M,n,p+1)
  - if ∑<sub>k+1</sub>⊃∑<sub>k</sub> then V<sub>k+1</sub>=(M,n+1,0)
  - if ∑<sub>k+1</sub>⊉∑<sub>k</sub> then V<sub>k+1</sub>=(M+1,0,0)
  
Intuitively, if the signature doesn't change the patch number is bumped, if the new signature encloses the old the minor version nummber is bumped, otherwise the major version number is bumped. This is in line with other versioning systems such as [semver](http://semver.org/). It is worth stressing again, however, that the version is not defined by the user and stored in a project meta file. It is calcuated according to the above formal rules whenever new packages are published, in order to avoid mistakes and deliberate oversights (the author in particular being often guilty of this).

### Ordering

Because of the above, patch numbers are irrelevant. Given V=(M,m,.) and V'=(M',m',.), a partial ordering ⩽ can be defined by the following rule:

* if V⩽V' then either M&lt;M' or M=M' and m⩽m'

### Signatures

Roughly speaking the signature of a package would be the union of the signatures of all the rules, axioms, definitions, theorems, etc that it contains. The signature of any of these elements would completely characterise it from outside. Inuitively two rules, say, if they shared identical premises and conclusion, regardless of the details of their proofs, would have the same signature. A precise definition is less than straightforward because grammars play a role in exactly how statements, which make up premises and conclusions, can be considered to be the same. Changing an element's label would also change its signature.

## Resources

* [Version SAT by Russ Cox](https://research.swtch.com/version-sat)
* [md5-file](https://github.com/roryrjb/md5-file)

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
