"use strict";

function getFile(filePath) { return this.entries.getFile(filePath); }

function getFiles() { return this.entries.getFiles(); }

function getFilePaths() { return this.entries.getFilePaths(); }

function getDirectoryPaths() { return this.entries.getDirectoryPaths(); }

export default {
  getFile,
  getFiles,
  getFilePaths,
  getDirectoryPaths
};
