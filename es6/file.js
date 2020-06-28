"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import mkdirp from "mkdirp";

const { readFile, writeFile, isEntryFile } = fileSystemUtilities,
      { concatenatePaths, topmostDirectoryPathFromPath } = pathUtilities;

export default class File {
  constructor(path, content) {
    this.path = path;
    this.content = content;
  }

  getPath() {
    return this.path;
  }

  getContent() {
    return this.content;
  }

  isFile() {
    const file = true;

    return file;
  }

  isDirectory() {
    const directory = false;

    return directory;
  }

  setPath(path) {
    this.path = path;
  }

  setContent(content) {
    this.content = content;
  }

  save(projectsDirectoryPath) {
    const absolutePath = concatenatePaths(projectsDirectoryPath, this.path),  ///
          topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);

    mkdirp.sync(topmostAbsoluteDirectoryPath);

    writeFile(absolutePath, this.content);
  }

  toJSON() {
    const { type } = File,
          path = this.path,
          content = this.content,
          json = {
            "type": type,
            "path": path,
            "content": content
          };

    return json;
  }

  static type = "File";

  static fromJSON(json) {
    let file = null;

    if (json !== null) {
      const { type } = File,
            typeJSON = json["type"];

      if (typeJSON === type) {  ///
        const pathJSON = json["path"],
              contentJSON = json["content"],
              path = pathJSON;  ///

        let content = contentJSON;  ///

        content = convertContentTabsToWhitespace(content);  ///

        file = new File(path, content);
      }
    }

    return file;
  }

  static fromPath(path, projectsDirectoryPath) {
    let file = null;

    try {
      const absolutePath = concatenatePaths(projectsDirectoryPath, path),
            entryFile = isEntryFile(absolutePath);

      if (entryFile) {
        let content = readFile(absolutePath);

        content = convertContentTabsToWhitespace(content);  ///

        file = new File(path, content);
      }
    } catch (error) {
      ///
    }

    return file;
  }

  static fromDocument(document) {
    const filePath = document.getFilePath(),
          path = filePath;  ///

    let content = document.getContent();

    content = convertContentTabsToWhitespace(content);  ///

    const file = new File(path, content);

    return file;
  }

  static fromPathAndContent(path, content) {
    content = convertContentTabsToWhitespace(content);  ///

    const file = new File(path, content);

    return file;
  }
}

function convertContentTabsToWhitespace(content) { return content.replace(/\t/g, "  "); } ///
