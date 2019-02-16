'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var File = require('./file'),
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
      var files = this.reduceEntry(function (files, entry) {
        var entryFile = entry.isFile();

        if (entryFile) {
          var file = entry; ///

          files.push(file);
        }

        return files;
      }, []);

      return files;
    }
  }, {
    key: 'getDirectories',
    value: function getDirectories() {
      var directories = this.reduceEntry(function (directories, entry) {
        var entryDirectory = entry.isDirectory();

        if (entryDirectory) {
          var directory = entry; ///

          directories.push(directory);
        }

        return directories;
      }, []);

      return directories;
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
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories) {
      var array = [],
          relativeDirectoryPath = topmostDirectoryName; ///

      entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories);

      var entries = new Entries(array);

      return entries;
    }
  }]);

  return Entries;
}();

module.exports = Entries;

function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories) {
  var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach(function (subEntryName) {
    var subEntryNameHiddenName = isNameHiddenName(subEntryName),
        subEntryNameNotHiddenName = !subEntryNameHiddenName,
        allowHiddenFilesAndDirectories = !disallowHiddenFilesAndDirectories,
        allowUnrecognisedFilesAndDirectories = !allowOnlyRecognisedFiles;

    if (subEntryNameNotHiddenName || allowHiddenFilesAndDirectories) {
      var entry = void 0;

      var path = concatenatePaths(relativeDirectoryPath, subEntryName),
          directory = Directory.fromPath(path, projectsDirectoryPath);

      if (directory !== null) {
        var directoryPath = path; ///

        if (allowUnrecognisedFilesAndDirectories) {
          entry = directory; ///

          array.push(entry); ///
        }

        entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories); ///
      } else {
        var file = File.fromPath(path, projectsDirectoryPath);

        if (file !== null) {
          var filePath = file.getPath(),
              filePathRecognisedFilePath = isFilePathRecognisedFilePath(filePath),
              fileRecognisedFile = filePathRecognisedFilePath; ///

          if (fileRecognisedFile || allowUnrecognisedFilesAndDirectories) {
            entry = file; ///

            array.push(entry); ///
          }
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwibmFtZVV0aWxpdGllcyIsImZpbGVQYXRoVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwiZm9yRWFjaCIsInJlYWREaXJlY3RvcnkiLCJpc05hbWVIaWRkZW5OYW1lIiwiaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZmlsZXMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJkaXJlY3RvcmllcyIsImVudHJ5RGlyZWN0b3J5IiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJldmVyeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiZW50cmllcyIsImpzWmlwIiwianNaaXBFbnRyaWVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImpzWmlwRW50cnlOYW1lIiwibmV4dCIsImpzWmlwRW50cnkiLCJmcm9tSlNaaXBFbnRyeSIsImRvbmUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMiLCJkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJhbGxvd1VucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tUGF0aCIsImRpcmVjdG9yeVBhdGgiLCJmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImZpbGVSZWNvZ25pc2VkRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsYUFBUixDQURsQjtBQUFBLElBRU1HLGdCQUFnQkgsUUFBUSxrQkFBUixDQUZ0QjtBQUFBLElBR01JLG9CQUFvQkosUUFBUSxzQkFBUixDQUgxQjs7SUFLUUssYSxHQUE4RU4sUyxDQUE5RU0sYTtJQUFlQyxjLEdBQStEUCxTLENBQS9ETyxjO0lBQWdCQyxxQixHQUErQ1IsUyxDQUEvQ1EscUI7SUFBdUJDLG1CLEdBQXdCVCxTLENBQXhCUyxtQjtJQUN0REMsSyxHQUFrQkgsYyxDQUFsQkcsSztJQUFPQyxNLEdBQVdKLGMsQ0FBWEksTTtJQUNQQyxPLEdBQVlKLHFCLENBQVpJLE87SUFDQUMsYSxHQUFrQkosbUIsQ0FBbEJJLGE7SUFDQUMsZ0IsR0FBcUJWLGEsQ0FBckJVLGdCO0lBQ0FDLDRCLEdBQWlDVixpQixDQUFqQ1UsNEI7SUFDQUMsZ0IsR0FBbURWLGEsQ0FBbkRVLGdCO0lBQWtCQyw0QixHQUFpQ1gsYSxDQUFqQ1csNEI7O0lBRXBCQyxPO0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIs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LFVBQU1ELE9BQU9SLGlCQUFpQjhDLHFCQUFqQixFQUF3Q00sWUFBeEMsQ0FBYjtBQUFBLFVBQ01oQyxZQUFZakMsVUFBVXNFLFFBQVYsQ0FBbUJqRCxJQUFuQixFQUF5Qm1DLHFCQUF6QixDQURsQjs7QUFHQSxVQUFJdkIsY0FBYyxJQUFsQixFQUF3QjtBQUN0QixZQUFNc0MsZ0JBQWdCbEQsSUFBdEIsQ0FEc0IsQ0FDTTs7QUFFNUIsWUFBSWdELG9DQUFKLEVBQTBDO0FBQ3hDL0Msa0JBQVFXLFNBQVIsQ0FEd0MsQ0FDcEI7O0FBRXBCakIsZ0JBQU1hLElBQU4sQ0FBV1AsS0FBWCxFQUh3QyxDQUdwQjtBQUNyQjs7QUFFRHNDLHlDQUFpQzVDLEtBQWpDLEVBQXdDdUQsYUFBeEMsRUFBdURmLHFCQUF2RCxFQUE4RUMsd0JBQTlFLEVBQXdHQyxpQ0FBeEcsRUFUc0IsQ0FTc0g7QUFDN0ksT0FWRCxNQVVPO0FBQ0wsWUFBTWpDLE9BQU8xQixLQUFLdUUsUUFBTCxDQUFjakQsSUFBZCxFQUFvQm1DLHFCQUFwQixDQUFiOztBQUVBLFlBQUkvQixTQUFTLElBQWIsRUFBbUI7QUFDakIsY0FBTUMsV0FBV0QsS0FBS0wsT0FBTCxFQUFqQjtBQUFBLGNBQ01vRCw2QkFBNkI1RCw2QkFBNkJjLFFBQTdCLENBRG5DO0FBQUEsY0FFTStDLHFCQUFxQkQsMEJBRjNCLENBRGlCLENBR3VDOztBQUV4RCxjQUFJQyxzQkFBc0JKLG9DQUExQixFQUFnRTtBQUM5RC9DLG9CQUFRRyxJQUFSLENBRDhELENBQ2hEOztBQUVkVCxrQkFBTWEsSUFBTixDQUFXUCxLQUFYLEVBSDhELENBRzFDO0FBQ3JCO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsR0F0Q0Q7QUF1Q0QiLCJmaWxlIjoiZW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKSxcbiAgICAgIERpcmVjdG9yeSA9IHJlcXVpcmUoJy4vZGlyZWN0b3J5JyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGFycmF5VXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5KSB7IC8vL1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZmlyc3RFbnRyeVBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgcmVtb3ZlRmlsZUJ5UGF0aChwYXRoKSB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5yZWR1Y2VFbnRyeShmdW5jdGlvbihmaWxlcywgZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMucHVzaChmaWxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldERpcmVjdG9yaWVzKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gdGhpcy5yZWR1Y2VFbnRyeShmdW5jdGlvbihkaXJlY3RvcmllcywgZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5OyAvLy9cblxuICAgICAgICBkaXJlY3Rvcmllcy5wdXNoKGRpcmVjdG9yeSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RvcmllcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3JpZXM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZmlsZSk7XG4gIH1cblxuICBtYXBFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRW50cnkoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUVudHJ5KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKGZ1bmN0aW9uKGVudHJ5SlNPTikge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGVudHJ5SlNPTiwgLy8vXG4gICAgICAgICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGVudHJ5ID0gZmlsZSB8fCBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICB7IGZpbGVzIH0gPWpzWmlwLFxuICAgICAgICAgIGpzWmlwRW50cmllcyA9IGZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpO1xuXG4gICAgZm9yRWFjaChqc1ppcEVudHJ5TmFtZXMsIGZ1bmN0aW9uKGpzWmlwRW50cnlOYW1lLCBuZXh0KSB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgRGlyZWN0b3J5LmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uKGRpcmVjdG9yeSkge1xuICAgICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRmlsZS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IGZpbGU7XG5cbiAgICAgICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgICBjYWxsYmFjayhlbnRyaWVzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuXG4gICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbnRyaWVzO1xuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihzdWJFbnRyeU5hbWUpIHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLFxuICAgICAgICAgIGFsbG93VW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyA9ICFhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXM7XG5cbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xuXG4gICAgICAgIGlmIChhbGxvd1VucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCBkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCA9IGlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgIGZpbGVSZWNvZ25pc2VkRmlsZSA9IGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICBpZiAoZmlsZVJlY29nbmlzZWRGaWxlIHx8IGFsbG93VW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICAgICAgZW50cnkgPSBmaWxlOyAvLy9cblxuICAgICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19