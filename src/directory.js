"use strict";

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
            "type": type,
            "path": path
          };

    return json;
  }

  static type = "Directory";

  static fromJSON(json) {
    let directory = null;

    if (json !== null) {
      const { type } = Directory,
            typeJSON = json["type"];

      if (typeJSON === type) {  ///
        const pathJSON = json["path"],
              path = pathJSON;  ///

        directory = new Directory(path);
      }
    }

    return directory;
  }
}
