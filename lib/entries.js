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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJpZXMuanMiXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJyZWFkRGlyZWN0b3J5IiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsIkVudHJpZXMiLCJhcnJheSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsImZpcnN0RW50cnlQYXRoIiwiZ2V0UGF0aCIsInBhdGgiLCJlbnRyeSIsImVudHJ5RmlsZSIsImlzRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImZpbGVzIiwiRmlsZXMiLCJmcm9tTm90aGluZyIsIm1hcEVudHJ5IiwiYWRkRmlsZSIsImZpbGVQYXRocyIsInJlZHVjZUVudHJ5IiwicHVzaCIsImRpcmVjdG9yeVBhdGhzIiwiZW50cnlEaXJlY3RvcnkiLCJpc0RpcmVjdG9yeSIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJldmVyeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsIkZpbGUiLCJmcm9tSlNPTiIsIkRpcmVjdG9yeSIsImVudHJpZXMiLCJqc1ppcCIsImpzWmlwRW50cmllcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJkb25lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVBhdGgiLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsIkVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEgiLCJFcnJvciIsIkVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEhfRVhDRUVERURfTUVTU0FHRSIsImZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiZmlsZVJlY29nbmlzZWRGaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRU0sSUFBRUEsT0FBRixHQUFjQyxnQ0FBZCxDQUFFRCxPQUFGO0FBQUEsSUFDRUUsS0FERixHQUNvQkMseUJBRHBCLENBQ0VELEtBREY7QUFBQSxJQUNTRSxNQURULEdBQ29CRCx5QkFEcEIsQ0FDU0MsTUFEVDtBQUFBLElBRUVDLGFBRkYsR0FFb0JDLDhCQUZwQixDQUVFRCxhQUZGO0FBQUEsSUFHRUUsZ0JBSEYsR0FHcURDLHdCQUhyRCxDQUdFRCxnQkFIRjtBQUFBLElBR29CRSw0QkFIcEIsR0FHcURELHdCQUhyRCxDQUdvQkMsNEJBSHBCOztJQUtlQyxPO0FBQ25CLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzhDQUV5QjtBQUN4QixVQUFJQyxvQkFBb0IsR0FBRyxJQUEzQjtBQUVBLFVBQU1DLFVBQVUsR0FBR1gsS0FBSyxDQUFDLEtBQUtTLEtBQU4sQ0FBeEIsQ0FId0IsQ0FHYzs7QUFFdEMsVUFBSUUsVUFBSixFQUFnQjtBQUFFO0FB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LENBQVdaLEtBQVgsRUFIdUMsQ0FHbkI7O0FBRXBCLGNBQU11RCxXQUFXLEdBQUc3RCxLQUFLLENBQUM4RCxNQUExQjs7QUFFQSxjQUFJRCxXQUFXLEdBQUdFLHVDQUFsQixFQUFnRDtBQUMvQyxrQkFBTSxJQUFJQyxLQUFKLENBQVVDLHVEQUFWLENBQU47QUFDQTtBQUNGOztBQUVEYixRQUFBQSxnQ0FBZ0MsQ0FBQ3BELEtBQUQsRUFBUXVCLGFBQVIsRUFBdUJ5QixxQkFBdkIsRUFBOENDLHVCQUE5QyxFQUF1RUMsa0NBQXZFLENBQWhDLENBZnNCLENBZXNIO0FBQzdJLE9BaEJELE1BZ0JPO0FBQ0wsWUFBTXpDLElBQUksR0FBR3lCLGlCQUFLMEIsUUFBTCxDQUFjdkQsSUFBZCxFQUFvQjJDLHFCQUFwQixDQUFiOztBQUVBLFlBQUl2QyxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixjQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0wsT0FBTCxFQUFqQjtBQUFBLGNBQ004RCwwQkFBMEIsR0FBRyw0Q0FBNkJ4RCxRQUE3QixDQURuQztBQUFBLGNBRU15RCxrQkFBa0IsR0FBR0QsMEJBRjNCLENBRGlCLENBR3VDOztBQUV4RCxjQUFJQyxrQkFBa0IsSUFBSVIsbUNBQTFCLEVBQStEO0FBQzdEckQsWUFBQUEsS0FBSyxHQUFHRyxJQUFSLENBRDZELENBQy9DOztBQUVkVCxZQUFBQSxLQUFLLENBQUNrQixJQUFOLENBQVdaLEtBQVgsRUFINkQsQ0FHekM7O0FBRXBCLGdCQUFNdUQsWUFBVyxHQUFHN0QsS0FBSyxDQUFDOEQsTUFBMUI7O0FBRUEsZ0JBQUlELFlBQVcsR0FBR0UsdUNBQWxCLEVBQWdEO0FBQzlDLG9CQUFNLElBQUlDLEtBQUosQ0FBVUMsdURBQVYsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7QUFDRixHQWxERDtBQW1ERCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgRmlsZXMgZnJvbSBcIi4vZmlsZXNcIjtcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSBcIi4vZGlyZWN0b3J5XCI7XG5cbmltcG9ydCB7IGlzTmFtZUhpZGRlbk5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlUGF0aFwiO1xuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByZWFkRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgeyBmaWxlcyB9ID1qc1ppcCxcbiAgICAgICAgICBqc1ppcEVudHJpZXMgPSBmaWxlcywgLy8vXG4gICAgICAgICAganNaaXBFbnRyeU5hbWVzID0gT2JqZWN0LmtleXMoanNaaXBFbnRyaWVzKTtcblxuICAgIGZvckVhY2goanNaaXBFbnRyeU5hbWVzLCAoanNaaXBFbnRyeU5hbWUsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IGpzWmlwRW50cnkgPSBqc1ppcEVudHJpZXNbanNaaXBFbnRyeU5hbWVdO1xuXG4gICAgICBEaXJlY3RvcnkuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgKGRpcmVjdG9yeSkgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRmlsZS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCAoZmlsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZG9uZSk7XG5cbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgICAgY2FsbGJhY2soZW50cmllcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKChzdWJFbnRyeU5hbWUpID0+IHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLFxuICAgICAgICAgIGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzID0gIWxvYWRPbmx5UmVjb2duaXNlZEZpbGVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xuXG4gICAgICAgIGlmIChsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgZmlsZVJlY29nbmlzZWRGaWxlID0gZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgIGlmIChmaWxlUmVjb2duaXNlZEZpbGUgfHwgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==