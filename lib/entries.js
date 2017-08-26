'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var File = require('./file'),
    Directory = require('./directory'),
    pathUtilities = require('./utilities/path');

var path = necessary.path,
    array = necessary.array,
    async = necessary.async,
    fileSystem = necessary.fileSystem,
    first = array.first,
    readDirectory = fileSystem.readDirectory,
    concatenatePaths = path.concatenatePaths,
    topmostDirectoryNameFromPath = path.topmostDirectoryNameFromPath;

var Entries = function () {
  function Entries() {
    _classCallCheck(this, Entries);

    this.array = [];
  }

  _createClass(Entries, [{
    key: 'addEntry',
    value: function addEntry(entry) {
      this.array.push(entry);
    }
  }, {
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
    key: 'fromJSZip',
    value: function fromJSZip(jsZip, callback) {
      var jsZipEntries = jsZip.files,
          ///
      jsZipEntryNames = Object.keys(jsZipEntries),
          entries = new Entries();

      function done() {
        callback(entries);
      }

      async.forEach(jsZipEntryNames, function (jsZipEntryName, next) {
        var jsZipEntry = jsZipEntries[jsZipEntryName];

        var entry = void 0;

        Directory.fromJSZipEntry(jsZipEntry, function (directory) {
          if (directory !== null) {
            entry = directory; ///

            entries.addEntry(entry);

            next();
          } else {
            File.fromJSZipEntry(jsZipEntry, function (file) {
              if (file !== null) {
                entry = file;

                entries.addEntry(entry);
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
      var entries = new Entries(),
          relativeDirectoryPath = topmostDirectoryName; ///

      entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

      return entries;
    }
  }]);

  return Entries;
}();

module.exports = Entries;

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach(function (subEntryName) {
    var subEntryNameHiddenName = pathUtilities.isNameHiddenName(subEntryName);

    if (!subEntryNameHiddenName || !doNotLoadHiddenFilesAndDirectories) {
      var entry = void 0;

      var _path = concatenatePaths(relativeDirectoryPath, subEntryName),
          directoryPath = _path,
          ///
      directory = Directory.fromDirectoryPath(directoryPath, projectsDirectoryPath);

      if (directory !== null) {
        entry = directory; ///

        entries.addEntry(entry);

        entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories); ///
      } else {
        var filePath = directoryPath,
            //
        file = File.fromFilePath(filePath, projectsDirectoryPath);

        if (file !== null) {
          entry = file;

          entries.addEntry(entry);
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwicGF0aFV0aWxpdGllcyIsInBhdGgiLCJhcnJheSIsImFzeW5jIiwiZmlsZVN5c3RlbSIsImZpcnN0IiwicmVhZERpcmVjdG9yeSIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImVudHJ5IiwicHVzaCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsInVuZGVmaW5lZCIsImZpcnN0RW50cnlQYXRoIiwiZ2V0UGF0aCIsImVudHJpZXNKU09OIiwibWFwIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImpzWmlwIiwiY2FsbGJhY2siLCJqc1ppcEVudHJpZXMiLCJmaWxlcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwiZG9uZSIsImZvckVhY2giLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJkaXJlY3RvcnkiLCJhZGRFbnRyeSIsImZpbGUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJpc05hbWVIaWRkZW5OYW1lIiwiZGlyZWN0b3J5UGF0aCIsImZyb21EaXJlY3RvcnlQYXRoIiwiZmlsZVBhdGgiLCJmcm9tRmlsZVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFR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Q0Y7QUFDRjtBQUNGLEdBM0JEO0FBNEJEIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyksXG4gICAgICBEaXJlY3RvcnkgPSByZXF1aXJlKCcuL2RpcmVjdG9yeScpLFxuICAgICAgcGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3BhdGgnKTtcblxuY29uc3QgeyBwYXRoLCBhcnJheSwgYXN5bmMsIGZpbGVTeXN0ZW0gfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5LFxuICAgICAgeyByZWFkRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkRW50cnkoZW50cnkpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZW50cnkpO1xuICB9XG5cbiAgZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKSB7XG4gICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZmlyc3RFbnRyeVBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBqc1ppcEVudHJpZXMgPSBqc1ppcC5maWxlcywgLy8vXG4gICAgICAgICAganNaaXBFbnRyeU5hbWVzID0gT2JqZWN0LmtleXMoanNaaXBFbnRyaWVzKSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoKTtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBjYWxsYmFjayhlbnRyaWVzKTtcbiAgICB9XG5cbiAgICBhc3luYy5mb3JFYWNoKGpzWmlwRW50cnlOYW1lcywgZnVuY3Rpb24gKGpzWmlwRW50cnlOYW1lLCBuZXh0KSB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBEaXJlY3RvcnkuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGRpcmVjdG9yeSkge1xuICAgICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcygpLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihzdWJFbnRyeU5hbWUpIHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gcGF0aFV0aWxpdGllcy5pc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSk7XG5cbiAgICBpZiAoIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgfHwgIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHBhdGgsIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcblxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCBkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZGlyZWN0b3J5UGF0aCwgLy9cbiAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19