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
  function Entries(array) {
    _classCallCheck(this, Entries);

    this.array = array;
  }

  _createClass(Entries, [{
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
      var array = [],
          files = jsZip.files,
          jsZipEntries = files,
          jsZipEntryNames = Object.keys(jsZipEntries);


      function done() {
        var entries = new Entries(array);

        callback(entries);
      }

      forEach(jsZipEntryNames, function (jsZipEntryName, next) {
        var jsZipEntry = jsZipEntries[jsZipEntryName];

        var entry = void 0;

        Directory.fromJSZipEntry(jsZipEntry, function (directory) {
          if (directory !== null) {
            entry = directory; ///

            array.push(entry); ///

            next();
          } else {
            File.fromJSZipEntry(jsZipEntry, function (file) {
              if (file !== null) {
                entry = file;

                array.push(entry); ///
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
      var array = [],
          relativeDirectoryPath = topmostDirectoryName; ///

      entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

      var entries = new Entries(array);

      return entries;
    }
  }]);

  return Entries;
}();

module.exports = Entries;

function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach(function (subEntryName) {
    var subEntryNameHiddenName = isNameHiddenName(subEntryName),
        subEntryNameNotHiddenName = !subEntryNameHiddenName,
        loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;

    if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
      var entry = void 0;

      var path = concatenatePaths(relativeDirectoryPath, subEntryName),
          directory = Directory.fromPath(path, projectsDirectoryPath);

      if (directory !== null) {
        var directoryPath = path; ///

        entry = directory; ///

        array.push(entry); ///

        entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories); ///
      } else {
        var file = File.fromPath(path, projectsDirectoryPath);

        if (file !== null) {
          entry = file; ///

          array.push(entry); ///
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwibmFtZVV0aWxpdGllcyIsInBhdGhVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJmaXJzdCIsImZvckVhY2giLCJyZWFkRGlyZWN0b3J5IiwiaXNOYW1lSGlkZGVuTmFtZSIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwidW5kZWZpbmVkIiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwiZW50cmllc0pTT04iLCJtYXAiLCJlbnRyeSIsImVudHJ5SlNPTiIsInRvSlNPTiIsImpzb24iLCJmaWxlIiwiZnJvbUpTT04iLCJkaXJlY3RvcnkiLCJlbnRyaWVzIiwianNaaXAiLCJjYWxsYmFjayIsImZpbGVzIiwianNaaXBFbnRyaWVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImRvbmUiLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJwdXNoIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwic3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSIsImxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9y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QURuQztBQUFBLFFBRU1FLGdDQUFnQyxDQUFDVixrQ0FGdkM7O0FBSUEsUUFBSVMsNkJBQTZCQyw2QkFBakMsRUFBZ0U7QUFDOUQsVUFBSWhDLGNBQUo7O0FBRUEsVUFBTWlDLE9BQU81QyxpQkFBaUJrQyxxQkFBakIsRUFBd0NNLFlBQXhDLENBQWI7QUFBQSxVQUNNdkIsWUFBWTNCLFVBQVV1RCxRQUFWLENBQW1CRCxJQUFuQixFQUF5QloscUJBQXpCLENBRGxCOztBQUdBLFVBQUlmLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEIsWUFBTTZCLGdCQUFnQkYsSUFBdEIsQ0FEc0IsQ0FDTTs7QUFFNUJqQyxnQkFBUU0sU0FBUixDQUhzQixDQUdGOztBQUVwQmQsY0FBTTRCLElBQU4sQ0FBV3BCLEtBQVgsRUFMc0IsQ0FLRjs7QUFFcEJ3Qix5Q0FBaUNoQyxLQUFqQyxFQUF3QzJDLGFBQXhDLEVBQXVEZCxxQkFBdkQsRUFBOEVDLGtDQUE5RSxFQVBzQixDQU82RjtBQUNwSCxPQVJELE1BUU87QUFDTCxZQUFNbEIsT0FBTzFCLEtBQUt3RCxRQUFMLENBQWNELElBQWQsRUFBb0JaLHFCQUFwQixDQUFiOztBQUVBLFlBQUlqQixTQUFTLElBQWIsRUFBbUI7QUFDakJKLGtCQUFRSSxJQUFSLENBRGlCLENBQ0g7O0FBRWRaLGdCQUFNNEIsSUFBTixDQUFXcEIsS0FBWCxFQUhpQixDQUdHO0FBQ3JCO0FBQ0Y7QUFDRjtBQUNGLEdBN0JEO0FBOEJEIiwiZmlsZSI6ImVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyksXG4gICAgICBEaXJlY3RvcnkgPSByZXF1aXJlKCcuL2RpcmVjdG9yeScpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKTtcblxuY29uc3QgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyByZWFkRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyBpc05hbWVIaWRkZW5OYW1lIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBmaXJzdEVudHJ5UGF0aCA9IGZpcnN0RW50cnkuZ2V0UGF0aCgpO1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlyc3RFbnRyeVBhdGgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBmaXJzdEVudHJ5UGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBlbnRyaWVzSlNPTi5tYXAoZnVuY3Rpb24oZW50cnlKU09OKSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHsgZmlsZXMgfSA9anNaaXAsXG4gICAgICAgICAganNaaXBFbnRyaWVzID0gZmlsZXMsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlOYW1lcyA9IE9iamVjdC5rZXlzKGpzWmlwRW50cmllcyk7XG5cbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgICAgY2FsbGJhY2soZW50cmllcyk7XG4gICAgfVxuXG4gICAgZm9yRWFjaChqc1ppcEVudHJ5TmFtZXMsIGZ1bmN0aW9uIChqc1ppcEVudHJ5TmFtZSwgbmV4dCkge1xuICAgICAgY29uc3QganNaaXBFbnRyeSA9IGpzWmlwRW50cmllc1tqc1ppcEVudHJ5TmFtZV07XG5cbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgRGlyZWN0b3J5LmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uIChkaXJlY3RvcnkpIHtcbiAgICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuXG4gICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goZnVuY3Rpb24oc3ViRW50cnlOYW1lKSB7XG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXG4gICAgICAgICAgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcztcblxuICAgIGlmIChzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIHx8IGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoOyAvLy9cblxuICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==