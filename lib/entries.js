"use strict";

var _necessary = require("necessary");

var _file = _interopRequireDefault(require("./file"));

var _files = _interopRequireDefault(require("./files"));

var _directory = _interopRequireDefault(require("./directory"));

var _name = require("./utilities/name");

var _constants = require("./constants");

var _filePath = require("./utilities/filePath");

var _messages = require("./messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var forEach = _necessary.asynchronousUtilities.forEach,
    first = _necessary.arrayUtilities.first,
    filter = _necessary.arrayUtilities.filter,
    readDirectory = _necessary.fileSystemUtilities.readDirectory,
    concatenatePaths = _necessary.pathUtilities.concatenatePaths,
    topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath;

var Entries = /*#__PURE__*/function () {
  function Entries(array) {
    _classCallCheck(this, Entries);

    this.array = array;
  }

  _createClass(Entries, [{
    key: "getTopmostDirectoryName",
    value: function getTopmostDirectoryName() {
      var topmostDirectoryName = null;
      var firstEntry = first(this.array); ///

      if (firstEntry) {
        ///
        var firstEntryPath = firstEntry.getPath();
        topmostDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);

        if (topmostDirectoryName === null) {
          topmostDirectoryName = firstEntryPath;
        }
      }

      return topmostDirectoryName;
    }
  }, {
    key: "removeFileByPath",
    value: function removeFileByPath(path) {
      filter(this.array, function (entry) {
        var entryFile = entry.isFile();

        if (entryFile) {
          var file = entry,
              ///
          filePath = file.getPath();

          if (filePath === path) {
            return false;
          }
        }

        return true;
      });
    }
  }, {
    key: "getFiles",
    value: function getFiles() {
      var files = _files["default"].fromNothing();

      this.mapEntry(function (entry) {
        var entryFile = entry.isFile();

        if (entryFile) {
          var file = entry; ///

          files.addFile(file);
        }
      });
      return files;
    }
  }, {
    key: "getFilePaths",
    value: function getFilePaths() {
      var filePaths = this.reduceEntry(function (filePaths, entry) {
        var entryFile = entry.isFile();

        if (entryFile) {
          var file = entry,
              ///
          filePath = file.getPath();
          filePaths.push(filePath);
        }

        return filePaths;
      }, []);
      return filePaths;
    }
  }, {
    key: "getDirectoryPaths",
    value: function getDirectoryPaths() {
      var directoryPaths = this.reduceEntry(function (directoryPaths, entry) {
        var entryDirectory = entry.isDirectory();

        if (entryDirectory) {
          var directory = entry,
              ///
          directoryPath = directory.getPath();
          directoryPaths.push(directoryPath);
        }

        return directoryPaths;
      }, []);
      return directoryPaths;
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      this.array.push(file);
    }
  }, {
    key: "mapEntry",
    value: function mapEntry(callback) {
      return this.array.map(callback);
    }
  }, {
    key: "someEntry",
    value: function someEntry(callback) {
      return this.array.some(callback);
    }
  }, {
    key: "everyEntry",
    value: function everyEntry(callback) {
      return this.array.every(callback);
    }
  }, {
    key: "forEachEntry",
    value: function forEachEntry(callback) {
      this.array.forEach(callback);
    }
  }, {
    key: "reduceEntry",
    value: function reduceEntry(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var entriesJSON = this.array.map(function (entry) {
        var entryJSON = entry.toJSON();
        return entryJSON;
      }),
          json = entriesJSON; ///

      return json;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(json) {
      var entriesJSON = json,
          ///
      array = entriesJSON.map(function (entryJSON) {
        var json = entryJSON,
            ///
        file = _file["default"].fromJSON(json),
            directory = _directory["default"].fromJSON(json),
            entry = file || directory; ///


        return entry;
      }),
          entries = new Entries(array);
      return entries;
    }
  }, {
    key: "fromJSZip",
    value: function fromJSZip(jsZip, callback) {
      var array = [],
          files = jsZip.files,
          jsZipEntries = files,
          jsZipEntryNames = Object.keys(jsZipEntries);
      forEach(jsZipEntryNames, function (jsZipEntryName, next) {
        var jsZipEntry = jsZipEntries[jsZipEntryName];

        _directory["default"].fromJSZipEntry(jsZipEntry, function (directory) {
          if (directory !== null) {
            var entry = directory; ///

            array.push(entry); ///

            next();
          } else {
            _file["default"].fromJSZipEntry(jsZipEntry, function (file) {
              if (file !== null) {
                var _entry = file;
                array.push(_entry); ///
              }

              next();
            });
          }
        });
      }, done);

      function done() {
        var entries = new Entries(array);
        callback(entries);
      }
    }
  }, {
    key: "fromTopmostDirectoryName",
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
      var array = [],
          relativeDirectoryPath = topmostDirectoryName; ///

      entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
      var entries = new Entries(array);
      return entries;
    }
  }]);

  return Entries;
}();

