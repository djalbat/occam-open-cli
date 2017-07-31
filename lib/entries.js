'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var File = require('./file'),
    pathUtil = require('./util/path'),
    arrayUtil = require('./util/array'),
    asyncUtil = require('./util/async'),
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

      asyncUtil.forEach(jsZipEntryNames, function (jsZipEntryName, next) {
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
  var absoluteDirectoryPath = pathUtil.combinePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = pathUtil.subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath);

  subEntryNames.forEach(function (subEntryName) {
    var subEntryNameHiddenName = pathUtil.isNameHiddenName(subEntryName);

    if (!subEntryNameHiddenName || !doNotLoadHiddenFilesAndDirectories) {
      var entry = void 0;

      var path = pathUtil.combinePaths(relativeDirectoryPath, subEntryName),
          directoryPath = path,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIkZpbGUiLCJyZXF1aXJlIiwicGF0aFV0aWwiLCJhcnJheVV0aWwiLCJhc3luY1V0aWwiLCJEaXJlY3RvcnkiLCJFbnRyaWVzIiwiYXJyYXkiLCJlbnRyeSIsInB1c2giLCJyb290RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdCIsInVuZGVmaW5lZCIsImZpcnN0RW50cnlQYXRoIiwiZ2V0UGF0aCIsInJvb3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJlbnRyaWVzSlNPTiIsIm1hcCIsImVudHJ5SlNPTiIsInRvSlNPTiIsImpzb24iLCJqc1ppcCIsImNhbGxiYWNrIiwianNaaXBFbnRyaWVzIiwiZmlsZXMiLCJqc1ppcEVudHJ5TmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZW50cmllcyIsImRvbmUiLCJmb3JFYWNoIiwianNaaXBFbnRyeU5hbWUiLCJuZXh0IiwianNaaXBFbnRyeSIsImZyb21KU1ppcEVudHJ5IiwiZGlyZWN0b3J5IiwiYWRkRW50cnkiLCJmaWxlIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsImNvbWJpbmVQYXRocyIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZSIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJpc05hbWVIaWRkZW5OYW1lIiwicGF0aCIsImRpcmVjdG9yeVBhdGgiLCJmcm9tRGlyZWN0b3J5UGF0aCIsImZpbGVQYXRoIiwiZnJvbUZpbGVQYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFB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QVM4QyxzQ0FBVCxDQUFnREgscUJBQWhELENBRHRCOztBQUdBRSxnQkFBY2hCLE9BQWQsQ0FBc0IsVUFBU2tCLFlBQVQsRUFBdUI7QUFDM0MsUUFBTUMseUJBQXlCaEQsU0FBU2lELGdCQUFULENBQTBCRixZQUExQixDQUEvQjs7QUFFQSxRQUFJLENBQUNDLHNCQUFELElBQTJCLENBQUNWLGtDQUFoQyxFQUFvRTtBQUNsRSxVQUFJaEMsY0FBSjs7QUFFQSxVQUFNNEMsT0FBT2xELFNBQVM0QyxZQUFULENBQXNCTCxxQkFBdEIsRUFBNkNRLFlBQTdDLENBQWI7QUFBQSxVQUNNSSxnQkFBZ0JELElBRHRCO0FBQUEsVUFDNEI7QUFDdEJoQixrQkFBWS9CLFVBQVVpRCxpQkFBVixDQUE0QkQsYUFBNUIsRUFBMkNkLHFCQUEzQyxDQUZsQjs7QUFJQSxVQUFJSCxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCNUIsZ0JBQVE0QixTQUFSLENBRHNCLENBQ0Y7O0FBRXBCUCxnQkFBUVEsUUFBUixDQUFpQjdCLEtBQWpCOztBQUVBa0MseUNBQWlDYixPQUFqQyxFQUEwQ3dCLGFBQTFDLEVBQXlEZCxxQkFBekQsRUFBZ0ZDLGtDQUFoRixFQUxzQixDQUsrRjtBQUN0SCxPQU5ELE1BTU87QUFDTCxZQUFNZSxXQUFXRixhQUFqQjtBQUFBLFlBQWdDO0FBQzFCZixlQUFPdEMsS0FBS3dELFlBQUwsQ0FBa0JELFFBQWxCLEVBQTRCaEIscUJBQTVCLENBRGI7O0FBR0EsWUFBSUQsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCOUIsa0JBQVE4QixJQUFSOztBQUVBVCxrQkFBUVEsUUFBUixDQUFpQjdCLEtBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0EzQkQ7QUE0QkQiLCJmaWxlIjoiZW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgcGF0aFV0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aCcpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi91dGlsL2FycmF5JyksXG4gICAgICBhc3luY1V0aWwgPSByZXF1aXJlKCcuL3V0aWwvYXN5bmMnKSxcbiAgICAgIERpcmVjdG9yeSA9IHJlcXVpcmUoJy4vZGlyZWN0b3J5Jyk7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRFbnRyeShlbnRyeSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChlbnRyeSk7XG4gIH1cblxuICBnZXRSb290RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgcm9vdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBhcnJheVV0aWwuZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgcm9vdERpcmVjdG9yeU5hbWUgPSBwYXRoVXRpbC5yb290RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGpzWmlwRW50cmllcyA9IGpzWmlwLmZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcygpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cblxuICAgIGFzeW5jVXRpbC5mb3JFYWNoKGpzWmlwRW50cnlOYW1lcywgZnVuY3Rpb24gKGpzWmlwRW50cnlOYW1lLCBuZXh0KSB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBEaXJlY3RvcnkuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGRpcmVjdG9yeSkge1xuICAgICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm9vdERpcmVjdG9yeU5hbWUocm9vdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcygpLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHJvb3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSBwYXRoVXRpbC5zdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihzdWJFbnRyeU5hbWUpIHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gcGF0aFV0aWwuaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpO1xuXG4gICAgaWYgKCFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIHx8ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHBhdGgsIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcblxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCBkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZGlyZWN0b3J5UGF0aCwgLy9cbiAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19