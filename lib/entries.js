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
    isNameHiddenName = pathUtilities.isNameHiddenName,
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
    var subEntryNameHiddenName = isNameHiddenName(subEntryName),
        subEntryNameNotHiddenName = !subEntryNameHiddenName,
        loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;

    if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
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
          entry = file; ///

          entries.addEntry(entry);
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwicGF0aFV0aWxpdGllcyIsInBhdGgiLCJhcnJheSIsImFzeW5jIiwiZmlsZVN5c3RlbSIsImZpcnN0IiwicmVhZERpcmVjdG9yeSIsImlzTmFtZUhpZGRlbk5hbWUiLCJjb25jYXRlbmF0ZVBhdGhzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsIkVudHJpZXMiLCJlbnRyeSIsInB1c2giLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJ1bmRlZmluZWQiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJlbnRyaWVzSlNPTiIsIm1hcCIsImVudHJ5SlNPTiIsInRvSlNPTiIsImpzb24iLCJqc1ppcCIsImNhbGxiYWNrIiwianNaaXBFbnRyaWVzIiwiZmlsZXMiLCJqc1ppcEVudHJ5TmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZW50cmllcyIsImRvbmUiLCJmb3JFYWNoIiwianNaaXBFbnRyeU5hbWUiLCJuZXh0IiwianNaaXBFbnRyeSIsImZyb21KU1ppcEVudHJ5IiwiZGlyZWN0b3J5IiwiYWRkRW50cnkiLCJmaWxlIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwic3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSIsImxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiZGlyZWN0b3J5UGF0aCIsImZyb21EaXJlY3RvcnlQYXRoIiwiZmlsZVBhdGgi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QUFMLENBQWtCRCxRQUFsQixFQUE0QmQscUJBQTVCLENBRGI7O0FBR0EsWUFBSUQsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCNUIsa0JBQVE0QixJQUFSLENBRGlCLENBQ0g7O0FBRWRULGtCQUFRUSxRQUFSLENBQWlCM0IsS0FBakI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQTdCRDtBQThCRCIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgRGlyZWN0b3J5ID0gcmVxdWlyZSgnLi9kaXJlY3RvcnknKSxcbiAgICAgIHBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9wYXRoJyk7XG5cbmNvbnN0IHsgcGF0aCwgYXJyYXksIGFzeW5jLCBmaWxlU3lzdGVtIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheSxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbSxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aDtcblxuY2xhc3MgRW50cmllcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgfVxuXG4gIGFkZEVudHJ5KGVudHJ5KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QganNaaXBFbnRyaWVzID0ganNaaXAuZmlsZXMsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlOYW1lcyA9IE9iamVjdC5rZXlzKGpzWmlwRW50cmllcyksXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKCk7XG5cbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgY2FsbGJhY2soZW50cmllcyk7XG4gICAgfVxuXG4gICAgYXN5bmMuZm9yRWFjaChqc1ppcEVudHJ5TmFtZXMsIGZ1bmN0aW9uIChqc1ppcEVudHJ5TmFtZSwgbmV4dCkge1xuICAgICAgY29uc3QganNaaXBFbnRyeSA9IGpzWmlwRW50cmllc1tqc1ppcEVudHJ5TmFtZV07XG5cbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgRGlyZWN0b3J5LmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uIChkaXJlY3RvcnkpIHtcbiAgICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBGaWxlLmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbnRyeSA9IGZpbGU7XG5cbiAgICAgICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoKSxcbiAgICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuXG4gICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbnRyaWVzO1xuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goZnVuY3Rpb24oc3ViRW50cnlOYW1lKSB7XG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXG4gICAgICAgICAgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcztcblxuICAgIGlmIChzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIHx8IGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBwYXRoLCAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGRpcmVjdG9yeVBhdGgsIC8vXG4gICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21GaWxlUGF0aChmaWxlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=