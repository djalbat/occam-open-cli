"use strict";

import { DIRECTORY_TYPE } from "./types";

export default class Directory {
  constructor(path) {
    this.path = path;
  }

  getPath() {
    return this.path;
  }

  isFile() {
    const file = false;

    return file;
  }

  isDirectory() {
    const directory = true;

    return directory;
  }

  toJSON() {
    const { type } = Directory,
          path = this.path,
          json = {
            type,
            path
          };

    return json;
  }

  static type = DIRECTORY_TYPE;

  static fromJSON(json) {
    let directory = null;

    if (json !== null) {
      const { type } = json;

      if (type === DIRECTORY_TYPE) {
        const { path } = json;

        directory = new Directory(path);
      }
    }

    return directory;
  }
}
