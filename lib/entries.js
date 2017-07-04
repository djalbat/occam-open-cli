'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var File = require('./file'),
    async = require('./async'),
    pathUtil = require('./util/path'),
    arrayUtil = require('./util/array'),
    Directory = require('./directory');

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
    key: 'getRootDirectoryName',
    value: function getRootDirectoryName() {
      var rootDirectoryName = null;

      var firstEntry = arrayUtil.first(this.array); ///

      if (firstEntry !== undefined) {
        var firstEntryPath = firstEntry.getPath();

        rootDirectoryName = pathUtil.rootDirectoryNameFromPath(firstEntryPath);
      }

      return rootDirectoryName;
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
    key: 'fromRootDirectoryName',
    value: function fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath) {
      var entries = new Entries(),
          relativeDirectoryPath = rootDirectoryName; ///

      entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath);

      return entries;
    }
  }]);

  return Entries;
}();

module.exports = Entries;

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath) {
  var absoluteDirectoryPath = pathUtil.combinePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = pathUtil.subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath);

  subEntryNames.forEach(function (subEntryName) {
    var entry = void 0;

    var path = pathUtil.combinePaths(relativeDirectoryPath, subEntryName),
        directoryPath = path,
        ///
    directory = Directory.fromDirectoryPath(directoryPath, projectsDirectoryPath);

    if (directory !== null) {
      entry = directory; ///

      entries.addEntry(entry);

      entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath); ///
    } else {
      var filePath = directoryPath,
          //
      file = File.fromFilePath(filePath, projectsDirectoryPath);

      if (file !== null) {
        entry = file;

        entries.addEntry(entry);
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIkZpbGUiLCJyZXF1aXJlIiwiYXN5bmMiLCJwYXRoVXRpbCIsImFycmF5VXRpbCIsIkRpcmVjdG9yeSIsIkVudHJpZXMiLCJhcnJheSIsImVudHJ5IiwicHVzaCIsInJvb3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsImZpcnN0IiwidW5kZWZpbmVkIiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicm9vdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsImVudHJpZXNKU09OIiwibWFwIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImpzWmlwIiwiY2FsbGJhY2siLCJqc1ppcEVudHJpZXMiLCJmaWxlcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwiZG9uZSIsImZvckVhY2giLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJkaXJlY3RvcnkiLCJhZGRFbnRyeSIsImZpbGUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJjb21iaW5lUGF0aHMiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWUiLCJwYXRoIiwiZGlyZWN0b3J5UGF0aCIsImZyb21EaXJlY3RvcnlQYXRoIiwiZmlsZVBhdGgiLCJmcm9tRmlsZVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLFFBQVFELFFBQVEsU0FBUixDQURkO0FBQUEsSUFFTUUsV0FBV0YsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFH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c0JMLHFCQUF0QixFQUE2Q1EsWUFBN0MsQ0FBYjtBQUFBLFFBQ01FLGdCQUFnQkQsSUFEdEI7QUFBQSxRQUM0QjtBQUN0QmIsZ0JBQVkvQixVQUFVOEMsaUJBQVYsQ0FBNEJELGFBQTVCLEVBQTJDWCxxQkFBM0MsQ0FGbEI7O0FBSUEsUUFBSUgsY0FBYyxJQUFsQixFQUF3QjtBQUN0QjVCLGNBQVE0QixTQUFSLENBRHNCLENBQ0Y7O0FBRXBCUCxjQUFRUSxRQUFSLENBQWlCN0IsS0FBakI7O0FBRUFpQyx1Q0FBaUNaLE9BQWpDLEVBQTBDcUIsYUFBMUMsRUFBeURYLHFCQUF6RCxFQUxzQixDQUsyRDtBQUNsRixLQU5ELE1BTU87QUFDTCxVQUFNYSxXQUFXRixhQUFqQjtBQUFBLFVBQWdDO0FBQzFCWixhQUFPdEMsS0FBS3FELFlBQUwsQ0FBa0JELFFBQWxCLEVBQTRCYixxQkFBNUIsQ0FEYjs7QUFHQSxVQUFJRCxTQUFTLElBQWIsRUFBbUI7QUFDakI5QixnQkFBUThCLElBQVI7O0FBRUFULGdCQUFRUSxRQUFSLENBQWlCN0IsS0FBakI7QUFDRDtBQUNGO0FBQ0YsR0F2QkQ7QUF3QkQiLCJmaWxlIjoiZW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgYXN5bmMgPSByZXF1aXJlKCcuL2FzeW5jJyksXG4gICAgICBwYXRoVXRpbCA9IHJlcXVpcmUoJy4vdXRpbC9wYXRoJyksXG4gICAgICBhcnJheVV0aWwgPSByZXF1aXJlKCcuL3V0aWwvYXJyYXknKSxcbiAgICAgIERpcmVjdG9yeSA9IHJlcXVpcmUoJy4vZGlyZWN0b3J5Jyk7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRFbnRyeShlbnRyeSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChlbnRyeSk7XG4gIH1cblxuICBnZXRSb290RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgcm9vdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBhcnJheVV0aWwuZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgcm9vdERpcmVjdG9yeU5hbWUgPSBwYXRoVXRpbC5yb290RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGpzWmlwRW50cmllcyA9IGpzWmlwLmZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcygpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cblxuICAgIGFzeW5jLmZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbiAoanNaaXBFbnRyeU5hbWUsIG5leHQpIHtcbiAgICAgIGNvbnN0IGpzWmlwRW50cnkgPSBqc1ppcEVudHJpZXNbanNaaXBFbnRyeU5hbWVdO1xuXG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZGlyZWN0b3J5KSB7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRmlsZS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb290RGlyZWN0b3J5TmFtZShyb290RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKCksXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gcm9vdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllcztcblxuZnVuY3Rpb24gZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHBhdGhVdGlsLnN1YkVudHJ5TmFtZXNGcm9tQWJzb2x1dGVEaXJlY3RvcnlQYXRoKGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHN1YkVudHJ5TmFtZSkge1xuICAgIGxldCBlbnRyeTtcbiAgICBcbiAgICBjb25zdCBwYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gcGF0aCwgLy8vXG4gICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcblxuICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZGlyZWN0b3J5UGF0aCwgLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21GaWxlUGF0aChmaWxlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcbiAgICAgIFxuICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=