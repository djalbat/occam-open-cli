'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Entries = function () {
  function Entries(array) {
    _classCallCheck(this, Entries);

    this.array = array;
  }

  _createClass(Entries, [{
    key: 'getTopmostDirectoryName',
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
    key: 'removeFileByPath',
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
    key: 'getFiles',
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
    key: 'getFilePaths',
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
    key: 'getDirectoryPaths',
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
    key: 'addFile',
    value: function addFile(file) {
      this.array.push(file);
    }
  }, {
    key: 'mapEntry',
    value: function mapEntry(callback) {
      return this.array.map(callback);
    }
  }, {
    key: 'someEntry',
    value: function someEntry(callback) {
      return this.array.some(callback);
    }
  }, {
    key: 'everyEntry',
    value: function everyEntry(callback) {
      return this.array.every(callback);
    }
  }, {
    key: 'forEachEntry',
    value: function forEachEntry(callback) {
      this.array.forEach(callback);
    }
  }, {
    key: 'reduceEntry',
    value: function reduceEntry(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var entriesJSON = this.array.map(function (entry) {
        var entryJSON = entry.toJSON();

        return entryJSON;
      }),
          json = entriesJSON; ///

      return json;
    }
  }], [{
    key: 'fromJSON',
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
    key: 'fromJSZip',
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
    key: 'fromTopmostDirectoryName',
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
      var entry = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRmlsZXMiLCJtZXNzYWdlcyIsImNvbnN0YW50cyIsIkRpcmVjdG9yeSIsIm5hbWVVdGlsaXRpZXMiLCJmaWxlUGF0aFV0aWxpdGllcyIsInBhdGhVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJmaXJzdCIsImZpbHRlciIsImZvckVhY2giLCJyZWFkRGlyZWN0b3J5IiwiaXNOYW1lSGlkZGVuTmFtZSIsImlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIIiwiRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJFbnRyaWVzIiwiYXJyYXkiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJwYXRoIiwiZW50cnkiLCJlbnRyeUZpbGUiLCJpc0ZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJmaWxlcyIsImZyb21Ob3RoaW5nIiwibWFwRW50cnkiLCJhZGRGaWxlIiwiZmlsZVBhdGhzIiwicmVkdWNlRW50cnkiLCJwdXNoIiwiZGlyZWN0b3J5UGF0aHMiLCJlbnRyeURpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwibWFwIiwic29tZSIsImV2ZXJ5IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZW50cmllc0pTT04iLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJlbnRyaWVzIiwianNaaXAiLCJqc1ppcEVudHJpZXMiLCJqc1ppcEVudHJ5TmFtZXMiLCJPYmplY3QiLCJrZXlzIiwianNaaXBFbnRyeU5hbWUiLCJuZXh0IiwianNaaXBFbnRyeSIsImZyb21KU1ppcEVudHJ5IiwiZG9uZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImxvYWRPbmx5UmVjb2duaXNlZEZpbGVzIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwic3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSIsImxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwibG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tUGF0aCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwiRXJyb3IiLCJmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImZpbGVSZWNvZ25pc2VkRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01FLFFBQVFGLFFBQVEsU0FBUixDQURkO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxZQUFSLENBRmpCO0FBQUEsSUFHTUksWUFBWUosUUFBUSxhQUFSLENBSGxCO0FBQUEsSUFJTUssWUFBWUwsUUFBUSxhQUFSLENBSmxCO0FBQUEsSUFLTU0sZ0JBQWdCTixRQUFRLGtCQUFSLENBTHRCO0FBQUEsSUFNTU8sb0JBQW9CUCxRQUFRLHNCQUFSLENBTjFCOztJQVFRUSxhLEdBQThFVCxTLENBQTlFUyxhO0lBQWVDLGMsR0FBK0RWLFMsQ0FBL0RVLGM7SUFBZ0JDLHFCLEdBQStDWCxTLENBQS9DVyxxQjtJQUF1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QnJCLGdCQUFNaUIsSUFBTixDQUFXWCxLQUFYLEVBSHVDLENBR25COztBQUVwQixjQUFNc0QsY0FBYzVELE1BQU02RCxNQUExQjs7QUFFQSxjQUFJRCxjQUFjakUsNEJBQWxCLEVBQWdEO0FBQy9DLGtCQUFNLElBQUltRSxLQUFKLENBQVVsRSw2Q0FBVixDQUFOO0FBQ0E7QUFDRjs7QUFFRHFELHlDQUFpQ2pELEtBQWpDLEVBQXdDc0IsYUFBeEMsRUFBdUR1QixxQkFBdkQsRUFBOEVDLHVCQUE5RSxFQUF1R0Msa0NBQXZHLEVBZnNCLENBZXNIO0FBQzdJLE9BaEJELE1BZ0JPO0FBQ0wsWUFBTXRDLE9BQU8vQixLQUFLaUYsUUFBTCxDQUFjdEQsSUFBZCxFQUFvQndDLHFCQUFwQixDQUFiOztBQUVBLFlBQUlwQyxTQUFTLElBQWIsRUFBbUI7QUFDakIsY0FBTUMsV0FBV0QsS0FBS0wsT0FBTCxFQUFqQjtBQUFBLGNBQ00yRCw2QkFBNkJyRSw2QkFBNkJnQixRQUE3QixDQURuQztBQUFBLGNBRU1zRCxxQkFBcUJELDBCQUYzQixDQURpQixDQUd1Qzs7QUFFeEQsY0FBSUMsc0JBQXNCTixtQ0FBMUIsRUFBK0Q7QUFDN0RwRCxvQkFBUUcsSUFBUixDQUQ2RCxDQUMvQzs7QUFFZFQsa0JBQU1pQixJQUFOLENBQVdYLEtBQVgsRUFINkQsQ0FHekM7O0FBRXBCLGdCQUFNc0QsZUFBYzVELE1BQU02RCxNQUExQjs7QUFFQSxnQkFBSUQsZUFBY2pFLDRCQUFsQixFQUFnRDtBQUM5QyxvQkFBTSxJQUFJbUUsS0FBSixDQUFVbEUsNkNBQVYsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7QUFDRixHQWxERDtBQW1ERCIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgRmlsZXMgPSByZXF1aXJlKCcuL2ZpbGVzJyksXG4gICAgICBtZXNzYWdlcyA9IHJlcXVpcmUoJy4vbWVzc2FnZXMnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyksXG4gICAgICBEaXJlY3RvcnkgPSByZXF1aXJlKCcuL2RpcmVjdG9yeScpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKSxcbiAgICAgIGZpbGVQYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZmlsZVBhdGgnKTtcblxuY29uc3QgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IHJlYWREaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IGlzTmFtZUhpZGRlbk5hbWUgfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzLFxuICAgICAgeyBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIIH0gPSBjb25zdGFudHMsXG4gICAgICB7IEVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEhfRVhDRUVERURfTUVTU0FHRSB9ID0gbWVzc2FnZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5KSB7IC8vL1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZmlyc3RFbnRyeVBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgcmVtb3ZlRmlsZUJ5UGF0aChwYXRoKSB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gRmlsZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMubWFwRW50cnkoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KGZ1bmN0aW9uKGZpbGVQYXRocywgZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZmlsZVBhdGhzLnB1c2goZmlsZVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsZVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICBnZXREaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRocyA9IHRoaXMucmVkdWNlRW50cnkoZnVuY3Rpb24oZGlyZWN0b3J5UGF0aHMsIGVudHJ5KSB7XG4gICAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGVudHJ5LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnkuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGhzLnB1c2goZGlyZWN0b3J5UGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZmlsZSk7XG4gIH1cblxuICBtYXBFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRW50cnkoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUVudHJ5KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKGZ1bmN0aW9uKGVudHJ5SlNPTikge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGVudHJ5SlNPTiwgLy8vXG4gICAgICAgICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGVudHJ5ID0gZmlsZSB8fCBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICB7IGZpbGVzIH0gPWpzWmlwLFxuICAgICAgICAgIGpzWmlwRW50cmllcyA9IGZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpO1xuXG4gICAgZm9yRWFjaChqc1ppcEVudHJ5TmFtZXMsIGZ1bmN0aW9uKGpzWmlwRW50cnlOYW1lLCBuZXh0KSB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgRGlyZWN0b3J5LmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uKGRpcmVjdG9yeSkge1xuICAgICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRmlsZS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IGZpbGU7XG5cbiAgICAgICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgICBjYWxsYmFjayhlbnRyaWVzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuXG4gICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbnRyaWVzO1xuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihzdWJFbnRyeU5hbWUpIHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLFxuICAgICAgICAgIGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzID0gIWxvYWRPbmx5UmVjb2duaXNlZEZpbGVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xuXG4gICAgICAgIGlmIChsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgZmlsZVJlY29nbmlzZWRGaWxlID0gZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgIGlmIChmaWxlUmVjb2duaXNlZEZpbGUgfHwgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==