'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var File = require('./file'),
    Directory = require('./directory'),
    pathUtilities = require('./utilities/path');

var array = necessary.array,
    async = necessary.async,
    fileSystem = necessary.fileSystem,
    first = array.first,
    readDirectory = fileSystem.readDirectory,
    _path = path,
    concatenatePaths = _path.concatenatePaths,
    topmostDirectoryNameFromPath = _path.topmostDirectoryNameFromPath;

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

        rootDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);
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
    key: 'fromRootDirectoryName',
    value: function fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
      var entries = new Entries(),
          relativeDirectoryPath = rootDirectoryName; ///

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

      var _path2 = concatenatePaths(relativeDirectoryPath, subEntryName),
          directoryPath = _path2,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwicGF0aFV0aWxpdGllcyIsImFycmF5IiwiYXN5bmMiLCJmaWxlU3lzdGVtIiwiZmlyc3QiLCJyZWFkRGlyZWN0b3J5IiwicGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImVudHJ5IiwicHVzaCIsInJvb3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsInVuZGVmaW5lZCIsImZpcnN0RW50cnlQYXRoIiwiZ2V0UGF0aCIsImVudHJpZXNKU09OIiwibWFwIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImpzWmlwIiwiY2FsbGJhY2siLCJqc1ppcEVudHJpZXMiLCJmaWxlcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwiZG9uZSIsImZvckVhY2giLCJqc1ppcEVudHJ5TmFtZSIsImluZGV4IiwibmV4dCIsImpzWmlwRW50cnkiLCJmcm9tSlNaaXBFbnRyeSIsImRpcmVjdG9yeSIsImFkZEVudHJ5IiwiZmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsImlzTmFtZUhpZGRlbk5hbWUiLCJkaXJlY3RvcnlQYXRoIiwiZnJvbURpcmVjdG9yeVBhdGgiLCJmaWxlUGF0aCIsImZyb21GaWxlUGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlD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aWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKSxcbiAgICAgIERpcmVjdG9yeSA9IHJlcXVpcmUoJy4vZGlyZWN0b3J5JyksXG4gICAgICBwYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcGF0aCcpO1xuXG5jb25zdCB7IGFycmF5LCBhc3luYywgZmlsZVN5c3RlbSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXksXG4gICAgICB7IHJlYWREaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW0sXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGg7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRFbnRyeShlbnRyeSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChlbnRyeSk7XG4gIH1cblxuICBnZXRSb290RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgcm9vdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBmaXJzdEVudHJ5UGF0aCA9IGZpcnN0RW50cnkuZ2V0UGF0aCgpO1xuXG4gICAgICByb290RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlyc3RFbnRyeVBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiByb290RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QganNaaXBFbnRyaWVzID0ganNaaXAuZmlsZXMsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlOYW1lcyA9IE9iamVjdC5rZXlzKGpzWmlwRW50cmllcyksXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKCk7XG5cbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgY2FsbGJhY2soZW50cmllcyk7XG4gICAgfVxuXG4gICAgYXN5bmMuZm9yRWFjaChqc1ppcEVudHJ5TmFtZXMsIGZ1bmN0aW9uIChqc1ppcEVudHJ5TmFtZSwgaW5kZXgsIG5leHQpIHtcbiAgICAgIGNvbnN0IGpzWmlwRW50cnkgPSBqc1ppcEVudHJpZXNbanNaaXBFbnRyeU5hbWVdO1xuXG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZGlyZWN0b3J5KSB7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRmlsZS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb290RGlyZWN0b3J5TmFtZShyb290RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKCksXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gcm9vdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllcztcblxuZnVuY3Rpb24gZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHN1YkVudHJ5TmFtZSkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBwYXRoVXRpbGl0aWVzLmlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKTtcblxuICAgIGlmICghc3ViRW50cnlOYW1lSGlkZGVuTmFtZSB8fCAhZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gcGF0aCwgLy8vXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuXG4gICAgICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBkaXJlY3RvcnlQYXRoLCAvL1xuICAgICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICBlbnRyeSA9IGZpbGU7XG5cbiAgICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=