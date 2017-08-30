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
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, loadValidFilesOnly) {
      var entries = new Entries(),
          relativeDirectoryPath = topmostDirectoryName; ///

      entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, loadValidFilesOnly);

      return entries;
    }
  }]);

  return Entries;
}();

module.exports = Entries;

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, loadValidFilesOnly) {
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

        entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, loadValidFilesOnly); ///
      } else {
        var filePath = directoryPath,
            //
        loadInvalidFiles = !loadValidFilesOnly,
            filePathValidFilePath = isFilePathValidFilePath(filePath);

        if (filePathValidFilePath || loadInvalidFiles) {
          var file = File.fromFilePath(filePath, projectsDirectoryPath);

          if (file !== null) {
            entry = file;

            entries.addEntry(entry);
          }
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwicGF0aFV0aWxpdGllcyIsImZpbGVQYXRoVXRpbGl0aWVzIiwicGF0aCIsImFycmF5IiwiYXN5bmMiLCJmaWxlU3lzdGVtIiwiZmlyc3QiLCJyZWFkRGlyZWN0b3J5IiwiaXNOYW1lSGlkZGVuTmFtZSIsImlzRmlsZVBhdGhWYWxpZEZpbGVQYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJFbnRyaWVzIiwiZW50cnkiLCJwdXNoIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwidW5kZWZpbmVkIiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwiZW50cmllc0pTT04iLCJtYXAiLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwianNaaXAiLCJjYWxsYmFjayIsImpzWmlwRW50cmllcyIsImZpbGVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJkb25lIiwiZm9yRWFjaCIsImpzWmlwRW50cnlOYW1lIiwibmV4dCIsImpzWmlwRW50cnkiLCJmcm9tSlNaaXBFbnRyeSIsImRpcmVjdG9yeSIsImFkZEVudHJ5IiwiZmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJsb2FkVmFsaWRGaWxlc09ubHkiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImRpcmVjdG9yeVBhdGgiLCJmcm9tRGlyZWN0b3J5UGF0aCIsImZpbGVQYXRoIiwibG9hZEludmFsaWRGaWxlcyIsImZpbGVQYXRoVmFsaWRGaWxlUGF0aCIsImZyb21GaWxlUGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsYUFBUixDQURsQjtBQUFBLElBRU1HLGdCQUFnQkgsUUFBUSxrQkFBUixDQUZ0QjtBQUFBLElBR01JLG9CQUFvQkosUUFBUSxzQkFBUixDQUgxQjs7SUFLUUssSSxHQUFtQ04sUyxDQUFuQ00sSTtJQUFNQyxLLEdBQTZCUCxTLENBQTdCTyxLO0lBQU9DLEssR0FBc0JSLFMsQ0FBdEJRLEs7SUFBT0MsVSxHQUFlVCxTLENBQWZTLFU7SUFDcEJDLEssR0FBVUgsSyxDQUFWRyxLO0lBQ0FDLGEsR0FBa0JGLFUsQ0FBbEJFLGE7SUFDQUMsZ0IsR0FBcUJSLGEsQ0FBckJRLGdCO0lBQ0FDLHVCLEdBQTRCUixpQixDQUE1QlEsdUI7SUFDQUMsZ0IsR0FBbURSLEksQ0FBbkRRLGdCO0lBQWtCQyw0QixHQUFpQ1QsSSxDQUFqQ1MsNEI7O0lBRXBCQyxPO0FBQ0oscUJBQWM7QUFBQTs7QUFDWixTQUFLVCxLQUFMLEdBQWEsRUFBYjtBQUNEOzs7OzZCQUVRVSxLLEVBQU87QUFDZCxXQUFLVixLQUFMLENBQVdXLElBQVgsQ0FBZ0JELEtBQWhCO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBSUUsdUJBQXVCLElBQTNCOztBQUVBLFVBQU1DLGFBQWFWLE1BQU0sS0FBS0gsS0FBWCxDQUFuQixDQUh3QixDQUdjOztBQUV0QyxVQUFJYSxlQUFlQyxTQUFuQixFQUE4QjtBQUM1QixZQUFNQyxpQkFBaUJGLFdBQVdHLE9BQVgsRUFBdkI7O0FBRUFKLCtCQUF1QkosNkJBQTZCTyxjQUE3QixDQUF2Qjs7QUFF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QUFDdEIxQixnQkFBUTBCLFNBQVIsQ0FEc0IsQ0FDRjs7QUFFcEJQLGdCQUFRUSxRQUFSLENBQWlCM0IsS0FBakI7O0FBRUFpQyx5Q0FBaUNkLE9BQWpDLEVBQTBDdUIsYUFBMUMsRUFBeURiLHFCQUF6RCxFQUFnRkMsa0NBQWhGLEVBQW9IQyxrQkFBcEgsRUFMc0IsQ0FLbUg7QUFDMUksT0FORCxNQU1PO0FBQ0wsWUFBTWEsV0FBV0YsYUFBakI7QUFBQSxZQUFnQztBQUMxQkcsMkJBQW1CLENBQUNkLGtCQUQxQjtBQUFBLFlBRU1lLHdCQUF3QmxELHdCQUF3QmdELFFBQXhCLENBRjlCOztBQUlBLFlBQUlFLHlCQUF5QkQsZ0JBQTdCLEVBQStDO0FBQzdDLGNBQU1qQixPQUFPM0MsS0FBSzhELFlBQUwsQ0FBa0JILFFBQWxCLEVBQTRCZixxQkFBNUIsQ0FBYjs7QUFFQSxjQUFJRCxTQUFTLElBQWIsRUFBbUI7QUFDakI1QixvQkFBUTRCLElBQVI7O0FBRUFULG9CQUFRUSxRQUFSLENBQWlCM0IsS0FBakI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGLEdBbENEO0FBbUNEIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyksXG4gICAgICBEaXJlY3RvcnkgPSByZXF1aXJlKCcuL2RpcmVjdG9yeScpLFxuICAgICAgcGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3BhdGgnKSxcbiAgICAgIGZpbGVQYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZmlsZVBhdGgnKTtcblxuY29uc3QgeyBwYXRoLCBhcnJheSwgYXN5bmMsIGZpbGVTeXN0ZW0gfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5LFxuICAgICAgeyByZWFkRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtLFxuICAgICAgeyBpc05hbWVIaWRkZW5OYW1lIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBpc0ZpbGVQYXRoVmFsaWRGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGg7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRFbnRyeShlbnRyeSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChlbnRyeSk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBmaXJzdEVudHJ5UGF0aCA9IGZpcnN0RW50cnkuZ2V0UGF0aCgpO1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlyc3RFbnRyeVBhdGgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBmaXJzdEVudHJ5UGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGpzWmlwRW50cmllcyA9IGpzWmlwLmZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcygpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cblxuICAgIGFzeW5jLmZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbiAoanNaaXBFbnRyeU5hbWUsIG5leHQpIHtcbiAgICAgIGNvbnN0IGpzWmlwRW50cnkgPSBqc1ppcEVudHJpZXNbanNaaXBFbnRyeU5hbWVdO1xuXG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZGlyZWN0b3J5KSB7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRmlsZS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLCBsb2FkVmFsaWRGaWxlc09ubHkpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXMoKSxcbiAgICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuXG4gICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMsIGxvYWRWYWxpZEZpbGVzT25seSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLCBsb2FkVmFsaWRGaWxlc09ubHkpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHN1YkVudHJ5TmFtZSkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSA9ICFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lLFxuICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXM7XG5cbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gcGF0aCwgLy8vXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuXG4gICAgICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcywgbG9hZFZhbGlkRmlsZXNPbmx5KTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGRpcmVjdG9yeVBhdGgsIC8vXG4gICAgICAgICAgICAgIGxvYWRJbnZhbGlkRmlsZXMgPSAhbG9hZFZhbGlkRmlsZXNPbmx5LFxuICAgICAgICAgICAgICBmaWxlUGF0aFZhbGlkRmlsZVBhdGggPSBpc0ZpbGVQYXRoVmFsaWRGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoVmFsaWRGaWxlUGF0aCB8fCBsb2FkSW52YWxpZEZpbGVzKSB7XG4gICAgICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==