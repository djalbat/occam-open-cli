'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var pathUtilities = require('./utilities/path');

var path = necessary.path,
    fileSystem = necessary.fileSystem,
    concatenatePaths = path.concatenatePaths,
    isEntryDirectory = fileSystem.isEntryDirectory;

var Directory = function () {
  function Directory(path) {
    _classCallCheck(this, Directory);

    this.path = path;
  }

  _createClass(Directory, [{
    key: 'getPath',
    value: function getPath() {
      return this.path;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var type = Directory.type,
          path = this.path,
          json = {
        "type": type,
        "path": path
      };

      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var pathJSON = json["path"],
          path = pathJSON,
          ///
      directory = new Directory(path);

      return directory;
    }
  }, {
    key: 'fromDirectoryPath',
    value: function fromDirectoryPath(directoryPath, projectsDirectoryPath) {
      var directory = null;

      var absolutePath = concatenatePaths(projectsDirectoryPath, directoryPath),
          absolutePathDirectoryPath = isEntryDirectory(absolutePath);

      if (absolutePathDirectoryPath) {
        var _path = directoryPath; ///

        directory = new Directory(_path);
      }

      return directory;
    }
  }, {
    key: 'fromJSZipEntry',
    value: function fromJSZipEntry(jsZipEntry, callback) {
      var directory = null;

      var jsZipEntryDirectory = jsZipEntry.dir; ///

      if (!jsZipEntryDirectory) {
        callback(directory);
      } else {
        var jsZipDirectory = jsZipEntry;

        var jsZipDirectoryPath = jsZipDirectory.name; ///

        jsZipDirectoryPath = pathUtilities.pathWithoutTrailingSlashFromPath(jsZipDirectoryPath); ///

        jsZipDirectoryPath = pathUtilities.removeMasterDirectoryNameFromPath(jsZipDirectoryPath); ///

        var _path2 = jsZipDirectoryPath; ///

        directory = new Directory(_path2);

        callback(directory);
      }
    }
  }]);

  return Directory;
}();

Directory.type = 'Directory';

