'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var File = require('./file'),
    async = require('./async'),
    pathUtil = require('./util/path'),
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

      var firstEntry = first(this.array); ///

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

function first(array) {
  return array[0];
}

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
      file = File.fromFilePath(filePath, projectsDirectoryPath),
          content = file.getContent();

      if (content !== null) {
        entry = file;

        entries.addEntry(entry);
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIkZpbGUiLCJyZXF1aXJlIiwiYXN5bmMiLCJwYXRoVXRpbCIsIkRpcmVjdG9yeSIsIkVudHJpZXMiLCJhcnJheSIsImVudHJ5IiwicHVzaCIsInJvb3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsImZpcnN0IiwidW5kZWZpbmVkIiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicm9vdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsImVudHJpZXNKU09OIiwibWFwIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImpzWmlwIiwiY2FsbGJhY2siLCJqc1ppcEVudHJpZXMiLCJmaWxlcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwiZG9uZSIsImZvckVhY2giLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJkaXJlY3RvcnkiLCJhZGRFbnRyeSIsImZpbGUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJjb21iaW5lUGF0aHMiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWUiLCJwYXRoIiwiZGlyZWN0b3J5UGF0aCIsImZyb21EaXJlY3RvcnlQYXRoIiwiZmlsZVBhdGgiLCJmcm9tRmlsZVBhdGgiLCJjb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxTQUFSLENBRGQ7QUFBQSxJQUVNRSxXQUFXRixRQUFRLGFBQVIsQ0FG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RUEsUUFBTXlDLE9BQU83QyxTQUFTeUMsWUFBVCxDQUFzQkwscUJBQXRCLEVBQTZDUSxZQUE3QyxDQUFiO0FBQUEsUUFDTUUsZ0JBQWdCRCxJQUR0QjtBQUFBLFFBQzRCO0FBQ3RCYixnQkFBWS9CLFVBQVU4QyxpQkFBVixDQUE0QkQsYUFBNUIsRUFBMkNYLHFCQUEzQyxDQUZsQjs7QUFJQSxRQUFJSCxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCNUIsY0FBUTRCLFNBQVIsQ0FEc0IsQ0FDRjs7QUFFcEJQLGNBQVFRLFFBQVIsQ0FBaUI3QixLQUFqQjs7QUFFQWlDLHVDQUFpQ1osT0FBakMsRUFBMENxQixhQUExQyxFQUF5RFgscUJBQXpELEVBTHNCLENBSzJEO0FBQ2xGLEtBTkQsTUFNTztBQUNMLFVBQU1hLFdBQVdGLGFBQWpCO0FBQUEsVUFBZ0M7QUFDMUJaLGFBQU9yQyxLQUFLb0QsWUFBTCxDQUFrQkQsUUFBbEIsRUFBNEJiLHFCQUE1QixDQURiO0FBQUEsVUFFTWUsVUFBVWhCLEtBQUtpQixVQUFMLEVBRmhCOztBQUlBLFVBQUlELFlBQVksSUFBaEIsRUFBc0I7QUFDcEI5QyxnQkFBUThCLElBQVI7O0FBRUFULGdCQUFRUSxRQUFSLENBQWlCN0IsS0FBakI7QUFDRDtBQUNGO0FBQ0YsR0F4QkQ7QUF5QkQiLCJmaWxlIjoiZW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgYXN5bmMgPSByZXF1aXJlKCcuL2FzeW5jJyksXG4gICAgICBwYXRoVXRpbCA9IHJlcXVpcmUoJy4vdXRpbC9wYXRoJyksXG4gICAgICBEaXJlY3RvcnkgPSByZXF1aXJlKCcuL2RpcmVjdG9yeScpO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkRW50cnkoZW50cnkpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZW50cnkpO1xuICB9XG5cbiAgZ2V0Um9vdERpcmVjdG9yeU5hbWUoKSB7XG4gICAgbGV0IHJvb3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgcm9vdERpcmVjdG9yeU5hbWUgPSBwYXRoVXRpbC5yb290RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGpzWmlwRW50cmllcyA9IGpzWmlwLmZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcygpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cblxuICAgIGFzeW5jLmZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbiAoanNaaXBFbnRyeU5hbWUsIG5leHQpIHtcbiAgICAgIGNvbnN0IGpzWmlwRW50cnkgPSBqc1ppcEVudHJpZXNbanNaaXBFbnRyeU5hbWVdO1xuXG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZGlyZWN0b3J5KSB7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRmlsZS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb290RGlyZWN0b3J5TmFtZShyb290RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKCksXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gcm9vdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllcztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSBwYXRoVXRpbC5zdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihzdWJFbnRyeU5hbWUpIHtcbiAgICBsZXQgZW50cnk7XG4gICAgXG4gICAgY29uc3QgcGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHBhdGgsIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGRpcmVjdG9yeVBhdGgsIC8vXG4gICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19