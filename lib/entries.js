'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('./util'),
    File = require('./file'),
    async = require('./async'),
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

        rootDirectoryName = util.rootDirectoryNameFromPath(firstEntryPath);
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
  var absoluteDirectoryPath = util.combinePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = util.subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath);

  subEntryNames.forEach(function (subEntryName) {
    var entry = void 0;

    var path = util.combinePaths(relativeDirectoryPath, subEntryName),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRmlsZSIsImFzeW5jIiwiRGlyZWN0b3J5IiwiRW50cmllcyIsImFycmF5IiwiZW50cnkiLCJwdXNoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwiZmlyc3QiLCJ1bmRlZmluZWQiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyb290RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiZW50cmllc0pTT04iLCJtYXAiLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwianNaaXAiLCJjYWxsYmFjayIsImpzWmlwRW50cmllcyIsImZpbGVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJkb25lIiwiZm9yRWFjaCIsImpzWmlwRW50cnlOYW1lIiwibmV4dCIsImpzWmlwRW50cnkiLCJmcm9tSlNaaXBFbnRyeSIsImRpcmVjdG9yeSIsImFkZEVudHJ5IiwiZmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsImNvbWJpbmVQYXRocyIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZSIsInBhdGgiLCJkaXJlY3RvcnlQYXRoIiwiZnJvbURpcmVjdG9yeVBhdGgiLCJmaWxlUGF0aCIsImZyb21GaWxlUGF0aCIsImNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLFFBQVIsQ0FEYjtBQUFBLElBRU1FLFFBQVFGLFFBQVEsU0FBUixDQUZkO0FB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QU15QyxPQUFPaEQsS0FBSzRDLFlBQUwsQ0FBa0JMLHFCQUFsQixFQUF5Q1EsWUFBekMsQ0FBYjtBQUFBLFFBQ01FLGdCQUFnQkQsSUFEdEI7QUFBQSxRQUM0QjtBQUN0QmIsZ0JBQVkvQixVQUFVOEMsaUJBQVYsQ0FBNEJELGFBQTVCLEVBQTJDWCxxQkFBM0MsQ0FGbEI7O0FBSUEsUUFBSUgsY0FBYyxJQUFsQixFQUF3QjtBQUN0QjVCLGNBQVE0QixTQUFSLENBRHNCLENBQ0Y7O0FBRXBCUCxjQUFRUSxRQUFSLENBQWlCN0IsS0FBakI7O0FBRUFpQyx1Q0FBaUNaLE9BQWpDLEVBQTBDcUIsYUFBMUMsRUFBeURYLHFCQUF6RCxFQUxzQixDQUsyRDtBQUNsRixLQU5ELE1BTU87QUFDTCxVQUFNYSxXQUFXRixhQUFqQjtBQUFBLFVBQWdDO0FBQzFCWixhQUFPbkMsS0FBS2tELFlBQUwsQ0FBa0JELFFBQWxCLEVBQTRCYixxQkFBNUIsQ0FEYjtBQUFBLFVBRU1lLFVBQVVoQixLQUFLaUIsVUFBTCxFQUZoQjs7QUFJQSxVQUFJRCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCOUMsZ0JBQVE4QixJQUFSOztBQUVBVCxnQkFBUVEsUUFBUixDQUFpQjdCLEtBQWpCO0FBQ0Q7QUFDRjtBQUNGLEdBeEJEO0FBeUJEIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKSxcbiAgICAgIEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKSxcbiAgICAgIGFzeW5jID0gcmVxdWlyZSgnLi9hc3luYycpLFxuICAgICAgRGlyZWN0b3J5ID0gcmVxdWlyZSgnLi9kaXJlY3RvcnknKTtcblxuY2xhc3MgRW50cmllcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgfVxuXG4gIGFkZEVudHJ5KGVudHJ5KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGdldFJvb3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCByb290RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHJvb3REaXJlY3RvcnlOYW1lID0gdXRpbC5yb290RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGpzWmlwRW50cmllcyA9IGpzWmlwLmZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcygpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cblxuICAgIGFzeW5jLmZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbiAoanNaaXBFbnRyeU5hbWUsIG5leHQpIHtcbiAgICAgIGNvbnN0IGpzWmlwRW50cnkgPSBqc1ppcEVudHJpZXNbanNaaXBFbnRyeU5hbWVdO1xuXG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZGlyZWN0b3J5KSB7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRmlsZS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb290RGlyZWN0b3J5TmFtZShyb290RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKCksXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gcm9vdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllcztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHV0aWwuc3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goZnVuY3Rpb24oc3ViRW50cnlOYW1lKSB7XG4gICAgbGV0IGVudHJ5O1xuICAgIFxuICAgIGNvbnN0IHBhdGggPSB1dGlsLmNvbWJpbmVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHBhdGgsIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGRpcmVjdG9yeVBhdGgsIC8vXG4gICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19