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
    key: 'reduceEntry',
    value: function reduceEntry(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
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
        allowHiddenFilesAndDirectories = !disallowHiddenFilesAndDirectories,
        allowUnrecognisedFilesAndDirectories = !allowOnlyRecognisedFiles;

    if (subEntryNameNotHiddenName || allowHiddenFilesAndDirectories) {
      var entry = void 0;

      var path = concatenatePaths(relativeDirectoryPath, subEntryName),
          directory = Directory.fromPath(path, projectsDirectoryPath);

      if (directory !== null) {
        var directoryPath = path; ///

        if (allowUnrecognisedFilesAndDirectories) {
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

          if (fileRecognisedFile || allowUnrecognisedFilesAndDirectories) {
            entry = file; ///

            array.push(entry); ///
          }
        }
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwibmFtZVV0aWxpdGllcyIsImZpbGVQYXRoVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwiZm9yRWFjaCIsInJlYWREaXJlY3RvcnkiLCJpc05hbWVIaWRkZW5OYW1lIiwiaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwicHVzaCIsImNhbGxiYWNrIiwibWFwIiwic29tZSIsImV2ZXJ5IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZW50cmllc0pTT04iLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJkaXJlY3RvcnkiLCJlbnRyaWVzIiwianNaaXAiLCJmaWxlcyIsImpzWmlwRW50cmllcyIsImpzWmlwRW50cnlOYW1lcyIsIk9iamVjdCIsImtleXMiLCJkb25lIiwianNaaXBFbnRyeU5hbWUiLCJuZXh0IiwianNaaXBFbnRyeSIsImZyb21KU1ppcEVudHJ5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzIiwiZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIiwiYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiYWxsb3dVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwiZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJmaWxlUmVjb2duaXNlZEZpbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGFBQVIsQ0FEbEI7QUFBQSxJQUVNRyxnQkFBZ0JILFFBQVEsa0JBQVIsQ0FGdEI7QUFBQSxJQUdNSSxvQkFBb0JKLFFBQVEsc0JBQVIsQ0FIMUI7O0lBS1FLLGEsR0FBOEVOLFMsQ0FBOUVNLGE7SUFBZUMsYyxHQUErRFAsUyxDQUEvRE8sYztJQUFnQkMscUIsR0FBK0NSLFMsQ0FBL0NRLHFCO0lBQXVCQyxtQixHQUF3QlQsUyxDQUF4QlMsbUI7SUFDdERDLEssR0FBa0JILGMsQ0FBbEJHLEs7SUFBT0MsTSxHQUFXSixjLENBQVhJLE07SUFDUEMsTyxHQUFZSixxQixDQUFaSSxPO0lBQ0FDLGEsR0FBa0JKLG1CLENBQWxCSSxhO0lBQ0FDLGdCLEdBQXFCVixhLENBQXJCVSxnQjtJQUNBQyw0QixHQUFpQ1YsaUIsQ0FBakNVLDRCO0lBQ0FDLGdCLEdBQW1EVixhLENBQW5EVSxnQjtJQUFrQkMsNEIsR0FBaUNYLGEsQ0FBakNXLDRCOztJQUVwQkMsTztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzhDQUV5QjtBQUN4QixVQUFJQyx1QkFBdUIsSUFB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R3VDOztBQUV4RCxjQUFJQyxzQkFBc0JKLG9DQUExQixFQUFnRTtBQUM5RDNDLG9CQUFRRyxJQUFSLENBRDhELENBQ2hEOztBQUVkVCxrQkFBTVcsSUFBTixDQUFXTCxLQUFYLEVBSDhELENBRzFDO0FBQ3JCO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsR0F0Q0Q7QUF1Q0QiLCJmaWxlIjoiZW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKSxcbiAgICAgIERpcmVjdG9yeSA9IHJlcXVpcmUoJy4vZGlyZWN0b3J5JyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGFycmF5VXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5KSB7IC8vL1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZmlyc3RFbnRyeVBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgcmVtb3ZlRmlsZUJ5UGF0aChwYXRoKSB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBlbnRyaWVzSlNPTi5tYXAoZnVuY3Rpb24oZW50cnlKU09OKSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHsgZmlsZXMgfSA9anNaaXAsXG4gICAgICAgICAganNaaXBFbnRyaWVzID0gZmlsZXMsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlOYW1lcyA9IE9iamVjdC5rZXlzKGpzWmlwRW50cmllcyk7XG5cbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgICAgY2FsbGJhY2soZW50cmllcyk7XG4gICAgfVxuXG4gICAgZm9yRWFjaChqc1ppcEVudHJ5TmFtZXMsIGZ1bmN0aW9uIChqc1ppcEVudHJ5TmFtZSwgbmV4dCkge1xuICAgICAgY29uc3QganNaaXBFbnRyeSA9IGpzWmlwRW50cmllc1tqc1ppcEVudHJ5TmFtZV07XG5cbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgRGlyZWN0b3J5LmZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGZ1bmN0aW9uIChkaXJlY3RvcnkpIHtcbiAgICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW50cmllcztcblxuZnVuY3Rpb24gZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goZnVuY3Rpb24oc3ViRW50cnlOYW1lKSB7XG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXG4gICAgICAgICAgYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyxcbiAgICAgICAgICBhbGxvd1VucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBsZXQgZW50cnk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoOyAvLy9cblxuICAgICAgICBpZiAoYWxsb3dVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggPSBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICBmaWxlUmVjb2duaXNlZEZpbGUgPSBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgaWYgKGZpbGVSZWNvZ25pc2VkRmlsZSB8fCBhbGxvd1VucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==