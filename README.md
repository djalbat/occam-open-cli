# Open-CLI

[Occam](https://github.com/jecs-imperial/occam)'s c**o**mmand line **p**ackag**e** manageme**n**t tool.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Versioning](#versioning)
- [Signatures](#signatures)
- [Resources](#resources)
- [Contact](#contact)

## Introduction

The `open` command line tool provides similar functionality to [npm](https://www.npmjs.com/), but for [Occam](http://djalbat.com/occam) packages. A package is defined as P=(V,Z) where V is the version and Z is a compressed file containing the files.

## Installation

The tool is installed globally via npm:

    npm install --global occam-open-cli

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Easy.git

## Usage

This is slightly different from npm in that `open` is executed from the parent directory of any project rather than from within the project directory itself. It could reside in a `~/Mathematics/` directory, for example, with all of the projects being contained in sub-directories. It creates and updates its own hidden `.openrc` file, which it uses to store an access token when the user is logged in.

## Versioning

Versioning is taken out of the user's hands in order to avoid problems. Version numbers are bumped whenever packages are published, ideally according to the following rules:

* Let P be a package, namely a project that is published or about to be published. Packages are published incrementally, thus P<sub>0</sub>,P<sub>1</sub>,...P<sub>n</sub>.

* Let V(P) be the version of a package P and let V<sub>n</sub> be equivalent to V(P<sub>n</sub>). Versions are sequences (M,m,p) where M is the major version number, m the minor version number and p the patch number. 

* Let ∑(P) be the signature of a package, yet to be defined, and let ∑<sub>n</sub> be equivalent to ∑(P<sub>n</sub>).

* The versions V<sub>0</sub>, V<sub>1</sub>,... V<sub>n</sub> of any package P, where V<sub>k</sub>=(M,n,p), are defined by the following formal rules:
  - V<sub>0</sub> = (0,0,0)
  - if ∑<sub>k+1</sub>=∑<sub>k</sub> then V<sub>k+1</sub>=(M,n,p+1)
  - if ∑<sub>k+1</sub>⊃∑<sub>k</sub> then V<sub>k+1</sub>=(M,n+1,0)
  - if ∑<sub>k+1</sub>⊉∑<sub>k</sub> then V<sub>k+1</sub>=(M+1,0,0)
  
Intuitively, if the signature doesn't change, the patch number is bumped; if the new signature encloses the old, the minor version number is bumped; otherwise the major version number is bumped. This is in line with other versioning systems such as [semver](http://semver.org/). It is again worth stressing that the version is not defined by the user nor stored in a project meta file. It will be calculated according to the above rules whenever new packages are published, in order to avoid mistakes and deliberate oversights (the author in particular being often guilty of this).

Given V=(M,m,.) and V'=(M',m',.), a partial ordering ⩽ can be defined by the following rule:

* if V⩽V' then either M&lt;M' or M=M' and m⩽m'

Note that for the moment there is no concept of a signature, see below, thus only patch numbers are ever bumped with each new release.

### Signatures

Roughly speaking, the signature of a package would be the union of the signatures of all the rules, axioms, definitions, theorems, etc that it contains. The signature of any of these elements would completely characterise it from the outside. If two rules shared identical premises and conclusion, for example, regardless of the details of their proofs, they would have the same signature. A precise definition is less than straightforward because grammars play a role in exactly how statements, which make up premises and conclusions, can be considered to be the same. Changing an element's label would also change its signature.

## Resources

* [Version SAT by Russ Cox](https://research.swtch.com/version-sat)

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
