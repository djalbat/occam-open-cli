'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var File = require('./file'),
    Directory = require('./directory'),
    nameUtilities = require('./utilities/name'),
    filePathUtilities = require('./utilities/filePath');

var pathUtilities = necessary.pathUtilities,
    arrayUtilities = necessary.arrayUtilities,
    asynchronousUtilities = necessary.asynchronousUtilities,
    fileSystemUtilities = necessary.fileSystemUtilities,
    first = arrayUtilities.first,
    forEach = asynchronousUtilities.forEach,
    readDirectory = fileSystemUtilities.readDirectory,
    isNameHiddenName = nameUtilities.isNameHiddenName,
    isFilePathRecognisedFilePath = filePathUtilities.isFilePathRecognisedFilePath,
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
    key: 'mapEntry',
    value: function mapEntry(callback) {
      return this.array.map(callback);
    }
  }, {
    key: 'someEntry',
    value: function someEntry(callback) {
      return this.array.some(callback);
    }
  }, {
    key: 'everyEntry',
    value: function everyEntry(callback) {
      return this.array.every(callback);
    }
  }, {
    key: 'forEachEntry',
    value: function forEachEntry(callback) {
      this.array.forEach(callback);
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
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories) {
      var array = [],
          relativeDirectoryPath = topmostDirectoryName; ///

      entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories);

      var entries = new Entries(array);

      return entries;
    }
  }]);

  return Entries;
}();

module.exports = Entries;

