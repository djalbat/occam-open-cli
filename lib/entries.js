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
    combinePaths = _path.combinePaths,
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
  var absoluteDirectoryPath = combinePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach(function (subEntryName) {
    var subEntryNameHiddenName = pathUtilities.isNameHiddenName(subEntryName);

    if (!subEntryNameHiddenName || !doNotLoadHiddenFilesAndDirectories) {
      var entry = void 0;

      var _path2 = combinePaths(relativeDirectoryPath, subEntryName),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJGaWxlIiwiRGlyZWN0b3J5IiwicGF0aFV0aWxpdGllcyIsImFycmF5IiwiYXN5bmMiLCJmaWxlU3lzdGVtIiwiZmlyc3QiLCJyZWFkRGlyZWN0b3J5IiwicGF0aCIsImNvbWJpbmVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJFbnRyaWVzIiwiZW50cnkiLCJwdXNoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwidW5kZWZpbmVkIiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwiZW50cmllc0pTT04iLCJtYXAiLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwianNaaXAiLCJjYWxsYmFjayIsImpzWmlwRW50cmllcyIsImZpbGVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJkb25lIiwiZm9yRWFjaCIsImpzWmlwRW50cnlOYW1lIiwiaW5kZXgiLCJuZXh0IiwianNaaXBFbnRyeSIsImZyb21KU1ppcEVudHJ5IiwiZGlyZWN0b3J5IiwiYWRkRW50cnkiLCJmaWxlIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwiaXNOYW1lSGlkZGVuTmFtZSIsImRpcmVjdG9yeVBhdGgiLCJmcm9tRGlyZWN0b3J5UGF0aCIsImZpbGVQYXRoIiwiZnJvbUZpbGVQYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxhQUFSLENBRGxCO0FBQUEsSUFFTUcsZ0JBQWdCSCxRQUFRLGtCQUFSLENBRnRCOztJQUlRSSxLLEdBQTZCTCxTLENBQTdCSyxLO0lBQU9DLEssR0FBc0JOLFMsQ0FBdEJNLEs7SUFBT0MsVSxHQUFlUCxTLENBQWZPLFU7SUFDZEMsSyxHQUFVSCxLLENBQVZHLEs7SUFDQUMsYSxHQUFrQkYsVSxDQUFsQkUsYTtZQUMrQ0MsSTtJQUEvQ0MsWSxTQUFBQSxZO0lBQWNDLDRCLFNBQUFBLDRCOztJQUVoQkMsTztBQUNKLHFCQUFjO0FBQUE7O0FBQ1osU0FBS1IsS0FBTCxHQUFhLEVBQWI7QUFDRDs7Ozs2QkFFUVMsSyxFQUFPO0FBQ2QsV0FBS1QsS0FBTCxDQUFXVSxJQUFYLENBQWdCRCxLQUFoQjtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQUlFLG9CQUFvQixJQUF4Qjs7QUFFQSxVQUFNQyxhQUFhVCxNQUFNLEtBQUtILEtBQVgsQ0FBbkIsQ0FIcUIsQ0FHaUI7O0FBRXRDLFVBQUlZLGVBQWVDLFNBQW5CLEVBQThCO0FBQzVCLFlBQU1DLGlCQUFpQkYsV0FBV0csT0FBWCxFQUF2Qjs7QUFFQUosNEJBQW9CSiw2QkFBNkJPLGNBQTdCLENBQXBCO0FBQ0Q7O0FBRUQsYUFBT0gsaUJBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUssY0FBYyxLQUFLaEIsS0FBTCxDQUFXaUIsR0FBWCxDQUFlLFVBQVNSLEtBQVQsRUFBZ0I7QUFDM0MsWUFBTVMsWUFBWVQsTUFBTVUsTUFBTixFQUFsQjs7QUFFQSxlQUFPRCxTQUFQO0FBQ0QsT0FKYSxDQUFwQjtBQUFBLFVBS01FLE9BQU9KLFdBTGIsQ0FETyxDQU1tQjs7QUFFMUIsYUFBT0ksSUFBUDtBQUNEOzs7OEJBRWdCQyxLLEVBQU9DLFEsRUFBVTtBQUNoQyxVQUFNQyxlQUFlRixNQUFNRyxLQUEzQjtBQUFBLFVBQWtDO0FBQzVCQyx3QkFBa0JDLE9BQU9DLElBQVAsQ0FBWUosWUFBWixDQUR4QjtBQUFBLFVBRU1LLFVBQVUsSUFBSXBCLE9BQUosRUFGaEI7O0FBSUEsZUFBU3FCLElBQVQsR0FBZ0I7QUFDZFAsaUJBQVNNLE9BQVQ7QUFDRDs7QUFFRDNCLFlBQU02QixPQUFOLENBQWNMLGVBQWQsRUFBK0IsVUFBVU0sY0FBVixFQUEwQkMsS0FBMUIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQ3BFLFlBQU1DLGFBQWFYLGFBQWFRLGNBQWIsQ0FBbkI7O0FBRUEsWUFBSXRCLGNBQUo7O0FBRUFYLGtCQUFVcUMsY0FBVixDQUF5QkQsVUFBekIsRUFBcUMsVUFBVUUsU0FBVixFQUFxQjtBQUN4RCxjQUFJQSxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCM0Isb0JBQVEyQixTQUFSLENBRHNCLENBQ0Y7O0FBRXBCUixvQkFBUVMsUUFBUixDQUFpQjVCLEtBQWpCOztBQUVBd0I7QUFDRCxXQU5ELE1BTU87QUFDTHBDLGlCQUFLc0MsY0FBTCxDQUFvQkQsVUFBcEIsRUFBZ0MsVUFBVUksSUFBVixFQUFnQjtBQUM5QyxrQkFBSUEsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCN0Isd0JBQVE2QixJQUFSOztBQUVBVix3QkFBUVMsUUFBUixDQUFpQjVCLEtBQWpCO0FBQ0Q7O0FBRUR3QjtBQUNELGFBUkQ7QUFTRDtBQUNGLFNBbEJEO0FBbUJELE9BeEJELEVBd0JHSixJQXhCSDtBQXlCRDs7OzBDQUU0QmxCLGlCLEVBQW1CNEIscUIsRUFBdUJDLGtDLEVBQW9DO0FBQ3pHLFVBQU1aLFVBQVUsSUFBSXBCLE9BQUosRUFBaEI7QUFBQSxVQUNNaUMsd0JBQXdCOUIsaUJBRDlCLENBRHlHLENBRXZEOztBQUVsRCtCLHVDQUFpQ2QsT0FBakMsRUFBMENhLHFCQUExQyxFQUFpRUYscUJBQWpFLEVBQXdGQyxrQ0FBeEY7O0FBRUEsYUFBT1osT0FBUDtBQUNEOzs7Ozs7QUFHSGUsT0FBT0MsT0FBUCxHQUFpQnBDLE9BQWpCOztBQUVBLFNBQVNrQyxnQ0FBVCxDQUEwQ2QsT0FBMUMsRUFBbURhLHFCQUFuRCxFQUEwRUYscUJBQTFFLEVBQWlHQyxrQ0FBakcsRUFBcUk7QUFDbkksTUFBTUssd0JBQXdCdkMsYUFBYWlDLHFCQUFiLEVBQW9DRSxxQkFBcEMsQ0FBOUI7QUFBQSxNQUNNSyxnQkFBZ0IxQyxjQUFjeUMscUJBQWQsQ0FEdEI7O0FBR0FDLGdCQUFjaEIsT0FBZCxDQUFzQixVQUFTaUIsWUFBVCxFQUF1QjtBQUMzQyxRQUFNQyx5QkFBeUJqRCxjQUFja0QsZ0JBQWQsQ0FBK0JGLFlBQS9CLENBQS9COztBQUVBLFFBQUksQ0FBQ0Msc0JBQUQsSUFBMkIsQ0FBQ1Isa0NBQWhDLEVBQW9FO0FBQ2xFLFVBQUkvQixjQUFKOztBQUVBLFVBQU1KLFNBQU9DLGFBQWFtQyxxQkFBYixFQUFvQ00sWUFBcEMsQ0FBYjtBQUFBLFVBQ01HLGdCQUFnQjdDLE1BRHRCO0FBQUEsVUFDNEI7QUFDdEIrQixrQkFBWXRDLFVBQVVxRCxpQkFBVixDQUE0QkQsYUFBNUIsRUFBMkNYLHFCQUEzQyxDQUZsQjs7QUFJQSxVQUFJSCxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCM0IsZ0JBQVEyQixTQUFSLENBRHNCLENBQ0Y7O0FBRXBCUixnQkFBUVMsUUFBUixDQUFpQjVCLEtBQWpCOztBQUVBaUMseUNBQWlDZCxPQUFqQyxFQUEwQ3NCLGFBQTFDLEVBQXlEWCxxQkFBekQsRUFBZ0ZDLGtDQUFoRixFQUxzQixDQUsrRjtBQUN0SCxPQU5ELE1BTU87QUFDTCxZQUFNWSxXQUFXRixhQUFqQjtBQUFBLFlBQWdDO0FBQzFCWixlQUFPekMsS0FBS3dELFlBQUwsQ0FBa0JELFFBQWxCLEVBQTRCYixxQkFBNUIsQ0FEYjs7QUFHQSxZQUFJRCxTQUFTLElBQWIsRUFBbUI7QUFDakI3QixrQkFBUTZCLElBQVI7O0FBRUFWLGtCQUFRUyxRQUFSLENBQWlCNUIsS0FBakI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQTNCRDtBQTRCRCIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpLFxuICAgICAgRGlyZWN0b3J5ID0gcmVxdWlyZSgnLi9kaXJlY3RvcnknKSxcbiAgICAgIHBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9wYXRoJyk7XG5cbmNvbnN0IHsgYXJyYXksIGFzeW5jLCBmaWxlU3lzdGVtIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheSxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbSxcbiAgICAgIHsgY29tYmluZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkRW50cnkoZW50cnkpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZW50cnkpO1xuICB9XG5cbiAgZ2V0Um9vdERpcmVjdG9yeU5hbWUoKSB7XG4gICAgbGV0IHJvb3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgcm9vdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGpzWmlwRW50cmllcyA9IGpzWmlwLmZpbGVzLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5TmFtZXMgPSBPYmplY3Qua2V5cyhqc1ppcEVudHJpZXMpLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcygpO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGNhbGxiYWNrKGVudHJpZXMpO1xuICAgIH1cblxuICAgIGFzeW5jLmZvckVhY2goanNaaXBFbnRyeU5hbWVzLCBmdW5jdGlvbiAoanNaaXBFbnRyeU5hbWUsIGluZGV4LCBuZXh0KSB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBEaXJlY3RvcnkuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGRpcmVjdG9yeSkge1xuICAgICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm9vdERpcmVjdG9yeU5hbWUocm9vdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcygpLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHJvb3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IGNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHN1YkVudHJ5TmFtZSkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBwYXRoVXRpbGl0aWVzLmlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKTtcblxuICAgIGlmICghc3ViRW50cnlOYW1lSGlkZGVuTmFtZSB8fCAhZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBjb25zdCBwYXRoID0gY29tYmluZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBwYXRoLCAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGRpcmVjdG9yeVBhdGgsIC8vXG4gICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21GaWxlUGF0aChmaWxlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==