"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var first = _necessary.arrayUtilities.first,
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

exports["default"] = Entries;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJpZXMuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInJlYWREaXJlY3RvcnkiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZmlsZXMiLCJGaWxlcyIsImZyb21Ob3RoaW5nIiwibWFwRW50cnkiLCJhZGRGaWxlIiwiZmlsZVBhdGhzIiwicmVkdWNlRW50cnkiLCJwdXNoIiwiZGlyZWN0b3J5UGF0aHMiLCJlbnRyeURpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwibWFwIiwic29tZSIsImV2ZXJ5IiwiZm9yRWFjaCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsIkZpbGUiLCJmcm9tSlNPTiIsIkRpcmVjdG9yeSIsImVudHJpZXMiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwic3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSIsImxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwibG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tUGF0aCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwiRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCIsIkVycm9yIiwiRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIiwiZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJmaWxlUmVjb2duaXNlZEZpbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFrQkMseUIsQ0FBbEJELEs7SUFBT0UsTSxHQUFXRCx5QixDQUFYQyxNO0lBQ1BDLGEsR0FBa0JDLDhCLENBQWxCRCxhO0lBQ0FFLGdCLEdBQW1EQyx3QixDQUFuREQsZ0I7SUFBa0JFLDRCLEdBQWlDRCx3QixDQUFqQ0MsNEI7O0lBRUxDLE87QUFDbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7OENBRXlCO0FBQ3hCLFVBQUlDLG9CQUFvQixHQUFHLElBQTNCO0FBRUEsVUFBTUMsVUFBVSxHQUFHWCxLQUFLLENBQUMsS0FBS1MsS0FBTixDQUF4QixDQUh3QixDQUdjOztBQUV0QyxVQUFJRSxVQUFKLEVBQWdCO0FBQUU7QUFDaEIsWUFBTUMsY0FBYyxHQUFHRCxVQUFVLENBQUNFLE9BQVgsRUFBdkI7QUFFQUgsUUFBQUEsb0JBQW9CLEdBQUdILDRCQUE0QixDQUFDSyxjQUFELENBQW5EOztBQUVBLFlBQUlGLG9CQUFvQixLQUFLLElBQTdCLEVBQW1DO0FBQ2pDQSxVQUFBQSxvQkFBb0IsR0FBR0UsY0FBdkI7QUFDRDtBQUNGOztBQUVELGFBQU9GLG9CQUFQO0FBQ0Q7OztxQ0FFZ0JJLEksRUFBTTtBQUNyQlosTUFBQUEsTUFBTSxDQUFDLEtBQUtPLEtBQU4sRUFBYSxVQUFDTSxL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Q0FBdkUsQ0FBaEMsQ0Fmc0IsQ0Flc0g7QUFDN0ksT0FoQkQsTUFnQk87QUFDTCxZQUFNaEMsSUFBSSxHQUFHMEIsaUJBQUtnQixRQUFMLENBQWM5QyxJQUFkLEVBQW9Ca0MscUJBQXBCLENBQWI7O0FBRUEsWUFBSTlCLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLGNBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDTCxPQUFMLEVBQWpCO0FBQUEsY0FDTXFELDBCQUEwQixHQUFHLDRDQUE2Qi9DLFFBQTdCLENBRG5DO0FBQUEsY0FFTWdELGtCQUFrQixHQUFHRCwwQkFGM0IsQ0FEaUIsQ0FHdUM7O0FBRXhELGNBQUlDLGtCQUFrQixJQUFJUixtQ0FBMUIsRUFBK0Q7QUFDN0Q1QyxZQUFBQSxLQUFLLEdBQUdHLElBQVIsQ0FENkQsQ0FDL0M7O0FBRWRULFlBQUFBLEtBQUssQ0FBQ2tCLElBQU4sQ0FBV1osS0FBWCxFQUg2RCxDQUd6Qzs7QUFFcEIsZ0JBQU04QyxZQUFXLEdBQUdwRCxLQUFLLENBQUNxRCxNQUExQjs7QUFFQSxnQkFBSUQsWUFBVyxHQUFHRSx1Q0FBbEIsRUFBZ0Q7QUFDOUMsb0JBQU0sSUFBSUMsS0FBSixDQUFVQyx1REFBVixDQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRjtBQUNGLEdBbEREO0FBbUREIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGFycmF5VXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBGaWxlIGZyb20gXCIuL2ZpbGVcIjtcbmltcG9ydCBGaWxlcyBmcm9tIFwiLi9maWxlc1wiO1xuaW1wb3J0IERpcmVjdG9yeSBmcm9tIFwiLi9kaXJlY3RvcnlcIjtcblxuaW1wb3J0IHsgaXNOYW1lSGlkZGVuTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5pbXBvcnQgeyBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByZWFkRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuXG4gICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goKHN1YkVudHJ5TmFtZSkgPT4ge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSA9ICFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lLFxuICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMsXG4gICAgICAgICAgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXM7XG5cbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gcGF0aDsgLy8vXG5cbiAgICAgICAgaWYgKGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgICAgICAgIGlmIChhcnJheUxlbmd0aCA+IEVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEgpIHtcbiAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEhfRVhDRUVERURfTUVTU0FHRSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggPSBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICBmaWxlUmVjb2duaXNlZEZpbGUgPSBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgaWYgKGZpbGVSZWNvZ25pc2VkRmlsZSB8fCBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICAgICAgZW50cnkgPSBmaWxlOyAvLy9cblxuICAgICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cblxuICAgICAgICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChhcnJheUxlbmd0aCA+IEVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEgpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEhfRVhDRUVERURfTUVTU0FHRSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19