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

          files.add(file);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRmlsZXMiLCJEaXJlY3RvcnkiLCJuYW1lVXRpbGl0aWVzIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiYXJyYXlVdGlsaXRpZXMiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiZmlyc3QiLCJmaWx0ZXIiLCJmb3JFYWNoIiwicmVhZERpcmVjdG9yeSIsImlzTmFtZUhpZGRlbk5hbWUiLCJpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJFbnRyaWVzIiwiYXJyYXkiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJwYXRoIiwiZW50cnkiLCJlbnRyeUZpbGUiLCJpc0ZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJmaWxlcyIsImZyb21Ob3RoaW5nIiwibWFwRW50cnkiLCJhZGQiLCJmaWxlUGF0aHMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJkaXJlY3RvcnlQYXRocyIsImVudHJ5RGlyZWN0b3J5IiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJkaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lIiwiZXZlcnkiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJlbnRyaWVzSlNPTiIsImVudHJ5SlNPTiIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImVudHJpZXMiLCJqc1ppcCIsImpzWmlwRW50cmllcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJkb25lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIiwibG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21QYXRoIiwiZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJmaWxlUmVjb2duaXNlZEZpbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNRSxRQUFRRixRQUFRLFNBQVIsQ0FEZDtBQUFBLElBRU1HLFlBQVlILFFBQVEsYUFBUixDQUZsQjtBQUFBLElBR01JLGdCQUFnQkosUUFBUSxrQkFBUixDQUh0QjtBQUFBLElBSU1LLG9CQUFvQkwsUUFBUSxzQkFBUixDQUoxQjs7SUFNUU0sYSxHQUE4RVAsUyxDQUE5RU8sYTtJQUFlQyxjLEdBQStEUixTLENBQS9EUSxjO0lBQWdCQyxxQixHQUErQ1QsUyxDQUEvQ1MscUI7SUFBdUJDLG1CLEdBQXdCVixTLENBQXhCVSxtQjtJQUN0REMsSyxHQUFrQkgsYyxDQUFsQkcsSztJQUFPQyxNLEdBQVdKLGMsQ0FBWEksTTtJQUNQQyxPLEdBQVlKLHFCLENBQVpJLE87SUFDQUMsYSxHQUFrQkosbUIsQ0FBbEJJLGE7SUFDQUMsZ0IsR0FBcUJWLGEsQ0FBckJVLGdCO0lBQ0FDLDRCLEdBQWlDVixpQixDQUFqQ1UsNEI7SUFDQUMsZ0IsR0FBbURWLGEs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V0QsS0FBS0wsT0FBTCxFQUFqQjtBQUFBLGNBQ013RCw2QkFBNkJoRSw2QkFBNkJjLFFBQTdCLENBRG5DO0FBQUEsY0FFTW1ELHFCQUFxQkQsMEJBRjNCLENBRGlCLENBR3VDOztBQUV4RCxjQUFJQyxzQkFBc0JILG1DQUExQixFQUErRDtBQUM3RHBELG9CQUFRRyxJQUFSLENBRDZELENBQy9DOztBQUVkVCxrQkFBTWlCLElBQU4sQ0FBV1gsS0FBWCxFQUg2RCxDQUd6QztBQUNyQjtBQUNGO0FBQ0Y7QUFDRjtBQUNGLEdBdENEO0FBdUNEIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyksXG4gICAgICBGaWxlcyA9IHJlcXVpcmUoJy4vZmlsZXMnKSxcbiAgICAgIERpcmVjdG9yeSA9IHJlcXVpcmUoJy4vZGlyZWN0b3J5JyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGFycmF5VXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5KSB7IC8vL1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZmlyc3RFbnRyeVBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgcmVtb3ZlRmlsZUJ5UGF0aChwYXRoKSB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gRmlsZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMubWFwRW50cnkoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkKGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMucmVkdWNlRW50cnkoZnVuY3Rpb24oZmlsZVBhdGhzLCBlbnRyeSkge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBmaWxlUGF0aHMucHVzaChmaWxlUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeShmdW5jdGlvbihkaXJlY3RvcnlQYXRocywgZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBlbnRyaWVzSlNPTi5tYXAoZnVuY3Rpb24oZW50cnlKU09OKSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHsgZmlsZXMgfSA9anNaaXAsXG4gICAgICAgICAganNaaXBFbnRyaWVzID0gZmlsZXMsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlOYW1lcyA9IE9iamVjdC5rZXlzKGpzWmlwRW50cmllcyk7XG5cbiAgICBmb3JFYWNoKGpzWmlwRW50cnlOYW1lcywgZnVuY3Rpb24oanNaaXBFbnRyeU5hbWUsIG5leHQpIHtcbiAgICAgIGNvbnN0IGpzWmlwRW50cnkgPSBqc1ppcEVudHJpZXNbanNaaXBFbnRyeU5hbWVdO1xuXG4gICAgICBEaXJlY3RvcnkuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24oZGlyZWN0b3J5KSB7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBGaWxlLmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHN1YkVudHJ5TmFtZSkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSA9ICFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lLFxuICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMsXG4gICAgICAgICAgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXM7XG5cbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gcGF0aDsgLy8vXG5cbiAgICAgICAgaWYgKGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggPSBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICBmaWxlUmVjb2duaXNlZEZpbGUgPSBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgaWYgKGZpbGVSZWNvZ25pc2VkRmlsZSB8fCBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICAgICAgZW50cnkgPSBmaWxlOyAvLy9cblxuICAgICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19