function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories) {
  var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach(function (subEntryName) {
    var subEntryNameHiddenName = isNameHiddenName(subEntryName),
        subEntryNameNotHiddenName = !subEntryNameHiddenName,
        allowHiddenFilesAndDirectories = !disallowHiddenFilesAndDirectories;

    if (subEntryNameNotHiddenName || allowHiddenFilesAndDirectories) {
      var entry = void 0;

      var path = concatenatePaths(relativeDirectoryPath, subEntryName),
          directory = Directory.fromPath(path, projectsDirectoryPath);

      if (directory !== null) {
        var directoryPath = path; ///

        if (!allowOnlyRecognisedFiles) {
          entry = directory; ///

          array.push(entry); ///
        }

        entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories); ///
      } else {
        var file = File.fromPath(path, projectsDirectoryPath);

        if (file !== null) {
          if (allowOnlyRecognisedFiles) {
            var filePath = file.getPath(),
                filePathRecognisedFilePath = isFilePathRecognisedFilePath(filePath),
                fileRecognisedFile = filePathRecognisedFilePath; ///

            if (fileRecognisedFile) {
              entry = file; ///

              array.push(entry); ///
            }
          }
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwibmFtZVV0aWxpdGllcyIsImZpbGVQYXRoVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImZpcnN0IiwiZm9yRWFjaCIsInJlYWREaXJlY3RvcnkiLCJpc05hbWVIaWRkZW5OYW1lIiwiaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwidW5kZWZpbmVkIiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lIiwiZXZlcnkiLCJlbnRyaWVzSlNPTiIsImVudHJ5IiwiZW50cnlKU09OIiwidG9KU09OIiwianNvbiIsImZpbGUiLCJmcm9tSlNPTiIsImRpcmVjdG9yeSIsImVudHJpZXMiLCJqc1ppcCIsImZpbGVzIiwianNaaXBFbnRyaWVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImRvbmUiLCJqc1ppcEVudHJ5TmFtZSIsIm5leHQiLCJqc1ppcEVudHJ5IiwiZnJvbUpTWmlwRW50cnkiLCJwdXNoIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzIiwiZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIiwiYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicGF0aCIsImZyb21QYXRoIiwiZGlyZWN0b3J5UGF0aCIsImZpbGVQYXRoIiwiZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJmaWxlUmVjb2duaXNlZEZpbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGFBQVIsQ0FEbEI7QUFBQSxJQUVNRyxnQkFBZ0JILFFBQVEsa0JBQVIsQ0FGdEI7QUFBQSxJQUdNSSxvQkFBb0JKLFFBQVEsc0JBQVIsQ0FIMUI7O0lBS1FLLGEsR0FBOEVOLFMsQ0FBOUVNLGE7SUFBZUMsYyxHQUErRFAsUyxDQUEvRE8sYztJQUFnQkMscUIsR0FBK0NSLFMsQ0FBL0NRLHFCO0lBQXVCQyxtQixHQUF3QlQsUyxDQUF4QlMsbUI7SUFDdERDLEssR0FBVUgsYyxDQUFWRyxLO0lBQ0FDLE8sR0FBWUgscUIsQ0FBWkcsTztJQUNBQyxhLEdBQWtCSCxtQixDQUFsQkcsYTtJQUNBQyxnQixHQUFxQlQsYSxDQUFyQlMsZ0I7SUFDQUMsNEIsR0FBaUNULGlCLENBQWpDUyw0QjtJQUNBQyxnQixHQUFtRFQsYSxDQUFuRFMsZ0I7SUFBa0JDLDRCLEdBQWlDVixhLENBQWpDVSw0Qjs7SUFFcEJDLE87QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs4Q0FFeUI7QUFDeEIsVUFBSUMsdUJBQXVCLElBQTNCOztBQUVBLFVBQU1DLGFBQWFWLE1BQU0sS0FBS1EsS0FBWCxDQUFuQixDQUh3QixDQUdjOztBQUV0QyxVQUFJRSxlQUFlQyxTQUFuQixFQUE4QjtBQUM1QixZQUFNQyxpQkFBaUJGLFdB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S0FBWCxFQUg2QixDQUdUO0FBQ3JCOztBQUVEd0IseUNBQWlDbkMsS0FBakMsRUFBd0M4QyxhQUF4QyxFQUF1RGYscUJBQXZELEVBQThFQyx3QkFBOUUsRUFBd0dDLGlDQUF4RyxFQVRzQixDQVNzSDtBQUM3SSxPQVZELE1BVU87QUFDTCxZQUFNbEIsT0FBTy9CLEtBQUs2RCxRQUFMLENBQWNELElBQWQsRUFBb0JiLHFCQUFwQixDQUFiOztBQUVBLFlBQUloQixTQUFTLElBQWIsRUFBbUI7QUFDakIsY0FBSWlCLHdCQUFKLEVBQThCO0FBQzVCLGdCQUFNZSxXQUFXaEMsS0FBS1YsT0FBTCxFQUFqQjtBQUFBLGdCQUNNMkMsNkJBQTZCcEQsNkJBQTZCbUQsUUFBN0IsQ0FEbkM7QUFBQSxnQkFFTUUscUJBQXFCRCwwQkFGM0IsQ0FENEIsQ0FHNEI7O0FBRXhELGdCQUFJQyxrQkFBSixFQUF3QjtBQUN0QnRDLHNCQUFRSSxJQUFSLENBRHNCLENBQ1I7O0FBRWRmLG9CQUFNOEIsSUFBTixDQUFXbkIsS0FBWCxFQUhzQixDQUdGO0FBQ3JCO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7QUFDRixHQXZDRDtBQXdDRCIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgRGlyZWN0b3J5ID0gcmVxdWlyZSgnLi9kaXJlY3RvcnknKSxcbiAgICAgIG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyksXG4gICAgICBmaWxlUGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2ZpbGVQYXRoJyk7XG5cbmNvbnN0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKGZ1bmN0aW9uKGVudHJ5SlNPTikge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGVudHJ5SlNPTiwgLy8vXG4gICAgICAgICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGVudHJ5ID0gZmlsZSB8fCBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICB7IGZpbGVzIH0gPWpzWmlwLFxuICAgICAgICAgIGpzWmlwRW50cmllcyA9IGZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cblxuICAgIGZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbiAoanNaaXBFbnRyeU5hbWUsIG5leHQpIHtcbiAgICAgIGNvbnN0IGpzWmlwRW50cnkgPSBqc1ppcEVudHJpZXNbanNaaXBFbnRyeU5hbWVdO1xuXG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZGlyZWN0b3J5KSB7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBGaWxlLmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbnRyeSA9IGZpbGU7XG5cbiAgICAgICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHN1YkVudHJ5TmFtZSkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSA9ICFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lLFxuICAgICAgICAgIGFsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXM7XG5cbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xuXG4gICAgICAgIGlmICghYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCA9IGlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVJlY29nbmlzZWRGaWxlID0gZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVSZWNvZ25pc2VkRmlsZSkge1xuICAgICAgICAgICAgICBlbnRyeSA9IGZpbGU7IC8vL1xuXG4gICAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==