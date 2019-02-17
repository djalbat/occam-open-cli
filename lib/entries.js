'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var File = require('./file'),
    Files = require('./files'),
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
          }
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRmlsZXMiLCJEaXJlY3RvcnkiLCJuYW1lVXRpbGl0aWVzIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiYXJyYXlVdGlsaXRpZXMiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiZmlyc3QiLCJmaWx0ZXIiLCJmb3JFYWNoIiwicmVhZERpcmVjdG9yeSIsImlzTmFtZUhpZGRlbk5hbWUiLCJpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJFbnRyaWVzIiwiYXJyYXkiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJwYXRoIiwiZW50cnkiLCJlbnRyeUZpbGUiLCJpc0ZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJmaWxlcyIsImZyb21Ob3RoaW5nIiwibWFwRW50cnkiLCJhZGRGaWxlIiwiZmlsZVBhdGhzIiwicmVkdWNlRW50cnkiLCJwdXNoIiwiZGlyZWN0b3J5UGF0aHMiLCJlbnRyeURpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwibWFwIiwic29tZSIsImV2ZXJ5IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZW50cmllc0pTT04iLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJlbnRyaWVzIiwianNaaXAiLCJqc1ppcEVudHJpZXMiLCJqc1ppcEVudHJ5TmFtZXMiLCJPYmplY3QiLCJrZXlzIiwianNaaXBFbnRyeU5hbWUiLCJuZXh0IiwianNaaXBFbnRyeSIsImZyb21KU1ppcEVudHJ5IiwiZG9uZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImxvYWRPbmx5UmVjb2duaXNlZEZpbGVzIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwic3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSIsImxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwibG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tUGF0aCIsImZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiZmlsZVJlY29nbmlzZWRGaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUUsUUFBUUYsUUFBUSxTQUFSLENBRGQ7QUFBQSxJQUVNRyxZQUFZSCxRQUFRLGFBQVIsQ0FGbEI7QUFBQSxJQUdNSSxnQkFBZ0JKLFFBQVEsa0JBQVIsQ0FIdEI7QUFBQSxJQUlNSyxvQkFBb0JMLFFBQVEsc0JBQVIsQ0FKMUI7O0lBTVFNLGEsR0FBOEVQLFMsQ0FBOUVPLGE7SUFBZUMsYyxHQUErRFIsUyxDQUEvRFEsYztJQUFnQkMscUIsR0FBK0NULFMsQ0FBL0NTLHFCO0lBQXVCQyxtQixHQUF3QlYsUyxDQUF4QlUsbUI7SUFDdERDLEssR0FBa0JILGMsQ0FBbEJHLEs7SUFBT0MsTSxHQUFXSixjLENBQVhJLE07SUFDUEMsTyxHQUFZSixxQixDQUFaSSxPO0lBQ0FDLGEsR0FBa0JKLG1CLENBQWxCSSxhO0lBQ0FDLGdCLEdBQXFCVixhLENBQXJCVSxnQjtJQUNBQyw0QixHQUFpQ1YsaUIsQ0FBakNVLDRCO0lBQ0FDLGdCLEdBQW1E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LFdBQVdELEtBQUtMLE9BQUwsRUFBakI7QUFBQSxjQUNNd0QsNkJBQTZCaEUsNkJBQTZCYyxRQUE3QixDQURuQztBQUFBLGNBRU1tRCxxQkFBcUJELDBCQUYzQixDQURpQixDQUd1Qzs7QUFFeEQsY0FBSUMsc0JBQXNCSCxtQ0FBMUIsRUFBK0Q7QUFDN0RwRCxvQkFBUUcsSUFBUixDQUQ2RCxDQUMvQzs7QUFFZFQsa0JBQU1pQixJQUFOLENBQVdYLEtBQVgsRUFINkQsQ0FHekM7QUFDckI7QUFDRjtBQUNGO0FBQ0Y7QUFDRixHQXRDRDtBQXVDRCIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgRmlsZXMgPSByZXF1aXJlKCcuL2ZpbGVzJyksXG4gICAgICBEaXJlY3RvcnkgPSByZXF1aXJlKCcuL2RpcmVjdG9yeScpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKSxcbiAgICAgIGZpbGVQYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZmlsZVBhdGgnKTtcblxuY29uc3QgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IHJlYWREaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IGlzTmFtZUhpZGRlbk5hbWUgfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCBmdW5jdGlvbihlbnRyeSkge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBpZiAoZmlsZVBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IEZpbGVzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLm1hcEVudHJ5KGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnk7IC8vL1xuXG4gICAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeShmdW5jdGlvbihmaWxlUGF0aHMsIGVudHJ5KSB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KGZ1bmN0aW9uKGRpcmVjdG9yeVBhdGhzLCBlbnRyeSkge1xuICAgICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBlbnRyeS5pc0RpcmVjdG9yeSgpO1xuXG4gICAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5ID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5LmdldFBhdGgoKTtcblxuICAgICAgICBkaXJlY3RvcnlQYXRocy5wdXNoKGRpcmVjdG9yeVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGZpbGUpO1xuICB9XG5cbiAgbWFwRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5RW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaEVudHJ5KGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VFbnRyeShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IGVudHJpZXNKU09OLm1hcChmdW5jdGlvbihlbnRyeUpTT04pIHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgeyBmaWxlcyB9ID1qc1ppcCxcbiAgICAgICAgICBqc1ppcEVudHJpZXMgPSBmaWxlcywgLy8vXG4gICAgICAgICAganNaaXBFbnRyeU5hbWVzID0gT2JqZWN0LmtleXMoanNaaXBFbnRyaWVzKTtcblxuICAgIGZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbihqc1ppcEVudHJ5TmFtZSwgbmV4dCkge1xuICAgICAgY29uc3QganNaaXBFbnRyeSA9IGpzWmlwRW50cmllc1tqc1ppcEVudHJ5TmFtZV07XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbihkaXJlY3RvcnkpIHtcbiAgICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZG9uZSk7XG5cbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgICAgY2FsbGJhY2soZW50cmllcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllcztcblxuZnVuY3Rpb24gZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goZnVuY3Rpb24oc3ViRW50cnlOYW1lKSB7XG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXG4gICAgICAgICAgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyxcbiAgICAgICAgICBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyA9ICFsb2FkT25seVJlY29nbmlzZWRGaWxlcztcblxuICAgIGlmIChzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIHx8IGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoOyAvLy9cblxuICAgICAgICBpZiAobG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCBkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCA9IGlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgIGZpbGVSZWNvZ25pc2VkRmlsZSA9IGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICBpZiAoZmlsZVJlY29nbmlzZWRGaWxlIHx8IGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgICBlbnRyeSA9IGZpbGU7IC8vL1xuXG4gICAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=