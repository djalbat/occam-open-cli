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

    if (!doNotLoadHiddenFilesAndDirectories || !subEntryNameHiddenName) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIkZpbGUiLCJyZXF1aXJlIiwiYXN5bmMiLCJwYXRoVXRpbCIsImFycmF5VXRpbCIsIkRpcmVjdG9yeSIsIkVudHJpZXMiLCJhcnJheSIsImVudHJ5IiwicHVzaCIsInJvb3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsImZpcnN0IiwidW5kZWZpbmVkIiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicm9vdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsImVudHJpZXNKU09OIiwibWFwIiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImpzWmlwIiwiY2FsbGJhY2siLCJqc1ppcEVudHJpZXMiLCJmaWxlcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwiZG9uZSIsImZvckVhY2giLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJkaXJlY3RvcnkiLCJhZGRFbnRyeSIsImZpbGUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwiY29tYmluZVBhdGhzIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZXNGcm9tQWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsImlzTmFtZUhpZGRlbk5hbWUiLCJwYXRoIiwiZGlyZWN0b3J5UGF0aCIsImZyb21EaXJlY3RvcnlQYXRoIiwiZmlsZVBhdGgiLCJmcm9tRmlsZVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFB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QVQsQ0FBZ0RILHFCQUFoRCxDQUR0Qjs7QUFHQUUsZ0JBQWNoQixPQUFkLENBQXNCLFVBQVNrQixZQUFULEVBQXVCO0FBQzNDLFFBQU1DLHlCQUF5Qi9DLFNBQVNnRCxnQkFBVCxDQUEwQkYsWUFBMUIsQ0FBL0I7O0FBRUEsUUFBSSxDQUFDVCxrQ0FBRCxJQUF1QyxDQUFDVSxzQkFBNUMsRUFBb0U7QUFDbEUsVUFBSTFDLGNBQUo7O0FBRUEsVUFBTTRDLE9BQU9qRCxTQUFTMkMsWUFBVCxDQUFzQkwscUJBQXRCLEVBQTZDUSxZQUE3QyxDQUFiO0FBQUEsVUFDTUksZ0JBQWdCRCxJQUR0QjtBQUFBLFVBQzRCO0FBQ3RCaEIsa0JBQVkvQixVQUFVaUQsaUJBQVYsQ0FBNEJELGFBQTVCLEVBQTJDZCxxQkFBM0MsQ0FGbEI7O0FBSUEsVUFBSUgsY0FBYyxJQUFsQixFQUF3QjtBQUN0QjVCLGdCQUFRNEIsU0FBUixDQURzQixDQUNGOztBQUVwQlAsZ0JBQVFRLFFBQVIsQ0FBaUI3QixLQUFqQjs7QUFFQWtDLHlDQUFpQ2IsT0FBakMsRUFBMEN3QixhQUExQyxFQUF5RGQscUJBQXpELEVBQWdGQyxrQ0FBaEYsRUFMc0IsQ0FLK0Y7QUFDdEgsT0FORCxNQU1PO0FBQ0wsWUFBTWUsV0FBV0YsYUFBakI7QUFBQSxZQUFnQztBQUMxQmYsZUFBT3RDLEtBQUt3RCxZQUFMLENBQWtCRCxRQUFsQixFQUE0QmhCLHFCQUE1QixDQURiOztBQUdBLFlBQUlELFNBQVMsSUFBYixFQUFtQjtBQUNqQjlCLGtCQUFROEIsSUFBUjs7QUFFQVQsa0JBQVFRLFFBQVIsQ0FBaUI3QixLQUFqQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBM0JEO0FBNEJEIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKSxcbiAgICAgIGFzeW5jID0gcmVxdWlyZSgnLi9hc3luYycpLFxuICAgICAgcGF0aFV0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aCcpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi91dGlsL2FycmF5JyksXG4gICAgICBEaXJlY3RvcnkgPSByZXF1aXJlKCcuL2RpcmVjdG9yeScpO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkRW50cnkoZW50cnkpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZW50cnkpO1xuICB9XG5cbiAgZ2V0Um9vdERpcmVjdG9yeU5hbWUoKSB7XG4gICAgbGV0IHJvb3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gYXJyYXlVdGlsLmZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHJvb3REaXJlY3RvcnlOYW1lID0gcGF0aFV0aWwucm9vdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBqc1ppcEVudHJpZXMgPSBqc1ppcC5maWxlcywgLy8vXG4gICAgICAgICAganNaaXBFbnRyeU5hbWVzID0gT2JqZWN0LmtleXMoanNaaXBFbnRyaWVzKSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoKTtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBjYWxsYmFjayhlbnRyaWVzKTtcbiAgICB9XG5cbiAgICBhc3luYy5mb3JFYWNoKGpzWmlwRW50cnlOYW1lcywgZnVuY3Rpb24gKGpzWmlwRW50cnlOYW1lLCBuZXh0KSB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBEaXJlY3RvcnkuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGRpcmVjdG9yeSkge1xuICAgICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm9vdERpcmVjdG9yeU5hbWUocm9vdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcygpLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHJvb3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSBwYXRoVXRpbC5zdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihzdWJFbnRyeU5hbWUpIHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gcGF0aFV0aWwuaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpO1xuICAgIFxuICAgIGlmICghZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyB8fCAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSkge1xuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBjb25zdCBwYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBwYXRoLCAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGRpcmVjdG9yeVBhdGgsIC8vXG4gICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21GaWxlUGF0aChmaWxlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==