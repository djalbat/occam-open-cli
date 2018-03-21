'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var File = require('./file'),
    Directory = require('./directory'),
    nameUtilities = require('./utilities/name');

var pathUtilities = necessary.pathUtilities,
    arrayUtilities = necessary.arrayUtilities,
    asynchronousUtilities = necessary.asynchronousUtilities,
    fileSystemUtilities = necessary.fileSystemUtilities,
    first = arrayUtilities.first,
    forEach = asynchronousUtilities.forEach,
    readDirectory = fileSystemUtilities.readDirectory,
    isNameHiddenName = nameUtilities.isNameHiddenName,
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

      if (firstEntry !== undefined) {
        var firstEntryPath = firstEntry.getPath();

        topmostDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);

        if (topmostDirectoryName === null) {
          topmostDirectoryName = firstEntryPath;
        }
      }

      return topmostDirectoryName;
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


      function done() {
        var entries = new Entries(array);

        callback(entries);
      }

      forEach(jsZipEntryNames, function (jsZipEntryName, next) {
        var jsZipEntry = jsZipEntries[jsZipEntryName];

        var entry = void 0;

        Directory.fromJSZipEntry(jsZipEntry, function (directory) {
          if (directory !== null) {
            entry = directory; ///

            array.push(entry); ///

            next();
          } else {
            File.fromJSZipEntry(jsZipEntry, function (file) {
              if (file !== null) {
                entry = file;

                array.push(entry); ///
              }

              next();
            });
          }
        });
      }, done);
    }
  }, {
    key: 'fromTopmostDirectoryName',
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
      var array = [],
          relativeDirectoryPath = topmostDirectoryName; ///

      entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

      var entries = new Entries(array);

      return entries;
    }
  }]);

  return Entries;
}();

module.exports = Entries;

function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach(function (subEntryName) {
    var subEntryNameHiddenName = isNameHiddenName(subEntryName),
        subEntryNameNotHiddenName = !subEntryNameHiddenName,
        loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;

    if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
      var entry = void 0;

      var path = concatenatePaths(relativeDirectoryPath, subEntryName),
          directory = Directory.fromPath(path, projectsDirectoryPath);

      if (directory !== null) {
        var directoryPath = path; ///

        entry = directory; ///

        array.push(entry); ///

        entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories); ///
      } else {
        var file = File.fromPath(path, projectsDirectoryPath);

        if (file !== null) {
          entry = file; ///

          array.push(entry); ///
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwibmFtZVV0aWxpdGllcyIsInBhdGhVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJmaXJzdCIsImZvckVhY2giLCJyZWFkRGlyZWN0b3J5IiwiaXNOYW1lSGlkZGVuTmFtZSIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwidW5kZWZpbmVkIiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lIiwiZXZlcnkiLCJlbnRyaWVzSlNPTiIsImVudHJ5IiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImZpbGUiLCJmcm9tSlNPTiIsImRpcmVjdG9yeSIsImVudHJpZXMiLCJqc1ppcCIsImZpbGVzIiwianNaaXBFbnRyaWVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImRvbmUiLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJwdXNoIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwic3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSIsImxvYWRIaWRkZW5G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O0FBQ3JCO0FBQ0Y7QUFDRjtBQUNGLEdBN0JEO0FBOEJEIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyksXG4gICAgICBEaXJlY3RvcnkgPSByZXF1aXJlKCcuL2RpcmVjdG9yeScpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKTtcblxuY29uc3QgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyByZWFkRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyBpc05hbWVIaWRkZW5OYW1lIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBmaXJzdEVudHJ5UGF0aCA9IGZpcnN0RW50cnkuZ2V0UGF0aCgpO1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlyc3RFbnRyeVBhdGgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBmaXJzdEVudHJ5UGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICBtYXBFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRW50cnkoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IGVudHJpZXNKU09OLm1hcChmdW5jdGlvbihlbnRyeUpTT04pIHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgeyBmaWxlcyB9ID1qc1ppcCxcbiAgICAgICAgICBqc1ppcEVudHJpZXMgPSBmaWxlcywgLy8vXG4gICAgICAgICAganNaaXBFbnRyeU5hbWVzID0gT2JqZWN0LmtleXMoanNaaXBFbnRyaWVzKTtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgICBjYWxsYmFjayhlbnRyaWVzKTtcbiAgICB9XG5cbiAgICBmb3JFYWNoKGpzWmlwRW50cnlOYW1lcywgZnVuY3Rpb24gKGpzWmlwRW50cnlOYW1lLCBuZXh0KSB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBEaXJlY3RvcnkuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGRpcmVjdG9yeSkge1xuICAgICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRmlsZS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllcztcblxuZnVuY3Rpb24gZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihzdWJFbnRyeU5hbWUpIHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xuXG4gICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cblxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBmaWxlOyAvLy9cblxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19