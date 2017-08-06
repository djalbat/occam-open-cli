'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var pathUtilities = require('./utilities/path');

var path = necessary.path,
    fileSystem = necessary.fileSystem,
    isEntryDirectory = fileSystem.isEntryDirectory,
    concatenatePaths = path.concatenatePaths,
    pathWithoutTrailingSlashFromPath = path.pathWithoutTrailingSlashFromPath;

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

        jsZipDirectoryPath = pathWithoutTrailingSlashFromPath(jsZipDirectoryPath); ///
        jsZipDirectoryPath = pathUtilities.removeMasterDirectoryNameFromPath(jsZipDirectoryPath);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInBhdGhVdGlsaXRpZXMiLCJwYXRoIiwiZmlsZVN5c3RlbSIsImlzRW50cnlEaXJlY3RvcnkiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoRnJvbVBhdGgiLCJEaXJlY3RvcnkiLCJ0eXBlIiwianNvbiIsInBhdGhKU09OIiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFic29sdXRlUGF0aCIsImFic29sdXRlUGF0aERpcmVjdG9yeVBhdGgiLCJqc1ppcEVudHJ5IiwiY2FsbGJhY2siLCJqc1ppcEVudHJ5RGlyZWN0b3J5IiwiZGlyIiwianNaaXBEaXJlY3RvcnkiLCJqc1ppcERpcmVjdG9yeVBhdGgiLCJuYW1lIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsa0JBQVIsQ0FBdEI7O0lBRVFFLEksR0FBcUJILFMsQ0FBckJHLEk7SUFBTUMsVSxHQUFlSixTLENBQWZJLFU7SUFDTkMsZ0IsR0FBcUJELFUsQ0FBckJDLGdCO0lBQ0FDLGdCLEdBQXVESCxJLENBQXZERyxnQjtJQUFrQkMsZ0MsR0FBcUNKLEksQ0FBckNJLGdDOztJQUVwQkMsUztBQUNKLHFCQUFZTCxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1NLE9BQU9ELFVBQVVDLElBQXZCO0FBQUEsVUFDTU4sT0FBTyxLQUFLQSxJQURsQjtBQUFBLFVBRU1PLE9BQU87QUFDTCxnQkFBUUQsSUFESDtBQUVMLGdCQUFRTjtBQUZILE9BRmI7O0FBT0EsYUFBT08sSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNQyxXQUFXRCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNUCxPQUFPUSxRQURiO0FBQUEsVUFDd0I7QUFDbEJDLGtCQUFZLElBQUlKLFNBQUosQ0FBY0wsSUFBZCxDQUZsQjs7QUFJQSxhQUFPUyxTQUFQO0FBQ0Q7OztzQ0FFd0JDLGEsRUFBZUMscUIsRUFBdUI7QUFDN0QsVUFBSUYsWUFBWSxJQUFoQjs7QUFFQSxVQUFNRyxlQUFlVCxpQkFBaUJRLHFCQUFqQixFQUF3Q0QsYUFBeEMsQ0FBckI7QUFBQSxVQUNNRyw0QkFBNEJYLGlCQUFpQlUsWUFBakIsQ0FEbEM7O0FBR0EsVUFBSUMseUJBQUosRUFBK0I7QUFDN0IsWUFBTWIsUUFBT1UsYUFBYixDQUQ2QixDQUNEOztBQUU1QkQsb0JBQVksSUFBSUosU0FBSixDQUFjTCxLQUFkLENBQVo7QUFDRDs7QUFFRCxhQUFPUyxTQUFQO0FBQ0Q7OzttQ0FFcUJLLFUsRUFBWUMsUSxFQUFVO0FBQzFDLFVBQUlOLFlBQVksSUFBaEI7O0FBRUEsVUFBTU8sc0JBQXNCRixXQUFXRyxHQUF2QyxDQUgwQyxDQUdFOztBQUU1QyxVQUFJLENBQUNELG1CQUFMLEVBQTBCO0FBQ3hCRCxpQkFBU04sU0FBVDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1TLGlCQUFpQkosVUFBdkI7O0FBRUEsWUFBSUsscUJBQXFCRCxlQUFlRSxJQUF4QyxDQUhLLENBRzBDOztBQUUvQ0QsNkJBQXFCZixpQ0FBaUNlLGtCQUFqQyxDQUFyQixDQUxLLENBS3VFO0FBQzVFQSw2QkFBcUJwQixjQUFjc0IsaUNBQWQsQ0FBZ0RGLGtCQUFoRCxDQUFyQjs7QUFFQSxZQUFNbkIsU0FBT21CLGtCQUFiLENBUkssQ0FRNkI7O0FBRWxDVixvQkFBWSxJQUFJSixTQUFKLENBQWNMLE1BQWQsQ0FBWjs7QUFFQWUsaUJBQVNOLFNBQVQ7QUFDRDtBQUNGOzs7Ozs7QUFHSEosVUFBVUMsSUFBVixHQUFpQixXQUFqQjs7QUFFQWdCLE9BQU9DLE9BQVAsR0FBaUJsQixTQUFqQiIsImZpbGUiOiJkaXJlY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBwYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcGF0aCcpO1xuXG5jb25zdCB7IHBhdGgsIGZpbGVTeXN0ZW0gfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbSxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoRnJvbVBhdGggfSA9IHBhdGg7XG5cbmNsYXNzIERpcmVjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSBEaXJlY3RvcnkudHlwZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgIHBhdGggPSBwYXRoSlNPTiwgIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGFic29sdXRlUGF0aERpcmVjdG9yeVBhdGggPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICBpZiAoYWJzb2x1dGVQYXRoRGlyZWN0b3J5UGF0aCkge1xuICAgICAgY29uc3QgcGF0aCA9IGRpcmVjdG9yeVBhdGg7IC8vL1xuXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXI7IC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBjYWxsYmFjayhkaXJlY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBqc1ppcERpcmVjdG9yeSA9IGpzWmlwRW50cnk7XG4gICAgICBcbiAgICAgIGxldCBqc1ppcERpcmVjdG9yeVBhdGggPSBqc1ppcERpcmVjdG9yeS5uYW1lOyAgLy8vXG5cbiAgICAgIGpzWmlwRGlyZWN0b3J5UGF0aCA9IHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoKGpzWmlwRGlyZWN0b3J5UGF0aCk7ICAvLy9cbiAgICAgIGpzWmlwRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsaXRpZXMucmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKGpzWmlwRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBqc1ppcERpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcblxuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9XG4gIH1cbn1cblxuRGlyZWN0b3J5LnR5cGUgPSAnRGlyZWN0b3J5JztcblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rvcnk7XG4iXX0=