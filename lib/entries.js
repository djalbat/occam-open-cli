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

      async.forEach(jsZipEntryNames, function (jsZipEntryName, index, next) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwicGF0aFV0aWxpdGllcyIsInBhdGgiLCJhcnJheSIsImFzeW5jIiwiZmlsZVN5c3RlbSIsImZpcnN0IiwicmVhZERpcmVjdG9yeSIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImVudHJ5IiwicHVzaCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsInVuZGVmaW5lZCIsImZpcnN0RW50cnlQYXRoIiwiZ2V0UGF0aCIsImVudHJpZXNKU09OIiwibWFwIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImpzWmlwIiwiY2FsbGJhY2siLCJqc1ppcEVudHJpZXMiLCJmaWxlcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwiZG9uZSIsImZvckVhY2giLCJqc1ppcEVudHJ5TmFtZSIsImluZGV4IiwibmV4dCIsImpzWmlwRW50cnkiLCJmcm9tSlNaaXBFbnRyeSIsImRpcmVjdG9yeSIsImFkZEVudHJ5IiwiZmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsImlzTmFtZUhpZGRlbk5hbWUiLCJkaXJlY3RvcnlQYXRoIiwiZnJvbURpcmVjdG9yeVBhdGgiLCJmaWxlUGF0aCIsImZyb21GaWxlUGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlB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bnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgRGlyZWN0b3J5ID0gcmVxdWlyZSgnLi9kaXJlY3RvcnknKSxcbiAgICAgIHBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9wYXRoJyk7XG5cbmNvbnN0IHsgcGF0aCwgYXJyYXksIGFzeW5jLCBmaWxlU3lzdGVtIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheSxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbSxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aDtcblxuY2xhc3MgRW50cmllcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgfVxuXG4gIGFkZEVudHJ5KGVudHJ5KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBqc1ppcEVudHJpZXMgPSBqc1ppcC5maWxlcywgLy8vXG4gICAgICAgICAganNaaXBFbnRyeU5hbWVzID0gT2JqZWN0LmtleXMoanNaaXBFbnRyaWVzKSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoKTtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBjYWxsYmFjayhlbnRyaWVzKTtcbiAgICB9XG5cbiAgICBhc3luYy5mb3JFYWNoKGpzWmlwRW50cnlOYW1lcywgZnVuY3Rpb24gKGpzWmlwRW50cnlOYW1lLCBpbmRleCwgbmV4dCkge1xuICAgICAgY29uc3QganNaaXBFbnRyeSA9IGpzWmlwRW50cmllc1tqc1ppcEVudHJ5TmFtZV07XG5cbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgRGlyZWN0b3J5LmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uIChkaXJlY3RvcnkpIHtcbiAgICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBGaWxlLmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbnRyeSA9IGZpbGU7XG5cbiAgICAgICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoKSxcbiAgICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuXG4gICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbnRyaWVzO1xuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goZnVuY3Rpb24oc3ViRW50cnlOYW1lKSB7XG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IHBhdGhVdGlsaXRpZXMuaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpO1xuXG4gICAgaWYgKCFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIHx8ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBwYXRoLCAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGRpcmVjdG9yeVBhdGgsIC8vXG4gICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21GaWxlUGF0aChmaWxlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==