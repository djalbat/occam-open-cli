"use strict";

import Entries from "./entries";

import { isFilePathFlorenceFilePath, isFilePathMetaJSONFilePath, isFilePathCustomGrammarBNFFilePath, isFilePathCustomGrammarLexicalPatternFilePath } from "./utilities/filePath";

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

  getCustomGrammarLexicalPatternFile() {
    const files = this.getFiles(),
          customGrammarLexicalPatternFile = files.findFile((file) => {
            const filePath = file.getPath(),
                  filePatCustomGrammarLexicalPatternFilePath = isFilePathCustomGrammarLexicalPatternFilePath(filePath);

            if (filePatCustomGrammarLexicalPatternFilePath) {
              return true;
            }
          });

    return customGrammarLexicalPatternFile;
  }

  toJSON() {
    const name = this.name,
          entriesJSON = this.entries.toJSON(),
          entries = entriesJSON,  ///
          json = {
            "name": name,
            "entries": entries
          };

    return json;
  }

  static fromJSON(json) {
    const nameJSON = json["name"],
          entriesJSON = json["entries"];

    json = entriesJSON; ///

    const name = nameJSON,  ///
          entries = Entries.fromJSON(json),
          project = new Project(name, entries);

    return project;
  }

  static fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    const entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

    return project;
  }
}
