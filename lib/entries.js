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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwibmFtZVV0aWxpdGllcyIsImZpbGVQYXRoVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwiZm9yRWFjaCIsInJlYWREaXJlY3RvcnkiLCJpc05hbWVIaWRkZW5OYW1lIiwiaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZmlsZXMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJkaXJlY3RvcmllcyIsImVudHJ5RGlyZWN0b3J5IiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJldmVyeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiZW50cmllcyIsImpzWmlwIiwianNaaXBFbnRyaWVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImpzWmlwRW50cnlOYW1lIiwibmV4dCIsImpzWmlwRW50cnkiLCJmcm9tSlNaaXBFbnRyeSIsImRvbmUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwiZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJmaWxlUmVjb2duaXNlZEZpbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGFBQVIsQ0FEbEI7QUFBQSxJQUVNRyxnQkFBZ0JILFFBQVEsa0JBQVIsQ0FGdEI7QUFBQSxJQUdNSSxvQkFBb0JKLFFBQVEsc0JBQVIsQ0FIMUI7O0lBS1FLLGEsR0FBOEVOLFMsQ0FBOUVNLGE7SUFBZUMsYyxHQUErRFAsUyxDQUEvRE8sYztJQUFnQkMscUIsR0FBK0NSLFMsQ0FBL0NRLHFCO0lBQXVCQyxtQixHQUF3QlQsUyxDQUF4QlMsbUI7SUFDdERDLEssR0FBa0JILGMsQ0FBbEJHLEs7SUFBT0MsTSxHQUFXSixjLENBQVhJLE07SUFDUEMsTyxHQUFZSixxQixDQUFaSSxPO0lBQ0FDLGEsR0FBa0JKLG1CLENBQWxCSSxhO0lBQ0FDLGdCLEdBQXFCVixhLENBQXJCVSxnQjtJQUNBQyw0QixHQUFpQ1YsaUIsQ0FBakNVLDRCO0lBQ0FDLGdCLEdBQW1EVixhLENBQW5EVSxnQjtJQUFrQkMsNEIsR0FBaUNYLGEsQ0FBakNXLDRCOztJQUVwQkMsTztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNB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QUFNRCxPQUFPUixpQkFBaUI4QyxxQkFBakIsRUFBd0NNLFlBQXhDLENBQWI7QUFBQSxVQUNNaEMsWUFBWWpDLFVBQVVzRSxRQUFWLENBQW1CakQsSUFBbkIsRUFBeUJtQyxxQkFBekIsQ0FEbEI7O0FBR0EsVUFBSXZCLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEIsWUFBTXNDLGdCQUFnQmxELElBQXRCLENBRHNCLENBQ007O0FBRTVCLFlBQUlnRCxtQ0FBSixFQUF5QztBQUN2Qy9DLGtCQUFRVyxTQUFSLENBRHVDLENBQ25COztBQUVwQmpCLGdCQUFNYSxJQUFOLENBQVdQLEtBQVgsRUFIdUMsQ0FHbkI7QUFDckI7O0FBRURzQyx5Q0FBaUM1QyxLQUFqQyxFQUF3Q3VELGFBQXhDLEVBQXVEZixxQkFBdkQsRUFBOEVDLHVCQUE5RSxFQUF1R0Msa0NBQXZHLEVBVHNCLENBU3NIO0FBQzdJLE9BVkQsTUFVTztBQUNMLFlBQU1qQyxPQUFPMUIsS0FBS3VFLFFBQUwsQ0FBY2pELElBQWQsRUFBb0JtQyxxQkFBcEIsQ0FBYjs7QUFFQSxZQUFJL0IsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGNBQU1DLFdBQVdELEtBQUtMLE9BQUwsRUFBakI7QUFBQSxjQUNNb0QsNkJBQTZCNUQsNkJBQTZCYyxRQUE3QixDQURuQztBQUFBLGNBRU0rQyxxQkFBcUJELDBCQUYzQixDQURpQixDQUd1Qzs7QUFFeEQsY0FBSUMsc0JBQXNCSixtQ0FBMUIsRUFBK0Q7QUFDN0QvQyxvQkFBUUcsSUFBUixDQUQ2RCxDQUMvQzs7QUFFZFQsa0JBQU1hLElBQU4sQ0FBV1AsS0FBWCxFQUg2RCxDQUd6QztBQUNyQjtBQUNGO0FBQ0Y7QUFDRjtBQUNGLEdBdENEO0FBdUNEIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyksXG4gICAgICBEaXJlY3RvcnkgPSByZXF1aXJlKCcuL2RpcmVjdG9yeScpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKSxcbiAgICAgIGZpbGVQYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZmlsZVBhdGgnKTtcblxuY29uc3QgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IHJlYWREaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IGlzTmFtZUhpZGRlbk5hbWUgfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCBmdW5jdGlvbihlbnRyeSkge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBpZiAoZmlsZVBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMucmVkdWNlRW50cnkoZnVuY3Rpb24oZmlsZXMsIGVudHJ5KSB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnk7IC8vL1xuXG4gICAgICAgIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBnZXREaXJlY3RvcmllcygpIHtcbiAgICBjb25zdCBkaXJlY3RvcmllcyA9IHRoaXMucmVkdWNlRW50cnkoZnVuY3Rpb24oZGlyZWN0b3JpZXMsIGVudHJ5KSB7XG4gICAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGVudHJ5LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZGlyZWN0b3JpZXMucHVzaChkaXJlY3RvcnkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0b3JpZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yaWVzO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGZpbGUpO1xuICB9XG5cbiAgbWFwRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5RW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaEVudHJ5KGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VFbnRyeShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IGVudHJpZXNKU09OLm1hcChmdW5jdGlvbihlbnRyeUpTT04pIHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgeyBmaWxlcyB9ID1qc1ppcCxcbiAgICAgICAgICBqc1ppcEVudHJpZXMgPSBmaWxlcywgLy8vXG4gICAgICAgICAganNaaXBFbnRyeU5hbWVzID0gT2JqZWN0LmtleXMoanNaaXBFbnRyaWVzKTtcblxuICAgIGZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbihqc1ppcEVudHJ5TmFtZSwgbmV4dCkge1xuICAgICAgY29uc3QganNaaXBFbnRyeSA9IGpzWmlwRW50cmllc1tqc1ppcEVudHJ5TmFtZV07XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbihkaXJlY3RvcnkpIHtcbiAgICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZG9uZSk7XG5cbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgICAgY2FsbGJhY2soZW50cmllcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllcztcblxuZnVuY3Rpb24gZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goZnVuY3Rpb24oc3ViRW50cnlOYW1lKSB7XG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXG4gICAgICAgICAgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyxcbiAgICAgICAgICBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyA9ICFsb2FkT25seVJlY29nbmlzZWRGaWxlcztcblxuICAgIGlmIChzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIHx8IGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoOyAvLy9cblxuICAgICAgICBpZiAobG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCBkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCA9IGlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgIGZpbGVSZWNvZ25pc2VkRmlsZSA9IGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICBpZiAoZmlsZVJlY29nbmlzZWRGaWxlIHx8IGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgICBlbnRyeSA9IGZpbGU7IC8vL1xuXG4gICAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=