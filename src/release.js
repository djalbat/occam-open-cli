"use strict";

import Entries from "./entries";

import { isFilePathReadmeFilePath,
         isFilePathFlorenceFilePath,
         isFilePathMetaJSONFilePath,
         isFilePathCustomGrammarBNFFilePath,
         isFilePathCustomGrammarPatternFilePath } from "./utilities/filePath";

export default class Release {
  constructor(name, entries, versionNumber) {
    this.name = name;
    this.entries = entries;
    this.versionNumber = versionNumber;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  getVersionNumber() {
    return this.versionNumber;
  }

  getFile(filePath) { return this.entries.getFile(filePath); }

  getFiles() { return this.entries.getFiles(); }

  getFilePaths() { return this.entries.getFilePaths(); }

  getReadmeFile() {
    let readmeFile = null;

    const files = this.getFiles();

    files.someFile((file) => {
      const filePath = file.getPath(),
            filePathReadmeFilePath = isFilePathReadmeFilePath(filePath);

      if (filePathReadmeFilePath) {
        readmeFile = file;  ///

        return true;
      }
    });

    return readmeFile;
  }

  getMetaJSONFile() {
    let metaJSONFile = null;

    const files = this.getFiles();

    files.someFile((file) => {
      const filePath = file.getPath(),
            filePathMetaJSONFilePath = isFilePathMetaJSONFilePath(filePath);

      if (filePathMetaJSONFilePath) {
        metaJSONFile = file;  ///

        return true;
      }
    });

    return metaJSONFile;
  }

  getFlorenceFiles() {
    const files = this.getFiles(),
        florenceFiles = files.reduceFile((florenceFiles, file) => {
          const filePath = file.getPath(),
              filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath),
              fileFlorenceFile = filePathFlorenceFilePath;  ///

          if (fileFlorenceFile) {
            const florenceFile = file;  ///

            florenceFiles.push(florenceFile);
          }

          return florenceFiles;
        }, []);

    return florenceFiles;
  }

  getCustomGrammarBNFFiles() {
    const files = this.getFiles(),
          customGrammarBNFFiles = files.reduceFile((customGrammarBNFFiles, file) => {
          const filePath = file.getPath(),
                filePathCustomGrammarBNFFilePath = isFilePathCustomGrammarBNFFilePath(filePath),
                fileCustomGrammarBNFFile = filePathCustomGrammarBNFFilePath;  ///

          if (fileCustomGrammarBNFFile) {
            const customGrammarBNFFile = file;  ///

            customGrammarBNFFiles.push(customGrammarBNFFile);
          }

          return customGrammarBNFFiles;
        }, []);

    return customGrammarBNFFiles;
  }

  getCustomGrammarPatternFiles() {
    const files = this.getFiles(),
          customGrammarPatternFiles = files.reduceFile((customGrammarPatternFiles, file) => {
            const filePath = file.getPath(),
                filePathCustomGrammarPatternFilePath = isFilePathCustomGrammarPatternFilePath(filePath),
                fileCustomGrammarPatternFile = filePathCustomGrammarPatternFilePath;  ///

            if (fileCustomGrammarPatternFile) {
              const customGrammarPatternFile = file;  ///

              customGrammarPatternFiles.push(customGrammarPatternFile);
            }

            return customGrammarPatternFiles;
          }, []);

    return customGrammarPatternFiles;
  }

  toJSON() {
    const entriesJSON = this.entries.toJSON(),
          name = this.name,
          entries = entriesJSON,  ///
          versionNumber = this.versionNumber,
          json = {
            name,
            entries,
            versionNumber
          };

    return json;
  }

  static fromJSON(json) {
    let { entries } = json;

    const { name, versionNumber } = json,
          entriesJSON = entries;  ///

    json = entriesJSON; ///

    entries = Entries.fromJSON(json); ///

    const release = new Release(name, entries, versionNumber);

    return release;
  }

  static fromNameEntriesAndVersionNumber(name, entries, versionNumber) {
    const release = new Release(name, entries, versionNumber);

    return release;
  }
}
