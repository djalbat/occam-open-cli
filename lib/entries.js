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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRmlsZXMiLCJtZXNzYWdlcyIsImNvbnN0YW50cyIsIkRpcmVjdG9yeSIsIm5hbWVVdGlsaXRpZXMiLCJmaWxlUGF0aFV0aWxpdGllcyIsInBhdGhVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJmaXJzdCIsImZpbHRlciIsImZvckVhY2giLCJyZWFkRGlyZWN0b3J5IiwiaXNOYW1lSGlkZGVuTmFtZSIsImlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIIiwiRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJFbnRyaWVzIiwiYXJyYXkiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJwYXRoIiwiZW50cnkiLCJlbnRyeUZpbGUiLCJpc0ZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJmaWxlcyIsImZyb21Ob3RoaW5nIiwibWFwRW50cnkiLCJhZGRGaWxlIiwiZmlsZVBhdGhzIiwicmVkdWNlRW50cnkiLCJwdXNoIiwiZGlyZWN0b3J5UGF0aHMiLCJlbnRyeURpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwibWFwIiwic29tZSIsImV2ZXJ5IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZW50cmllc0pTT04iLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJlbnRyaWVzIiwianNaaXAiLCJqc1ppcEVudHJpZXMiLCJqc1ppcEVudHJ5TmFtZXMiLCJPYmplY3QiLCJrZXlzIiwianNaaXBFbnRyeU5hbWUiLCJuZXh0IiwianNaaXBFbnRyeSIsImZyb21KU1ppcEVudHJ5IiwiZG9uZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImxvYWRPbmx5UmVjb2duaXNlZEZpbGVzIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwic3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSIsImxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwibG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tUGF0aCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwiRXJyb3IiLCJmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImZpbGVSZWNvZ25pc2VkRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01FLFFBQVFGLFFBQVEsU0FBUixDQURkO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxZQUFSLENBRmpCO0FBQUEsSUFHTUksWUFBWUosUUFBUSxhQUFSLENBSGxCO0FBQUEsSUFJTUssWUFBWUwsUUFBUSxhQUFSLENBSmxCO0FBQUEsSUFLTU0sZ0JBQWdCTixRQUFRLGtCQUFSLENBTHRCO0FBQUEsSUFNTU8sb0JBQW9CUCxRQUFRLHNCQUFSLENBTjFCOztJQVFRUSxhLEdBQThFVCxTLENBQTlFUyxhO0lBQWVDLGMsR0FBK0RWLFMsQ0FBL0RVLGM7SUFBZ0JDLHFCLEdBQStDWCxTLENBQS9DVyxxQjtJQUF1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QU1pQixJQUFOLENBQVdYLEtBQVgsRUFIdUMsQ0FHbkI7O0FBRXBCLGNBQU1zRCxjQUFjNUQsTUFBTTZELE1BQTFCOztBQUVBLGNBQUlELGNBQWNqRSw0QkFBbEIsRUFBZ0Q7QUFDL0Msa0JBQU0sSUFBSW1FLEtBQUosQ0FBVWxFLDZDQUFWLENBQU47QUFDQTtBQUNGOztBQUVEcUQseUNBQWlDakQsS0FBakMsRUFBd0NzQixhQUF4QyxFQUF1RHVCLHFCQUF2RCxFQUE4RUMsdUJBQTlFLEVBQXVHQyxrQ0FBdkcsRUFmc0IsQ0Flc0g7QUFDN0ksT0FoQkQsTUFnQk87QUFDTCxZQUFNdEMsT0FBTy9CLEtBQUtpRixRQUFMLENBQWN0RCxJQUFkLEVBQW9Cd0MscUJBQXBCLENBQWI7O0FBRUEsWUFBSXBDLFNBQVMsSUFBYixFQUFtQjtBQUNqQixjQUFNQyxXQUFXRCxLQUFLTCxPQUFMLEVBQWpCO0FBQUEsY0FDTTJELDZCQUE2QnJFLDZCQUE2QmdCLFFBQTdCLENBRG5DO0FBQUEsY0FFTXNELHFCQUFxQkQsMEJBRjNCLENBRGlCLENBR3VDOztBQUV4RCxjQUFJQyxzQkFBc0JOLG1DQUExQixFQUErRDtBQUM3RHBELG9CQUFRRyxJQUFSLENBRDZELENBQy9DOztBQUVkVCxrQkFBTWlCLElBQU4sQ0FBV1gsS0FBWCxFQUg2RCxDQUd6Qzs7QUFFcEIsZ0JBQU1zRCxlQUFjNUQsTUFBTTZELE1BQTFCOztBQUVBLGdCQUFJRCxlQUFjakUsNEJBQWxCLEVBQWdEO0FBQzlDLG9CQUFNLElBQUltRSxLQUFKLENBQVVsRSw2Q0FBVixDQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRjtBQUNGLEdBbEREO0FBbUREIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyksXG4gICAgICBGaWxlcyA9IHJlcXVpcmUoJy4vZmlsZXMnKSxcbiAgICAgIG1lc3NhZ2VzID0gcmVxdWlyZSgnLi9tZXNzYWdlcycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKSxcbiAgICAgIERpcmVjdG9yeSA9IHJlcXVpcmUoJy4vZGlyZWN0b3J5JyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGFycmF5VXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICB7IEVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIH0gPSBtZXNzYWdlcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRW50cmllcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKSB7XG4gICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkpIHsgLy8vXG4gICAgICBjb25zdCBmaXJzdEVudHJ5UGF0aCA9IGZpcnN0RW50cnkuZ2V0UGF0aCgpO1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlyc3RFbnRyeVBhdGgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBmaXJzdEVudHJ5UGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICByZW1vdmVGaWxlQnlQYXRoKHBhdGgpIHtcbiAgICBmaWx0ZXIodGhpcy5hcnJheSwgKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gRmlsZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMubWFwRW50cnkoKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnk7IC8vL1xuXG4gICAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZmlsZVBhdGhzLCBlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBmaWxlUGF0aHMucHVzaChmaWxlUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZGlyZWN0b3J5UGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGVudHJ5LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnkuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGhzLnB1c2goZGlyZWN0b3J5UGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZmlsZSk7XG4gIH1cblxuICBtYXBFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRW50cnkoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUVudHJ5KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IGVudHJpZXNKU09OLm1hcCgoZW50cnlKU09OKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHsgZmlsZXMgfSA9anNaaXAsXG4gICAgICAgICAganNaaXBFbnRyaWVzID0gZmlsZXMsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlOYW1lcyA9IE9iamVjdC5rZXlzKGpzWmlwRW50cmllcyk7XG5cbiAgICBmb3JFYWNoKGpzWmlwRW50cnlOYW1lcywgKGpzWmlwRW50cnlOYW1lLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgRGlyZWN0b3J5LmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIChkaXJlY3RvcnkpID0+IHtcbiAgICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKChzdWJFbnRyeU5hbWUpID0+IHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLFxuICAgICAgICAgIGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzID0gIWxvYWRPbmx5UmVjb2duaXNlZEZpbGVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xuXG4gICAgICAgIGlmIChsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgZmlsZVJlY29nbmlzZWRGaWxlID0gZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgIGlmIChmaWxlUmVjb2duaXNlZEZpbGUgfHwgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==