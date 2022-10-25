"use strict";

import { arrayUtilities } from "necessary";

const { second } = arrayUtilities;

export default class ShortenedVersion {
  constructor(majorNumber, minorNumber) {
    this.majorNumber = majorNumber;
    this.minorNumber = minorNumber;
  }

  getMajorNumber() {
    return this.majorNumber;
  }

  getMinorNumber() {
    return this.minorNumber;
  }

  toString() {
    const string = `${this.majorNumber}.${this.minorNumber}`;

    return string;
  }

  asNumber() {
    const number = this.majorNumber * 1e12 + this.minorNumber * 1e6; ///

    return number;
  }

  toJSON() {
    const majorNumber = this.majorNumber,
          minorNumber = this.minorNumber,
          json = {
            majorNumber,
            minorNumber
          };

    return json;
  }

  static fromJSON(json) {
    const { majorNumber, minorNumber } = json,
          shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);

    return shortenedVersion;
  }

  static fromString(string) {
    const majorNumber = majorNumberFromString(string),
          minorNumber = minorNumberFromString(string),
          shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);

    return shortenedVersion;
  }

  static fromVersionNumber(versionNumber) {
    const number = versionNumber, ///
          majorNumber = majorNumberFromNumber(number),
          minorNumber = minorNumberFromNumber(number),
          shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);

    return shortenedVersion;
  }
}

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

function majorNumberFromString(string) {
  let majorNumber = 0;

  if (string) {
    const matches = string.match(/^(\d+)\.\d+$/),
          secondMatch = second(matches);

    majorNumber = secondMatch;  ///
  }

  return majorNumber;
}

function minorNumberFromString(string) {
  let minorNumber = 0;

  if (string) {
    const matches = string.match(/^\d+\.(\d+)$/),
          secondMatch = second(matches);

    minorNumber = secondMatch;  ///
  }

  return minorNumber;
}
