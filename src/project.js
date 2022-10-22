"use strict";

import Entries from "./entries";

import { isFilePathFlorenceFilePath,
         isFilePathMetaJSONFilePath,
         isFilePathCustomGrammarBNFFilePath,
         isFilePathCustomGrammarPatternFilePath } from "./utilities/filePath";

export default class Project {
  constructor(name, entries) {
    this.name = name;
    this.entries = entries;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  getFiles() { return this.entries.getFiles(); }

  getFilePaths() { return this.entries.getFilePaths(); }

  getDirectoryPaths() { return this.entries.getDirectoryPaths(); }

  getFile(filePath) { return this.entries.getFile(filePath); }

  getMetaJSONFile() {
    const files = this.getFiles(),
          metaJSONFile = files.findFile((file) => {
          const filePath = file.getPath(),
                filePathMetaJSONFilePath = isFilePathMetaJSONFilePath(filePath);

          if (filePathMetaJSONFilePath) {
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
    const name = this.name,
          entriesJSON = this.entries.toJSON(),
          entries = entriesJSON,  ///
          json = {
            name,
            entries
          };

    return json;
  }

  static fromJSON(json) {
    const { name, entries: entriesJSON } = json;

    json = entriesJSON; ///

    const entries = Entries.fromJSON(json),
          project = new Project(name, entries);

    return project;
  }

  static fromName(name) {
    const entries = Entries.fromNothing(),
          project = new Project(name, entries);

    return project;
  }
}
