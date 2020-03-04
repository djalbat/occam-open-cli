'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var necessary = require('necessary');

var File = require('./file'),
    Files = require('./files'),
    messages = require('./messages'),
    constants = require('./constants'),
    Directory = require('./directory'),
    nameUtilities = require('./utilities/name'),
    filePathUtilities = require('./utilities/filePath');

var pathUtilities = necessary.pathUtilities,
    arrayUtilities = necessary.arrayUtilities,
    asynchronousUtilities = necessary.asynchronousUtilities,
    fileSystemUtilities = necessary.fileSystemUtilities,
    first = arrayUtilities.first,
    filter = arrayUtilities.filter,
    forEach = asynchronousUtilities.forEach,
    readDirectory = fileSystemUtilities.readDirectory,
    isNameHiddenName = nameUtilities.isNameHiddenName,
    isFilePathRecognisedFilePath = filePathUtilities.isFilePathRecognisedFilePath,
    ENTRIES_MAXIMUM_ARRAY_LENGTH = constants.ENTRIES_MAXIMUM_ARRAY_LENGTH,
    ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE = messages.ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE,
    concatenatePaths = pathUtilities.concatenatePaths,
    topmostDirectoryNameFromPath = pathUtilities.topmostDirectoryNameFromPath;

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
      var files = Files.fromNothing();
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
        file = File.fromJSON(json),
            directory = Directory.fromJSON(json),
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
        Directory.fromJSZipEntry(jsZipEntry, function (directory) {
          if (directory !== null) {
            var entry = directory; ///

            array.push(entry); ///

            next();
          } else {
            File.fromJSZipEntry(jsZipEntry, function (file) {
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
    var subEntryNameHiddenName = isNameHiddenName(subEntryName),
        subEntryNameNotHiddenName = !subEntryNameHiddenName,
        loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories,
        loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;

    if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
      var entry;
      var path = concatenatePaths(relativeDirectoryPath, subEntryName),
          directory = Directory.fromPath(path, projectsDirectoryPath);

      if (directory !== null) {
        var directoryPath = path; ///

        if (loadUnrecognisedFilesAndDirectories) {
          entry = directory; ///

          array.push(entry); ///

          var arrayLength = array.length;

          if (arrayLength > ENTRIES_MAXIMUM_ARRAY_LENGTH) {
            throw new Error(ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE);
          }
        }

        entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories); ///
      } else {
        var file = File.fromPath(path, projectsDirectoryPath);

        if (file !== null) {
          var filePath = file.getPath(),
              filePathRecognisedFilePath = isFilePathRecognisedFilePath(filePath),
              fileRecognisedFile = filePathRecognisedFilePath; ///

          if (fileRecognisedFile || loadUnrecognisedFilesAndDirectories) {
            entry = file; ///

            array.push(entry); ///

            var _arrayLength = array.length;

            if (_arrayLength > ENTRIES_MAXIMUM_ARRAY_LENGTH) {
              throw new Error(ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE);
            }
          }
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJpZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIkZpbGUiLCJGaWxlcyIsIm1lc3NhZ2VzIiwiY29uc3RhbnRzIiwiRGlyZWN0b3J5IiwibmFtZVV0aWxpdGllcyIsImZpbGVQYXRoVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwiZm9yRWFjaCIsInJlYWREaXJlY3RvcnkiLCJpc05hbWVIaWRkZW5OYW1lIiwiaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsIkVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEgiLCJFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UiLCJjb25jYXRlbmF0ZVBhdGhzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsIkVudHJpZXMiLCJhcnJheSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsImZpcnN0RW50cnlQYXRoIiwiZ2V0UGF0aCIsInBhdGgiLCJlbnRyeSIsImVudHJ5RmlsZSIsImlzRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImZpbGVzIiwiZnJvbU5vdGhpbmciLCJtYXBFbnRyeSIsImFkZEZpbGUiLCJmaWxlUGF0aHMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJkaXJlY3RvcnlQYXRocyIsImVudHJ5RGlyZWN0b3J5IiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJkaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lIiwiZXZlcnkiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJlbnRyaWVzSlNPTiIsImVudHJ5SlNPTiIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImVudHJpZXMiLCJqc1ppcCIsImpzWmlwRW50cmllcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJkb25lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIiwibG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21QYXRoIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJFcnJvciIsImZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiZmlsZVJlY29nbmlzZWRGaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXpCOztBQUVBLElBQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7QUFBQSxJQUNNRSxLQUFLLEdBQUdGLE9BQU8sQ0FBQyxTQUFELENBRHJCO0FBQUEsSUFFTUcsUUFBUSxHQUFHSCxPQUFPLENBQUMsWUFBRCxDQUZ4QjtBQUFBLElBR01JLFNBQVMsR0FBR0osT0FBTyxDQUFDLGFBQUQsQ0FIekI7QUFBQSxJQUlNSyxTQUFTLEdBQUdMLE9BQU8sQ0FBQyxhQUFELENBSnpCO0FBQUEsSUFLTU0sYUFBYSxHQUFHTixPQUFPLENBQUMsa0JBQUQsQ0FMN0I7QUFBQSxJQU1NTyxpQkFBaUIsR0FBR1AsT0FBTyxDQUFDLHNCQUFELENBTmpDOztJQVFRUSxhLEdB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QXZFLENBQWhDLENBZnNCLENBZXNIO0FBQzdJLE9BaEJELE1BZ0JPO0FBQ0wsWUFBTXRDLElBQUksR0FBRy9CLElBQUksQ0FBQ2lGLFFBQUwsQ0FBY3RELElBQWQsRUFBb0J3QyxxQkFBcEIsQ0FBYjs7QUFFQSxZQUFJcEMsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsY0FBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNMLE9BQUwsRUFBakI7QUFBQSxjQUNNMkQsMEJBQTBCLEdBQUdyRSw0QkFBNEIsQ0FBQ2dCLFFBQUQsQ0FEL0Q7QUFBQSxjQUVNc0Qsa0JBQWtCLEdBQUdELDBCQUYzQixDQURpQixDQUd1Qzs7QUFFeEQsY0FBSUMsa0JBQWtCLElBQUlOLG1DQUExQixFQUErRDtBQUM3RHBELFlBQUFBLEtBQUssR0FBR0csSUFBUixDQUQ2RCxDQUMvQzs7QUFFZFQsWUFBQUEsS0FBSyxDQUFDaUIsSUFBTixDQUFXWCxLQUFYLEVBSDZELENBR3pDOztBQUVwQixnQkFBTXNELFlBQVcsR0FBRzVELEtBQUssQ0FBQzZELE1BQTFCOztBQUVBLGdCQUFJRCxZQUFXLEdBQUdqRSw0QkFBbEIsRUFBZ0Q7QUFDOUMsb0JBQU0sSUFBSW1FLEtBQUosQ0FBVWxFLDZDQUFWLENBQU47QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsR0FsREQ7QUFtREQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyksXG4gICAgICBGaWxlcyA9IHJlcXVpcmUoJy4vZmlsZXMnKSxcbiAgICAgIG1lc3NhZ2VzID0gcmVxdWlyZSgnLi9tZXNzYWdlcycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKSxcbiAgICAgIERpcmVjdG9yeSA9IHJlcXVpcmUoJy4vZGlyZWN0b3J5JyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGFycmF5VXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICB7IEVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIH0gPSBtZXNzYWdlcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRW50cmllcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKSB7XG4gICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkpIHsgLy8vXG4gICAgICBjb25zdCBmaXJzdEVudHJ5UGF0aCA9IGZpcnN0RW50cnkuZ2V0UGF0aCgpO1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlyc3RFbnRyeVBhdGgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBmaXJzdEVudHJ5UGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICByZW1vdmVGaWxlQnlQYXRoKHBhdGgpIHtcbiAgICBmaWx0ZXIodGhpcy5hcnJheSwgKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gRmlsZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMubWFwRW50cnkoKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnk7IC8vL1xuXG4gICAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZmlsZVBhdGhzLCBlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBmaWxlUGF0aHMucHVzaChmaWxlUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZGlyZWN0b3J5UGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGVudHJ5LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnkuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGhzLnB1c2goZGlyZWN0b3J5UGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZmlsZSk7XG4gIH1cblxuICBtYXBFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRW50cnkoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUVudHJ5KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IGVudHJpZXNKU09OLm1hcCgoZW50cnlKU09OKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHsgZmlsZXMgfSA9anNaaXAsXG4gICAgICAgICAganNaaXBFbnRyaWVzID0gZmlsZXMsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlOYW1lcyA9IE9iamVjdC5rZXlzKGpzWmlwRW50cmllcyk7XG5cbiAgICBmb3JFYWNoKGpzWmlwRW50cnlOYW1lcywgKGpzWmlwRW50cnlOYW1lLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgRGlyZWN0b3J5LmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIChkaXJlY3RvcnkpID0+IHtcbiAgICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKChzdWJFbnRyeU5hbWUpID0+IHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLFxuICAgICAgICAgIGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzID0gIWxvYWRPbmx5UmVjb2duaXNlZEZpbGVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xuXG4gICAgICAgIGlmIChsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgZmlsZVJlY29nbmlzZWRGaWxlID0gZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgIGlmIChmaWxlUmVjb2duaXNlZEZpbGUgfHwgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==