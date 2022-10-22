"use strict";

import { pathUtilities, arrayUtilities } from "necessary";

import File from "./file";
import Files from "./files";
import Directory from "./directory";

const { first, filter } = arrayUtilities,
      { topmostDirectoryNameFromPath } = pathUtilities;

export default class Entries {
  constructor(array) {
    this.array = array;
  }

  getTopmostDirectoryName() {
    let topmostDirectoryName = null;
    
    const firstEntry = first(this.array); ///

    if (firstEntry) { ///
      const firstEntryPath = firstEntry.getPath();

      topmostDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);

      if (topmostDirectoryName === null) {
        topmostDirectoryName = firstEntryPath;
      }
    }

    return topmostDirectoryName;
  }

  removeFileByPath(path) {
    filter(this.array, (entry) => {
      const entryFile = entry.isFile();

      if (entryFile) {
        const file = entry, ///
              filePath = file.getPath();

        if (filePath === path) {
          return false;
        }
      }

      return true;
    });
  }

  getFile(filePath) {
    const files = this.getFiles(),
          file = files.findFile((file) => {
            const path = file.getPath();

            if (path === filePath) {
              return true;
            }
          }) || null;

    return file;
  }

  getFiles() {
    const files = Files.fromNothing();

    this.mapEntry((entry) => {
      const entryFile = entry.isFile();

      if (entryFile) {
        const file = entry; ///

        files.addFile(file);
      }
    });

    return files;
  }

  getFilePaths() {
    const filePaths = this.reduceEntry((filePaths, entry) => {
      const entryFile = entry.isFile();

      if (entryFile) {
        const file = entry, ///
              filePath = file.getPath();

        filePaths.push(filePath);
      }

      return filePaths;
    }, []);

    return filePaths;
  }

  getDirectoryPaths() {
    const directoryPaths = this.reduceEntry((directoryPaths, entry) => {
      const entryDirectory = entry.isDirectory();

      if (entryDirectory) {
        const directory = entry, ///
              directoryPath = directory.getPath();

        directoryPaths.push(directoryPath);
      }

      return directoryPaths;
    }, []);

    return directoryPaths;
  }

  addFile(file) {
    this.array.push(file);
  }

  mapEntry(callback) { return this.array.map(callback); }

  someEntry(callback) { return this.array.some(callback); }

  everyEntry(callback) { return this.array.every(callback); }

  forEachEntry(callback) { this.array.forEach(callback); }

  reduceEntry(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  toJSON() {
    const entriesJSON = this.array.map((entry) => {
            const entryJSON = entry.toJSON();
  
            return entryJSON;
          }),
          json = entriesJSON; ///

    return json;
  }

  static fromJSON(json) {
    const entriesJSON = json, ///
          array = entriesJSON.map((entryJSON) => {
            const json = entryJSON, ///
                  file = File.fromJSON(json),
                  directory = Directory.fromJSON(json),
                  entry = file || directory;  ///

            return entry;
          }),
          entries = new Entries(array);

    return entries;
  }

  static fromEntry(entry) {
    const array = [
            entry
          ],
          entries = new Entries(array);

    return entries;
  }

  static fromNothing() {
    const array = [],
          entries = new Entries(array);

    return entries;
  }
}
