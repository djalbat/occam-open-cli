'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('./util'),
    File = require('./file'),
    async = require('./async'),
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

      var firstEntry = first(this.array); ///

      if (firstEntry !== undefined) {
        var firstEntryPath = firstEntry.getPath();

        rootDirectoryName = util.rootDirectoryNameFromPath(firstEntryPath);
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
    value: function fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath) {
      var entries = new Entries(),
          relativeDirectoryPath = rootDirectoryName; ///

      entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath);

      return entries;
    }
  }]);

  return Entries;
}();

module.exports = Entries;

function first(array) {
  return array[0];
}

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath) {
  var absoluteDirectoryPath = util.combinePaths(projectsDirectoryPath, relativeDirectoryPath),
      subEntryNames = util.subEntryNamesFromAbsoluteFilePath(absoluteDirectoryPath);

  subEntryNames.forEach(function (subEntryName) {
    var entry = void 0;

    var path = util.combinePaths(relativeDirectoryPath, subEntryName),
        directoryPath = path,
        ///
    directory = Directory.fromDirectoryPath(directoryPath, projectsDirectoryPath);

    if (directory !== null) {
      entry = directory; ///

      entries.addEntry(entry);

      entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath); ///
    } else {
      var filePath = directoryPath,
          //
      file = File.fromFilePath(filePath, projectsDirectoryPath),
          content = file.getContent();

      if (content !== null) {
        entry = file;

        entries.addEntry(entry);
      }
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRmlsZSIsImFzeW5jIiwiRGlyZWN0b3J5IiwiRW50cmllcyIsImFycmF5IiwiZW50cnkiLCJwdXNoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwiZmlyc3QiLCJ1bmRlZmluZWQiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyb290RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiZW50cmllc0pTT04iLCJtYXAiLCJlbnRyeUpTT04iLCJ0b0pTT04iLCJqc29uIiwianNaaXAiLCJjYWxsYmFjayIsImpzWmlwRW50cmllcyIsImZpbGVzIiwianNaaXBFbnRyeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJkb25lIiwiZm9yRWFjaCIsImpzWmlwRW50cnlOYW1lIiwibmV4dCIsImpzWmlwRW50cnkiLCJmcm9tSlNaaXBFbnRyeSIsImRpcmVjdG9yeSIsImFkZEVudHJ5IiwiZmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsImNvbWJpbmVQYXRocyIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRmlsZVBhdGgiLCJzdWJFbnRyeU5hbWUiLCJwYXRoIiwiZGlyZWN0b3J5UGF0aCIsImZyb21EaXJlY3RvcnlQYXRoIiwiZmlsZVBhdGgiLCJmcm9tRmlsZVBhdGgiLCJjb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxRQUFSLENBRGI7QUFBQSxJQUVNRSxRQUFRRixRQUFRLFNBQVIsQ0FGZDtBQUFBLElBR01HLFlBQVlILFFBQVEsYUFBUixDQUhsQjs7SUFLTUksTztBQUNKLHFCQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDRDs7Ozs2QkFFUUMsSyxFQUFPO0FBQ2QsV0FBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCRCxLQUFoQjtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQUlFLG9CQUFvQixJQUF4Qjs7QUFFQSxVQUFNQyxhQUFhQyxNQUFNLEtBQUtMLEtBQVgsQ0FBbkIsQ0FIcUIsQ0FHaUI7O0FBRXRDLFVBQUlJLGVBQWVFLFNBQW5CLEVBQThCO0FBQzVCLFlBQU1DLGlCQUFpQkgsV0FBV0ksT0FBWCxFQUF2Qjs7QUFFQUwsNEJBQW9CVCxLQUFLZSx5QkFBTCxDQUErQkYsY0FBL0IsQ0FBcEI7QUFDRDs7QUFFRCxhQUFPSixpQkFBUDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNTyxjQUFjLEtBQUtWLEtBQUwsQ0FBV1csR0FBWCxDQUFlLFVBQVNWLEtBQVQsRUFBZ0I7QUFDM0MsWUFBTVcsWUFBWVgsTUFBTVksTUFBTixFQUFsQjs7QUFFQSxlQUFPRCxTQUFQO0FBQ0QsT0FKYSxDQUFwQjtBQUFBLFVBS01FLE9BQU9KLFdBTGIsQ0FETyxDQU1tQjs7QUFFMUIsYUFBT0ksSUFBUDtBQUNEOzs7OEJBRWdCQyxLLEVBQU9DLFEsRUFBVTtBQUNoQyxVQUFNQyxlQUFlRixNQUFNRyxLQUEzQjtBQUFBLFVBQWtDO0FBQzVCQyx3QkFBa0JDLE9BQU9DLElBQVAsQ0FBWUosWUFBWixDQUR4QjtBQUFBLFVBRU1LLFVBQVUsSUFBSXZCLE9BQUosRUFGaEI7O0FBSUEsZUFBU3dCLElBQVQsR0FBZ0I7QUFDZFAsaUJBQVNNLE9BQVQ7QUFDRDs7QUFFRHpCLFlBQU0yQixPQUFOLENBQWNMLGVBQWQsRUFBK0IsVUFBVU0sY0FBVixFQUEwQkMsSUFBMUIsRUFBZ0M7QUFDN0QsWUFBTUMsYUFBYVYsYUFBYVEsY0FBYixDQUFuQjs7QUFFQSxZQUFJeEIsY0FBSjs7QUFFQUgsa0JBQVU4QixjQUFWLENBQXlCRCxVQUF6QixFQUFxQyxVQUFVRSxTQUFWLEVBQXFCO0FBQ3hELGNBQUlBLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEI1QixvQkFBUTRCLFNBQVIsQ0FEc0IsQ0FDRjs7QUFFcEJQLG9CQUFRUSxRQUFSLENBQWlCN0IsS0FBakI7O0FBRUF5QjtBQUNELFdBTkQsTUFNTztBQUNMOUIsaUJBQUtnQyxjQUFMLENBQW9CRCxVQUFwQixFQUFnQyxVQUFVSSxJQUFWLEVBQWdCO0FBQzlDLGtCQUFJQSxTQUFTLElBQWIsRUFBbUI7QUFDakI5Qix3QkFBUThCLElBQVI7O0FBRUFULHdCQUFRUSxRQUFSLENBQWlCN0IsS0FBakI7QUFDRDs7QUFFRHlCO0FBQ0QsYUFSRDtBQVNEO0FBQ0YsU0FsQkQ7QUFtQkQsT0F4QkQsRUF3QkdILElBeEJIO0FBeUJEOzs7MENBRTRCcEIsaUIsRUFBbUI2QixxQixFQUF1QjtBQUNyRSxVQUFNVixVQUFVLElBQUl2QixPQUFKLEVBQWhCO0FBQUEsVUFDTWtDLHdCQUF3QjlCLGlCQUQ5QixDQURxRSxDQUVuQjs7QUFFbEQrQix1Q0FBaUNaLE9BQWpDLEVBQTBDVyxxQkFBMUMsRUFBaUVELHFCQUFqRTs7QUFFQSxhQUFPVixPQUFQO0FBQ0Q7Ozs7OztBQUdIYSxPQUFPQyxPQUFQLEdBQWlCckMsT0FBakI7O0FBRUEsU0FBU00sS0FBVCxDQUFlTCxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7O0FBRTFDLFNBQVNrQyxnQ0FBVCxDQUEwQ1osT0FBMUMsRUFBbURXLHFCQUFuRCxFQUEwRUQscUJBQTFFLEVBQWlHO0FBQy9GLE1BQU1LLHdCQUF3QjNDLEtBQUs0QyxZQUFMLENBQWtCTixxQkFBbEIsRUFBeUNDLHFCQUF6QyxDQUE5QjtBQUFBLE1BQ01NLGdCQUFnQjdDLEtBQUs4QyxpQ0FBTCxDQUF1Q0gscUJBQXZDLENBRHRCOztBQUdBRSxnQkFBY2YsT0FBZCxDQUFzQixVQUFTaUIsWUFBVCxFQUF1QjtBQUMzQyxRQUFJeEMsY0FBSjs7QUFFQSxRQUFNeUMsT0FBT2hELEtBQUs0QyxZQUFMLENBQWtCTCxxQkFBbEIsRUFBeUNRLFlBQXpDLENBQWI7QUFBQSxRQUNNRSxnQkFBZ0JELElBRHRCO0FBQUEsUUFDNEI7QUFDdEJiLGdCQUFZL0IsVUFBVThDLGlCQUFWLENBQTRCRCxhQUE1QixFQUEyQ1gscUJBQTNDLENBRmxCOztBQUlBLFFBQUlILGNBQWMsSUFBbEIsRUFBd0I7QUFDdEI1QixjQUFRNEIsU0FBUixDQURzQixDQUNGOztBQUVwQlAsY0FBUVEsUUFBUixDQUFpQjdCLEtBQWpCOztBQUVBaUMsdUNBQWlDWixPQUFqQyxFQUEwQ3FCLGFBQTFDLEVBQXlEWCxxQkFBekQsRUFMc0IsQ0FLMkQ7QUFDbEYsS0FORCxNQU1PO0FBQ0wsVUFBTWEsV0FBV0YsYUFBakI7QUFBQSxVQUFnQztBQUMxQlosYUFBT25DLEtBQUtrRCxZQUFMLENBQWtCRCxRQUFsQixFQUE0QmIscUJBQTVCLENBRGI7QUFBQSxVQUVNZSxVQUFVaEIsS0FBS2lCLFVBQUwsRUFGaEI7O0FBSUEsVUFBSUQsWUFBWSxJQUFoQixFQUFzQjtBQUNwQjlDLGdCQUFROEIsSUFBUjs7QUFFQVQsZ0JBQVFRLFFBQVIsQ0FBaUI3QixLQUFqQjtBQUNEO0FBQ0Y7QUFDRixHQXhCRDtBQXlCRCIsImZpbGUiOiJlbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyksXG4gICAgICBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyksXG4gICAgICBhc3luYyA9IHJlcXVpcmUoJy4vYXN5bmMnKSxcbiAgICAgIERpcmVjdG9yeSA9IHJlcXVpcmUoJy4vZGlyZWN0b3J5Jyk7XG5cbmNsYXNzIEVudHJpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRFbnRyeShlbnRyeSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChlbnRyeSk7XG4gIH1cblxuICBnZXRSb290RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgcm9vdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBmaXJzdEVudHJ5UGF0aCA9IGZpcnN0RW50cnkuZ2V0UGF0aCgpO1xuXG4gICAgICByb290RGlyZWN0b3J5TmFtZSA9IHV0aWwucm9vdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBqc1ppcEVudHJpZXMgPSBqc1ppcC5maWxlcywgLy8vXG4gICAgICAgICAganNaaXBFbnRyeU5hbWVzID0gT2JqZWN0LmtleXMoanNaaXBFbnRyaWVzKSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoKTtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBjYWxsYmFjayhlbnRyaWVzKTtcbiAgICB9XG5cbiAgICBhc3luYy5mb3JFYWNoKGpzWmlwRW50cnlOYW1lcywgZnVuY3Rpb24gKGpzWmlwRW50cnlOYW1lLCBuZXh0KSB7XG4gICAgICBjb25zdCBqc1ppcEVudHJ5ID0ganNaaXBFbnRyaWVzW2pzWmlwRW50cnlOYW1lXTtcblxuICAgICAgbGV0IGVudHJ5O1xuXG4gICAgICBEaXJlY3RvcnkuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGRpcmVjdG9yeSkge1xuICAgICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEZpbGUuZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gZmlsZTtcblxuICAgICAgICAgICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm9vdERpcmVjdG9yeU5hbWUocm9vdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcygpLFxuICAgICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHJvb3REaXJlY3RvcnlOYW1lOyAgLy8vXG5cbiAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudHJpZXM7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB1dGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSB1dGlsLnN1YkVudHJ5TmFtZXNGcm9tQWJzb2x1dGVGaWxlUGF0aChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihzdWJFbnRyeU5hbWUpIHtcbiAgICBsZXQgZW50cnk7XG4gICAgXG4gICAgY29uc3QgcGF0aCA9IHV0aWwuY29tYmluZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gcGF0aCwgLy8vXG4gICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcblxuICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZGlyZWN0b3J5UGF0aCwgLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21GaWxlUGF0aChmaWxlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgZW50cnkgPSBmaWxlO1xuXG4gICAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=