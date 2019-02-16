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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwibmFtZVV0aWxpdGllcyIsImZpbGVQYXRoVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwiZm9yRWFjaCIsInJlYWREaXJlY3RvcnkiLCJpc05hbWVIaWRkZW5OYW1lIiwiaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZmlsZXMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJldmVyeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiZGlyZWN0b3J5IiwiZW50cmllcyIsImpzWmlwIiwianNaaXBFbnRyaWVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImpzWmlwRW50cnlOYW1lIiwibmV4dCIsImpzWmlwRW50cnkiLCJmcm9tSlNaaXBFbnRyeSIsImRvbmUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMiLCJkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJhbGxvd1VucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tUGF0aCIsImRpcmVjdG9yeVBhdGgiLCJmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImZpbGVSZWNvZ25pc2VkRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsYUFBUixDQURsQjtBQUFBLElBRU1HLGdCQUFnQkgsUUFBUSxrQkFBUixDQUZ0QjtBQUFBLElBR01JLG9CQUFvQkosUUFBUSxzQkFBUixDQUgxQjs7SUFLUUssYSxHQUE4RU4sUyxDQUE5RU0sYTtJQUFlQyxjLEdBQStEUCxTLENBQS9ETyxjO0lBQWdCQyxxQixHQUErQ1IsUyxDQUEvQ1EscUI7SUFBdUJDLG1CLEdBQXdCVCxTLENBQXhCUyxtQjtJQUN0REMsSyxHQUFrQkgsYyxDQUFsQkcsSztJQUFPQyxNLEdBQVdKLGMsQ0FBWEksTTtJQUNQQyxPLEdBQVlKLHFCLENBQVpJLE87SUFDQUMsYSxHQUFrQkosbUIsQ0FBbEJJLGE7SUFDQUMsZ0IsR0FBcUJWLGEsQ0FBckJVLGdCO0lBQ0FDLDRCLEdBQWlDVixpQixDQUFqQ1UsNEI7SUFDQUMsZ0IsR0FBbURWLGEsQ0FBbkRVLGdCO0lBQWtCQyw0QixHQUFpQ1gsYSxDQUFqQ1csNEI7O0lBRXBCQyxPO0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7OENBRXlCO0FBQ3hCLFVB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QyxFQUF1RGYscUJBQXZELEVBQThFQyx3QkFBOUUsRUFBd0dDLGlDQUF4RyxFQVRzQixDQVNzSDtBQUM3SSxPQVZELE1BVU87QUFDTCxZQUFNOUIsT0FBTzFCLEtBQUtvRSxRQUFMLENBQWM5QyxJQUFkLEVBQW9CZ0MscUJBQXBCLENBQWI7O0FBRUEsWUFBSTVCLFNBQVMsSUFBYixFQUFtQjtBQUNqQixjQUFNQyxXQUFXRCxLQUFLTCxPQUFMLEVBQWpCO0FBQUEsY0FDTWlELDZCQUE2QnpELDZCQUE2QmMsUUFBN0IsQ0FEbkM7QUFBQSxjQUVNNEMscUJBQXFCRCwwQkFGM0IsQ0FEaUIsQ0FHdUM7O0FBRXhELGNBQUlDLHNCQUFzQkosb0NBQTFCLEVBQWdFO0FBQzlENUMsb0JBQVFHLElBQVIsQ0FEOEQsQ0FDaEQ7O0FBRWRULGtCQUFNYSxJQUFOLENBQVdQLEtBQVgsRUFIOEQsQ0FHMUM7QUFDckI7QUFDRjtBQUNGO0FBQ0Y7QUFDRixHQXRDRDtBQXVDRCIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgRGlyZWN0b3J5ID0gcmVxdWlyZSgnLi9kaXJlY3RvcnknKSxcbiAgICAgIG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyksXG4gICAgICBmaWxlUGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2ZpbGVQYXRoJyk7XG5cbmNvbnN0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyByZWFkRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyBpc05hbWVIaWRkZW5OYW1lIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRW50cmllcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKSB7XG4gICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkpIHsgLy8vXG4gICAgICBjb25zdCBmaXJzdEVudHJ5UGF0aCA9IGZpcnN0RW50cnkuZ2V0UGF0aCgpO1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlyc3RFbnRyeVBhdGgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBmaXJzdEVudHJ5UGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICByZW1vdmVGaWxlQnlQYXRoKHBhdGgpIHtcbiAgICBmaWx0ZXIodGhpcy5hcnJheSwgZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLnJlZHVjZUVudHJ5KGZ1bmN0aW9uKGZpbGVzLCBlbnRyeSkge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5OyAvLy9cblxuICAgICAgICBmaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGZpbGUpO1xuICB9XG5cbiAgbWFwRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5RW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaEVudHJ5KGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VFbnRyeShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IGVudHJpZXNKU09OLm1hcChmdW5jdGlvbihlbnRyeUpTT04pIHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgeyBmaWxlcyB9ID1qc1ppcCxcbiAgICAgICAgICBqc1ppcEVudHJpZXMgPSBmaWxlcywgLy8vXG4gICAgICAgICAganNaaXBFbnRyeU5hbWVzID0gT2JqZWN0LmtleXMoanNaaXBFbnRyaWVzKTtcblxuICAgIGZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbihqc1ppcEVudHJ5TmFtZSwgbmV4dCkge1xuICAgICAgY29uc3QganNaaXBFbnRyeSA9IGpzWmlwRW50cmllc1tqc1ppcEVudHJ5TmFtZV07XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbihkaXJlY3RvcnkpIHtcbiAgICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZG9uZSk7XG5cbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgICAgY2FsbGJhY2soZW50cmllcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllcztcblxuZnVuY3Rpb24gZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goZnVuY3Rpb24oc3ViRW50cnlOYW1lKSB7XG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXG4gICAgICAgICAgYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyxcbiAgICAgICAgICBhbGxvd1VucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoOyAvLy9cblxuICAgICAgICBpZiAoYWxsb3dVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggPSBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICBmaWxlUmVjb2duaXNlZEZpbGUgPSBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgaWYgKGZpbGVSZWNvZ25pc2VkRmlsZSB8fCBhbGxvd1VucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==