'use strict';

class Version {
  constructor(number) {
    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  bumpPatchNumber() {
    this.number += 1;  ///
  }

  asString() {
    const majorNumber = 0,  ///
          minorNumber = 0,  ///
          patchNumber = this.number,  ///
          string = `${majorNumber}.${minorNumber}.${patchNumber}`;

    return string;
  }

  static fromVersionNumber(versionNumber) {
    const number = (versionNumber !== null) ?
                      versionNumber :
                        0,
          version = new Version(number);

    return version;
  }
}

module.exports = Version;
