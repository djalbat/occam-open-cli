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
    filter = arrayUtilities.filter,
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

      if (firstEntry) {
        ///
        var firstEntryPath = firstEntry.getPath();

        topmostDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);

        if (topmostDirectoryName === null) {
          topmostDirectoryName = firstEntryPath;
        }
      }

      return topmostDirectoryName;
    }
  }, {
    key: 'removeFileByPath',
    value: function removeFileByPath(path) {
      filter(this.array, function (entry) {
        var entryFile = entry.isFile();

        if (entryFile) {
          var file = entry,
              ///
          filePath = file.getPath();

          if (filePath === path) {
            return false;
          }
        }

        return true;
      });
    }
  }, {
    key: 'addFile',
    value: function addFile(file) {
      this.array.push(file);
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
        allowAllFilesAndDirectories = !allowOnlyRecognisedFiles,
        allowHiddenFilesAndDirectories = !disallowHiddenFilesAndDirectories;

    if (subEntryNameNotHiddenName || allowHiddenFilesAndDirectories) {
      var entry = void 0;

      var path = concatenatePaths(relativeDirectoryPath, subEntryName),
          directory = Directory.fromPath(path, projectsDirectoryPath);

      if (directory !== null) {
        var directoryPath = path; ///

        if (allowAllFilesAndDirectories) {
          entry = directory; ///

          array.push(entry); ///
        }

        entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories); ///
      } else {
        var file = File.fromPath(path, projectsDirectoryPath);

        if (file !== null) {
          var filePath = file.getPath(),
              filePathRecognisedFilePath = isFilePathRecognisedFilePath(filePath),
              fileRecognisedFile = filePathRecognisedFilePath; ///

          if (fileRecognisedFile || allowAllFilesAndDirectories) {
            entry = file; ///

            array.push(entry); ///
          }
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwibmFtZVV0aWxpdGllcyIsImZpbGVQYXRoVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwiZm9yRWFjaCIsInJlYWREaXJlY3RvcnkiLCJpc05hbWVIaWRkZW5OYW1lIiwiaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwicHVzaCIsImNhbGxiYWNrIiwibWFwIiwic29tZSIsImV2ZXJ5IiwiZW50cmllc0pTT04iLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJkaXJlY3RvcnkiLCJlbnRyaWVzIiwianNaaXAiLCJmaWxlcyIsImpzWmlwRW50cmllcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJkb25lIiwianNaaXBFbnRyeU5hbWUiLCJuZXh0IiwianNaaXBFbnRyeSIsImZyb21KU1ppcEVudHJ5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzIiwiZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIiwiYWxsb3dBbGxGaWxlc0FuZERpcmVjdG9yaWVzIiwiYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwiZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJmaWxlUmVjb2duaXNlZEZpbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGFBQVIsQ0FEbEI7QUFBQSxJQUVNRyxnQkFBZ0JILFFBQVEsa0JBQVIsQ0FGdEI7QUFBQSxJQUdNSSxvQkFBb0JKLFFBQVEsc0JBQVIsQ0FIMUI7O0lBS1FLLGEsR0FBOEVOLFMsQ0FBOUVNLGE7SUFBZUMsYyxHQUErRFAsUyxDQUEvRE8sYztJQUFnQkMscUIsR0FBK0NSLFMsQ0FBL0NRLHFCO0lBQXVCQyxtQixHQUF3QlQsUyxDQUF4QlMsbUI7SUFDdERDLEssR0FBa0JILGMsQ0FBbEJHLEs7SUFBT0MsTSxHQUFXSixjLENBQVhJLE07SUFDUEMsTyxHQUFZSixxQixDQUFaSSxPO0lBQ0FDLGEsR0FBa0JKLG1CLENBQWxCSSxhO0lBQ0FDLGdCLEdBQXFCVixhLENBQXJCVSxnQjtJQUNBQyw0QixHQUFpQ1YsaUIsQ0FBakNVLDRCO0lBQ0FDLGdCLEdBQW1EVixhLENBQW5EVSxnQjtJQUFrQkMsNEIsR0FBaUNYLGEsQ0FBakNXLDRCOztJQUVwQkMsTztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzhDQUV5QjtBQUN4QixVQUFJQyx1QkFBdUIsSUFBM0I7O0FBRUEsVUFBTUMsYUFBYVgsTUFBTSxLQUFLUyxL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Q0YsR0F0Q0Q7QUF1Q0QiLCJmaWxlIjoiZW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKSxcbiAgICAgIERpcmVjdG9yeSA9IHJlcXVpcmUoJy4vZGlyZWN0b3J5JyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGFycmF5VXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5KSB7IC8vL1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZmlyc3RFbnRyeVBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgcmVtb3ZlRmlsZUJ5UGF0aChwYXRoKSB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKGZ1bmN0aW9uKGVudHJ5SlNPTikge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGVudHJ5SlNPTiwgLy8vXG4gICAgICAgICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGVudHJ5ID0gZmlsZSB8fCBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICB7IGZpbGVzIH0gPWpzWmlwLFxuICAgICAgICAgIGpzWmlwRW50cmllcyA9IGZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cblxuICAgIGZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbiAoanNaaXBFbnRyeU5hbWUsIG5leHQpIHtcbiAgICAgIGNvbnN0IGpzWmlwRW50cnkgPSBqc1ppcEVudHJpZXNbanNaaXBFbnRyeU5hbWVdO1xuXG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIERpcmVjdG9yeS5mcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBmdW5jdGlvbiAoZGlyZWN0b3J5KSB7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBGaWxlLmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbnRyeSA9IGZpbGU7XG5cbiAgICAgICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHN1YkVudHJ5TmFtZSkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSA9ICFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lLFxuICAgICAgICAgIGFsbG93QWxsRmlsZXNBbmREaXJlY3RvcmllcyA9ICFhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsXG4gICAgICAgICAgYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcztcblxuICAgIGlmIChzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIHx8IGFsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gcGF0aDsgLy8vXG5cbiAgICAgICAgaWYgKGFsbG93QWxsRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgZmlsZVJlY29nbmlzZWRGaWxlID0gZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgIGlmIChmaWxlUmVjb2duaXNlZEZpbGUgfHwgYWxsb3dBbGxGaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgICBlbnRyeSA9IGZpbGU7IC8vL1xuXG4gICAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=