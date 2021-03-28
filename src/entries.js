"use strict";

import { pathUtilities, arrayUtilities, asynchronousUtilities, fileSystemUtilities } from "necessary";

import File from "./file";
import Files from "./files";
import Directory from "./directory";

import { isNameHiddenName } from "./utilities/name";
import { ENTRIES_MAXIMUM_ARRAY_LENGTH } from "./constants";
import { isFilePathRecognisedFilePath } from "./utilities/filePath";
import { ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE } from "./messages";

const { first, filter } = arrayUtilities,
      { readDirectory } = fileSystemUtilities,
      { concatenatePaths, topmostDirectoryNameFromPath } = pathUtilities;

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

  static fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    const array = [],
          relativeDirectoryPath = topmostDirectoryName;  ///

    entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

    const entries = new Entries(array);

    return entries;
  }
}

function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
  const absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
        subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach((subEntryName) => {
    const subEntryNameHiddenName = isNameHiddenName(subEntryName),
          subEntryNameNotHiddenName = !subEntryNameHiddenName,
          loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories,
          loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;

    if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
      let entry;

      const path = concatenatePaths(relativeDirectoryPath, subEntryName),
            directory = Directory.fromPath(path, projectsDirectoryPath);

      if (directory !== null) {
        const directoryPath = path; ///

        if (loadUnrecognisedFilesAndDirectories) {
          entry = directory;  ///

          array.push(entry);  ///

          const arrayLength = array.length;

          if (arrayLength > ENTRIES_MAXIMUM_ARRAY_LENGTH) {
           throw new Error(ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE)
          }
        }

        entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories); ///
      } else {
        const file = File.fromPath(path, projectsDirectoryPath);

        if (file !== null) {
          const filePath = file.getPath(),
                filePathRecognisedFilePath = isFilePathRecognisedFilePath(filePath),
                fileRecognisedFile = filePathRecognisedFilePath;  ///

          if (fileRecognisedFile || loadUnrecognisedFilesAndDirectories) {
            entry = file; ///

            array.push(entry);  ///

            const arrayLength = array.length;

            if (arrayLength > ENTRIES_MAXIMUM_ARRAY_LENGTH) {
              throw new Error(ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE)
            }
          }
        }
      }
    }
  });
}
