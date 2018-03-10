'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var File = require('./file'),
    Directory = require('./directory'),
    nameUtilities = require('./utilities/name');

var pathUtilities = necessary.pathUtilities,
    arrayUtilities = necessary.arrayUtilities,
    asynchronousUtilities = necessary.asynchronousUtilities,
    fileSystemUtilities = necessary.fileSystemUtilities,
    first = arrayUtilities.first,
    forEach = asynchronousUtilities.forEach,
    readDirectory = fileSystemUtilities.readDirectory,
    isNameHiddenName = nameUtilities.isNameHiddenName,
    concatenatePaths = pathUtilities.concatenatePaths,
    topmostDirectoryNameFromPath = pathUtilities.topmostDirectoryNameFromPath;

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
    key: 'fromJSON',
    value: function fromJSON(json) {
      var entriesJSON = json,
          ///
      array = entriesJSON.map(function (entryJSON) {
        var json = entryJSON,
            ///
        file = File.fromJSON(json),
            directory = Directory.fromJSON(json),
            entry = file || directory; ///

        return entry;
      }),
          entries = new Entries(array);

      return entries;
    }
  }, {
    key: 'fromJSZip',
    value: function fromJSZip(jsZip, callback) {
      var jsZipEntries = jsZip.files,
          ///
      jsZipEntryNames = Object.keys(jsZipEntries),
          entries = new Entries();

      function done() {
        callback(entries);
      }

      forEach(jsZipEntryNames, function (jsZipEntryName, next) {
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

      var path = concatenatePaths(relativeDirectoryPath, subEntryName),
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
          entry = file; ///

          entries.addEntry(entry);
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwibmFtZVV0aWxpdGllcyIsInBhdGhVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJmaXJzdCIsImZvckVhY2giLCJyZWFkRGlyZWN0b3J5IiwiaXNOYW1lSGlkZGVuTmFtZSIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwiZW50cnkiLCJwdXNoIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwidW5kZWZpbmVkIiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwiZW50cmllc0pTT04iLCJtYXAiLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwiZmlsZSIsImZyb21KU09OIiwiZGlyZWN0b3J5IiwiZW50cmllcyIsImpzWmlwIiwiY2FsbGJhY2siLCJqc1ppcEVudHJpZXMiLCJmaWxlcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJkb25lIiwianNaaXBFbnRyeU5hbWUiLCJuZXh0IiwianNaaXBFbnRyeSIsImZyb21KU1ppcEVudHJ5IiwiYWRkRW50cnkiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIiwibG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJwYXRoIiwiZGlyZWN0b3J5UGF0aCIsImZyb21EaXJlY3RvcnlQYXRoIiwiZmlsZVBhdGgiLCJmcm9tRmlsZVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGFBQVIsQ0FEbEI7QUFBQSxJQUVNRyxnQkFBZ0JILFFBQVEsa0JBQVIsQ0FGdEI7O0lBSVFJLGEsR0FBOEVMLFMsQ0FBOUVLLGE7SUFBZUMsYyxHQUErRE4sUyxDQUEvRE0sYztJQUFnQkMscUIsR0FBK0NQLFMsQ0FBL0NPLHFCO0lBQXVCQyxtQixHQUF3QlIsUyxDQUF4QlEsbUI7SUFDdERDLEssR0FBVUgsYyxDQUFWRyxLO0lBQ0FDLE8sR0FBWUgscUIsQ0FBWkcsTztJQUNBQyxhLEdBQWtCSCxtQixDQUFsQkcsYTtJQUNBQyxnQixHQUFxQlIsYSxDQUFyQlEsZ0I7SUFDQUMsZ0IsR0FBbURSLGEsQ0FBbkRRLGdCO0lBQWtCQyw0QixHQUFpQ1QsYSxDQUFqQ1MsNEI7O0lBRXBCQyxPO0FBQ0oscUJBQWM7QUFBQTs7QUFDWixTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNEOzs7OzZCQUVRQyxLLEVBQU87QUFDZCxXQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JELEtBQWhCO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBSUUsdUJBQXVCLElBQTNCOztBQUVBLFVBQU1DLGFBQWFYLE1BQU0sS0FBS08sS0FBWCxDQUFuQixDQUh3QixDQUdjOztBQUV0QyxVQUFJSSxlQUFlQyxTQUFuQixFQUE4QjtBQUM1QixZQUFNQyxpQkFBaUJGLFdBQVdHLE9BQVgsRUFBdkI7O0FBRUFKLCtCQUF1QkwsNkJBQTZCUSxjQUE3QixDQUF2Qjs7QUFFQSxZQUFJSCx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakNBLGlDQUF1QkcsY0FBdkI7QUFDRDtBQUNGOztBQUVELGFBQU9ILG9C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QUNWLGtDQUZ2Qzs7QUFJQSxRQUFJUyw2QkFBNkJDLDZCQUFqQyxFQUFnRTtBQUM5RCxVQUFJeEMsY0FBSjs7QUFFQSxVQUFNeUMsT0FBTzdDLGlCQUFpQm1DLHFCQUFqQixFQUF3Q00sWUFBeEMsQ0FBYjtBQUFBLFVBQ01LLGdCQUFnQkQsSUFEdEI7QUFBQSxVQUM0QjtBQUN0QjNCLGtCQUFZNUIsVUFBVXlELGlCQUFWLENBQTRCRCxhQUE1QixFQUEyQ2IscUJBQTNDLENBRmxCOztBQUlBLFVBQUlmLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEJkLGdCQUFRYyxTQUFSLENBRHNCLENBQ0Y7O0FBRXBCQyxnQkFBUWEsUUFBUixDQUFpQjVCLEtBQWpCOztBQUVBZ0MseUNBQWlDakIsT0FBakMsRUFBMEMyQixhQUExQyxFQUF5RGIscUJBQXpELEVBQWdGQyxrQ0FBaEYsRUFMc0IsQ0FLK0Y7QUFDdEgsT0FORCxNQU1PO0FBQ0wsWUFBTWMsV0FBV0YsYUFBakI7QUFBQSxZQUFnQztBQUMxQjlCLGVBQU8zQixLQUFLNEQsWUFBTCxDQUFrQkQsUUFBbEIsRUFBNEJmLHFCQUE1QixDQURiOztBQUdBLFlBQUlqQixTQUFTLElBQWIsRUFBbUI7QUFDakJaLGtCQUFRWSxJQUFSLENBRGlCLENBQ0g7O0FBRWRHLGtCQUFRYSxRQUFSLENBQWlCNUIsS0FBakI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQTdCRDtBQThCRCIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgRGlyZWN0b3J5ID0gcmVxdWlyZSgnLi9kaXJlY3RvcnknKSxcbiAgICAgIG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyk7XG5cbmNvbnN0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRW50cmllcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgfVxuXG4gIGFkZEVudHJ5KGVudHJ5KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IGVudHJpZXNKU09OLm1hcChmdW5jdGlvbihlbnRyeUpTT04pIHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGpzWmlwRW50cmllcyA9IGpzWmlwLmZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcygpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cblxuICAgIGZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbiAoanNaaXBFbnRyeU5hbWUsIG5leHQpIHtcbiAgICAgIGNvbnN0IGpzWmlwRW50cnkgPSBqc1ppcEVudHJpZXNbanNaaXBFbnRyeU5hbWVdO1xuXG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZGlyZWN0b3J5KSB7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRmlsZS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKCksXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllcztcblxuZnVuY3Rpb24gZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHN1YkVudHJ5TmFtZSkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSA9ICFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lLFxuICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXM7XG5cbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gcGF0aCwgLy8vXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuXG4gICAgICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBkaXJlY3RvcnlQYXRoLCAvL1xuICAgICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICBlbnRyeSA9IGZpbGU7IC8vL1xuXG4gICAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19