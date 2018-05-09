'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { second, third, fourth } = arrayUtilities;

class Version {
  constructor(majorNumber, minorNumber, patchNumber) {
    this.majorNumber = majorNumber;
    this.minorNumber = minorNumber;
    this.patchNumber = patchNumber;
  }

  getMajorNumber() {
    return this.majorNumber;
  }

  getMinorNumber() {
    return this.minorNumber;
  }

  getPatchNumber() {
    return this.patchNumber;
  }

  bumpPatchNumber() {
    this.patchNumber += 1;  ///
  }

  toString() {
    const string = `${this.majorNumber}.${this.minorNumber}.${this.patchNumber}`;

    return string;
  }

  static asNumber() {
    const number = this.patchNumber * 1e0 + this.minorNumber * 1e6 + this.majorNumber * 1e12; ///

    return number;
  }

  static fromString(string) {
    const matches = string.match(/^(\d+)\.(\d+)\.(\d+)$/),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          majorNumber = secondMatch,  ///
          minorNumber = thirdMatch, ///
          patchNumber = fourthMatch,  ///
          version = new Version(majorNumber, minorNumber, patchNumber);

    return version;
  }

  static fromVersionNumber(versionNumber) {
    const number = versionNumber, ///
          majorNumber = majorNumberFromNumber(number),
          minorNumber = minorNumberFromNumber(number),
          patchNumber = patchNumberFromNumber(number),
          version = new Version(majorNumber, minorNumber, patchNumber);

    return version;
  }
}

module.exports = Version;

function majorNumberFromNumber(number) {
  const majorNumber = (number !== null) ?
                        Math.floor(number / 1e12) :
                          0;  ///

  return majorNumber;
}

function minorNumberFromNumber(number) {
  const minorNumber = (number !== null) ?
                        Math.floor(number / 1e6) :
                          0;  ///

  return minorNumber;
}

function patchNumberFromNumber(number) {
  const patchNumber = (number !== null) ?
                        Math.floor(number / 1e0) :
                          0;  ///

  return patchNumber;
}
