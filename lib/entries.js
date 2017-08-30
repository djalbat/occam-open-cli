'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var File = require('./file'),
    Directory = require('./directory'),
    pathUtilities = require('./utilities/path'),
    filePathUtilities = require('./utilities/filePath');

var path = necessary.path,
    array = necessary.array,
    async = necessary.async,
    fileSystem = necessary.fileSystem,
    first = array.first,
    readDirectory = fileSystem.readDirectory,
    isNameHiddenName = pathUtilities.isNameHiddenName,
    isFilePathValidFilePath = filePathUtilities.isFilePathValidFilePath,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwicGF0aFV0aWxpdGllcyIsImZpbGVQYXRoVXRpbGl0aWVzIiwicGF0aCIsImFycmF5IiwiYXN5bmMiLCJmaWxlU3lzdGVtIiwiZmlyc3QiLCJyZWFkRGlyZWN0b3J5IiwiaXNOYW1lSGlkZGVuTmFtZSIsImlzRmlsZVBhdGhWYWxpZEZpbGVQYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJFbnRyaWVzIiwiZW50cnkiLCJwdXNoIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwidW5kZWZpbmVkIiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwiZW50cmllc0pTT04iLCJtYXAiLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwianNaaXAiLCJjYWxsYmFjayIsImpzWmlwRW50cmllcyIsImZpbGVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJkb25lIiwiZm9yRWFjaCIsImpzWmlwRW50cnlOYW1lIiwibmV4dCIsImpzWmlwRW50cnkiLCJmcm9tSlNaaXBFbnRyeSIsImRpcmVjdG9yeSIsImFkZEVudHJ5IiwiZmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImRpcmVjdG9yeVBhdGgiLCJmcm9tRGlyZWN0b3J5UGF0aCIsImZpbGVQYXRoIiwiZnJvbUZpbGVQYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxhQUFSLENBRGxCO0FBQUEsSUFFTUcsZ0JBQWdCSCxRQUFRLGtCQUFSLENBRnRCO0FBQUEsSUFHTUksb0JBQW9CSixRQUFRLHNCQUFSLENBSDFCOztJQUtRSyxJLEdBQW1DTixTLENBQW5DTSxJO0lBQU1DLEssR0FBNkJQLFMsQ0FBN0JPLEs7SUFBT0MsSyxHQUFzQlIsUyxDQUF0QlEsSztJQUFPQyxVLEdBQWVULFMsQ0FBZlMsVTtJQUNwQkMsSyxHQUFVSCxLLENBQVZHLEs7SUFDQUMsYSxHQUFrQkYsVSxDQUFsQkUsYTtJQUNBQyxnQixHQUFxQlIsYSxDQUFyQlEsZ0I7SUFDQUMsdUIsR0FBNEJSLGlCLENBQTVCUSx1QjtJQUNBQyxnQixHQUFtRFIsSSxDQUFuRFEsZ0I7SUFBa0JDLDRCLEdBQWlDVCxJLENBQWpDUyw0Qjs7SUFFcEJDLE87QUFDSixxQkFBYztBQUFBOztBQUNaLFNBQUtULEtBQUwsR0FBYSxFQUFiO0FBQ0Q7Ozs7NkJBRVFVLEssRUFBTztBQUNkLFdBQUtWLEtBQUwsQ0FBV1csSUFBWCxDQUFnQkQsS0FBaEI7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFJRSx1QkFBdUIsSUFBM0I7O0FBRUEsVUFBTUMsYUFBYVYsTUFBTSxLQUFLSCxLQUFYLENBQW5CLENBSHdCLENBR2M7O0FBRXRDLFVBQUlhLGVBQWVDLFNBQW5CLEVBQThCO0FBQzVCLFlBQU1DLGlCQUFpQkYsV0FBV0csT0FBWCxFQUF2Qjs7QUFFQUosK0JBQXVCSiw2QkFBNkJPLGNBQTdCLENBQXZCOztBQUVBLFlBQUlILHlCQUF5QixJQUE3QixFQUFtQztBQUNqQ0EsaUNBQXVCRyxjQUF2QjtBQUNEO0FBQ0Y7O0FBRUQs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QUF5RFoscUJBQXpELEVBQWdGQyxrQ0FBaEYsRUFMc0IsQ0FLK0Y7QUFDdEgsT0FORCxNQU1PO0FBQ0wsWUFBTWEsV0FBV0YsYUFBakI7QUFBQSxZQUFnQztBQUMxQmIsZUFBTzNDLEtBQUsyRCxZQUFMLENBQWtCRCxRQUFsQixFQUE0QmQscUJBQTVCLENBRGI7O0FBR0EsWUFBSUQsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCNUIsa0JBQVE0QixJQUFSLENBRGlCLENBQ0g7O0FBRWRULGtCQUFRUSxRQUFSLENBQWlCM0IsS0FBakI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQTdCRDtBQThCRCIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgRGlyZWN0b3J5ID0gcmVxdWlyZSgnLi9kaXJlY3RvcnknKSxcbiAgICAgIHBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9wYXRoJyksXG4gICAgICBmaWxlUGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2ZpbGVQYXRoJyk7XG5cbmNvbnN0IHsgcGF0aCwgYXJyYXksIGFzeW5jLCBmaWxlU3lzdGVtIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheSxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbSxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNGaWxlUGF0aFZhbGlkRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkRW50cnkoZW50cnkpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZW50cnkpO1xuICB9XG5cbiAgZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKSB7XG4gICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZmlyc3RFbnRyeVBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBqc1ppcEVudHJpZXMgPSBqc1ppcC5maWxlcywgLy8vXG4gICAgICAgICAganNaaXBFbnRyeU5hbWVzID0gT2JqZWN0LmtleXMoanNaaXBFbnRyaWVzKSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoKTtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBjYWxsYmFjayhlbnRyaWVzKTtcbiAgICB9XG5cbiAgICBhc3luYy5mb3JFYWNoKGpzWmlwRW50cnlOYW1lcywgZnVuY3Rpb24gKGpzWmlwRW50cnlOYW1lLCBuZXh0KSB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBEaXJlY3RvcnkuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGRpcmVjdG9yeSkge1xuICAgICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcygpLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihzdWJFbnRyeU5hbWUpIHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHBhdGgsIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcblxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCBkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZGlyZWN0b3J5UGF0aCwgLy9cbiAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBmaWxlOyAvLy9cblxuICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==