module.exports = Directory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInBhdGhVdGlsaXRpZXMiLCJwYXRoIiwiZmlsZVN5c3RlbSIsImNvbmNhdGVuYXRlUGF0aHMiLCJpc0VudHJ5RGlyZWN0b3J5IiwiRGlyZWN0b3J5IiwidHlwZSIsImpzb24iLCJwYXRoSlNPTiIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRGlyZWN0b3J5IiwianNaaXBEaXJlY3RvcnlQYXRoIiwibmFtZSIsInBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsa0JBQVIsQ0FBdEI7O0lBRVFFLEksR0FBcUJILFMsQ0FBckJHLEk7SUFBTUMsVSxHQUFlSixTLENBQWZJLFU7SUFDTkMsZ0IsR0FBcUJGLEksQ0FBckJFLGdCO0lBQ0FDLGdCLEdBQXFCRixVLENBQXJCRSxnQjs7SUFFRkMsUztBQUNKLHFCQUFZSixJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1LLE9BQU9ELFVBQVVDLElBQXZCO0FBQUEsVUFDTUwsT0FBTyxLQUFLQSxJQURsQjtBQUFBLFVBRU1NLE9BQU87QUFDTCxnQkFBUUQsSUFESDtBQUVMLGdCQUFRTDtBQUZILE9BRmI7O0FBT0EsYUFBT00sSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNQyxXQUFXRCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNTixPQUFPTyxRQURiO0FBQUEsVUFDd0I7QUFDbEJDLGtCQUFZLElBQUlKLFNBQUosQ0FBY0osSUFBZCxDQUZsQjs7QUFJQSxhQUFPUSxTQUFQO0FBQ0Q7OztzQ0FFd0JDLGEsRUFBZUMscUIsRUFBdUI7QUFDN0QsVUFBSUYsWUFBWSxJQUFoQjs7QUFFQSxVQUFNRyxlQUFlVCxpQkFBaUJRLHFCQUFqQixFQUF3Q0QsYUFBeEMsQ0FBckI7QUFBQSxVQUNNRyw0QkFBNEJULGlCQUFpQlEsWUFBakIsQ0FEbEM7O0FBR0EsVUFBSUMseUJBQUosRUFBK0I7QUFDN0IsWUFBTVosUUFBT1MsYUFBYixDQUQ2QixDQUNEOztBQUU1QkQsb0JBQVksSUFBSUosU0FBSixDQUFjSixLQUFkLENBQVo7QUFDRDs7QUFFRCxhQUFPUSxTQUFQO0FBQ0Q7OzttQ0FFcUJLLFUsRUFBWUMsUSxFQUFVO0FBQzFDLFVBQUlOLFlBQVksSUFBaEI7O0FBRUEsVUFBTU8sc0JBQXNCRixXQUFXRyxHQUF2QyxDQUgwQyxDQUdFOztBQUU1QyxVQUFJLENBQUNELG1CQUFMLEVBQTBCO0FBQ3hCRCxpQkFBU04sU0FBVDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1TLGlCQUFpQkosVUFBdkI7O0FBRUEsWUFBSUsscUJBQXFCRCxlQUFlRSxJQUF4QyxDQUhLLENBRzBDOztBQUUvQ0QsNkJBQXFCbkIsY0FBY3FCLGdDQUFkLENBQStDRixrQkFBL0MsQ0FBckIsQ0FMSyxDQUtxRjs7QUFFMUZBLDZCQUFxQm5CLGNBQWNzQixpQ0FBZCxDQUFnREgsa0JBQWhELENBQXJCLENBUEssQ0FPcUY7O0FBRTFGLFlBQU1sQixTQUFPa0Isa0JBQWIsQ0FUSyxDQVM2Qjs7QUFFbENWLG9CQUFZLElBQUlKLFNBQUosQ0FBY0osTUFBZCxDQUFaOztBQUVBYyxpQkFBU04sU0FBVDtBQUNEO0FBQ0Y7Ozs7OztBQUdISixVQUFVQyxJQUFWLEdBQWlCLFdBQWpCOztBQUVBaUIsT0FBT0MsT0FBUCxHQUFpQm5CLFNBQWpCIiwiZmlsZSI6ImRpcmVjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9wYXRoJyk7XG5cbmNvbnN0IHsgcGF0aCwgZmlsZVN5c3RlbSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoLFxuICAgICAgeyBpc0VudHJ5RGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtO1xuXG5jbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gRGlyZWN0b3J5LnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgaWYgKGFic29sdXRlUGF0aERpcmVjdG9yeVBhdGgpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBkaXJlY3RvcnlQYXRoOyAvLy9cblxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QganNaaXBFbnRyeURpcmVjdG9yeSA9IGpzWmlwRW50cnkuZGlyOyAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeURpcmVjdG9yeSkge1xuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QganNaaXBEaXJlY3RvcnkgPSBqc1ppcEVudHJ5O1xuICAgICAgXG4gICAgICBsZXQganNaaXBEaXJlY3RvcnlQYXRoID0ganNaaXBEaXJlY3RvcnkubmFtZTsgIC8vL1xuXG4gICAgICBqc1ppcERpcmVjdG9yeVBhdGggPSBwYXRoVXRpbGl0aWVzLnBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoKGpzWmlwRGlyZWN0b3J5UGF0aCk7ICAvLy9cblxuICAgICAganNaaXBEaXJlY3RvcnlQYXRoID0gcGF0aFV0aWxpdGllcy5yZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGgoanNaaXBEaXJlY3RvcnlQYXRoKTsgLy8vXG5cbiAgICAgIGNvbnN0IHBhdGggPSBqc1ppcERpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcblxuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9XG4gIH1cbn1cblxuRGlyZWN0b3J5LnR5cGUgPSAnRGlyZWN0b3J5JztcblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rvcnk7XG4iXX0=