module.exports = Entries;

function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
  var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = readDirectory(absoluteDirectoryPath);
  subEntryNames.forEach(function (subEntryName) {
    var subEntryNameHiddenName = (0, _name.isNameHiddenName)(subEntryName),
        subEntryNameNotHiddenName = !subEntryNameHiddenName,
        loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories,
        loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;

    if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
      var entry;

      var path = concatenatePaths(relativeDirectoryPath, subEntryName),
          directory = _directory["default"].fromPath(path, projectsDirectoryPath);

      if (directory !== null) {
        var directoryPath = path; ///

        if (loadUnrecognisedFilesAndDirectories) {
          entry = directory; ///

          array.push(entry); ///

          var arrayLength = array.length;

          if (arrayLength > _constants.ENTRIES_MAXIMUM_ARRAY_LENGTH) {
            throw new Error(_messages.ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE);
          }
        }

        entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories); ///
      } else {
        var file = _file["default"].fromPath(path, projectsDirectoryPath);

        if (file !== null) {
          var filePath = file.getPath(),
              filePathRecognisedFilePath = (0, _filePath.isFilePathRecognisedFilePath)(filePath),
              fileRecognisedFile = filePathRecognisedFilePath; ///

          if (fileRecognisedFile || loadUnrecognisedFilesAndDirectories) {
            entry = file; ///

            array.push(entry); ///

            var _arrayLength = array.length;

            if (_arrayLength > _constants.ENTRIES_MAXIMUM_ARRAY_LENGTH) {
              throw new Error(_messages.ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE);
            }
          }
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJpZXMuanMiXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJyZWFkRGlyZWN0b3J5IiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsIkVudHJpZXMiLCJhcnJheSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsImZpcnN0RW50cnlQYXRoIiwiZ2V0UGF0aCIsInBhdGgiLCJlbnRyeSIsImVudHJ5RmlsZSIsImlzRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImZpbGVzIiwiRmlsZXMiLCJmcm9tTm90aGluZyIsIm1hcEVudHJ5IiwiYWRkRmlsZSIsImZpbGVQYXRocyIsInJlZHVjZUVudHJ5IiwicHVzaCIsImRpcmVjdG9yeVBhdGhzIiwiZW50cnlEaXJlY3RvcnkiLCJpc0RpcmVjdG9yeSIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJldmVyeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsIkZpbGUiLCJmcm9tSlNPTiIsIkRpcmVjdG9yeSIsImVudHJpZXMiLCJqc1ppcCIsImpzWmlwRW50cmllcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJkb25lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIiwibG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21QYXRoIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIIiwiRXJyb3IiLCJFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UiLCJmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImZpbGVSZWNvZ25pc2VkRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTSxJQUFFQSxPQUFGLEdBQWNDLGdDQUFkLENBQUVELE9BQUY7QUFBQSxJQUNFRSxLQURGLEdBQ29CQyx5QkFEcEIsQ0FDRUQsS0FERjtBQUFBLElBQ1NFLE1BRFQsR0FDb0JELHlCQURwQixDQUNTQyxNQURUO0FBQUEsSUFFRUMsYUFGRixHQUVvQkMsOEJBRnBCLENBRUVELGFBRkY7QUFBQSxJQUdFRSxnQkFIRixHQUdxREMsd0JBSHJELENBR0VELGdCQUhGO0FBQUEsSUFHb0JFLDRCQUhwQixHQUdxREQsd0JBSHJELENBR29CQyw0QkFIcEI7O0lBS0FDLE87QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs4Q0FFeUI7QUFDeEIsVUFBSUMsb0JBQW9CLEdBQUcsSUFBM0I7QUFFQSxVQUFNQyxVQUFVLEdBQUdYLEtBQUssQ0FBQyxLQUFLUyxLQUFOLENBQXhCLENBSHdCLENBR2M7O0FBRXRDLFVBQUlFLFVBQUos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bmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGFycmF5VXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBGaWxlIGZyb20gXCIuL2ZpbGVcIjtcbmltcG9ydCBGaWxlcyBmcm9tIFwiLi9maWxlc1wiO1xuaW1wb3J0IERpcmVjdG9yeSBmcm9tIFwiLi9kaXJlY3RvcnlcIjtcblxuaW1wb3J0IHsgaXNOYW1lSGlkZGVuTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5pbXBvcnQgeyBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJlYWREaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5KSB7IC8vL1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZmlyc3RFbnRyeVBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgcmVtb3ZlRmlsZUJ5UGF0aChwYXRoKSB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBpZiAoZmlsZVBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IEZpbGVzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLm1hcEVudHJ5KChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5OyAvLy9cblxuICAgICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMucmVkdWNlRW50cnkoKGZpbGVQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZmlsZVBhdGhzLnB1c2goZmlsZVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsZVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICBnZXREaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRocyA9IHRoaXMucmVkdWNlRW50cnkoKGRpcmVjdG9yeVBhdGhzLCBlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBlbnRyeS5pc0RpcmVjdG9yeSgpO1xuXG4gICAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5ID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5LmdldFBhdGgoKTtcblxuICAgICAgICBkaXJlY3RvcnlQYXRocy5wdXNoKGRpcmVjdG9yeVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGZpbGUpO1xuICB9XG5cbiAgbWFwRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5RW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaEVudHJ5KGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VFbnRyeShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBlbnRyaWVzSlNPTi5tYXAoKGVudHJ5SlNPTikgPT4ge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGVudHJ5SlNPTiwgLy8vXG4gICAgICAgICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGVudHJ5ID0gZmlsZSB8fCBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICB7IGZpbGVzIH0gPWpzWmlwLFxuICAgICAgICAgIGpzWmlwRW50cmllcyA9IGZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpO1xuXG4gICAgZm9yRWFjaChqc1ppcEVudHJ5TmFtZXMsIChqc1ppcEVudHJ5TmFtZSwgbmV4dCkgPT4ge1xuICAgICAgY29uc3QganNaaXBFbnRyeSA9IGpzWmlwRW50cmllc1tqc1ppcEVudHJ5TmFtZV07XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCAoZGlyZWN0b3J5KSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBGaWxlLmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIChmaWxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IGZpbGU7XG5cbiAgICAgICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgICBjYWxsYmFjayhlbnRyaWVzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuXG4gICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbnRyaWVzO1xuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaCgoc3ViRW50cnlOYW1lKSA9PiB7XG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXG4gICAgICAgICAgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyxcbiAgICAgICAgICBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyA9ICFsb2FkT25seVJlY29nbmlzZWRGaWxlcztcblxuICAgIGlmIChzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIHx8IGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoOyAvLy9cblxuICAgICAgICBpZiAobG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cblxuICAgICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgICAgICAgaWYgKGFycmF5TGVuZ3RoID4gRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCkge1xuICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCBkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCA9IGlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgIGZpbGVSZWNvZ25pc2VkRmlsZSA9IGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICBpZiAoZmlsZVJlY29nbmlzZWRGaWxlIHx8IGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgICBlbnRyeSA9IGZpbGU7IC8vL1xuXG4gICAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGFycmF5TGVuZ3RoID4gRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=