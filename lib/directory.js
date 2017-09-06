'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var nameUtilities = require('./utilities/name');

var pathUtilities = necessary.pathUtilities,
    fileSystemUtilities = necessary.fileSystemUtilities,
    concatenatePaths = pathUtilities.concatenatePaths,
    isEntryDirectory = fileSystemUtilities.isEntryDirectory,
    removeMasterDirectoryNameFromPath = nameUtilities.removeMasterDirectoryNameFromPath;

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
          entryDirectory = isEntryDirectory(absolutePath);

      if (entryDirectory) {
        var path = directoryPath; ///

        directory = new Directory(path);
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
        var jsZipDirectory = jsZipEntry,
            jsZipDirectoryPath = jsZipDirectory.name; ///

        var path = jsZipDirectoryPath; ///

        path = pathWithoutTrailingSlashFromPath(path); ///

        path = removeMasterDirectoryNameFromPath(path); ///

        directory = new Directory(path);

        callback(directory);
      }
    }
  }]);

  return Directory;
}();

Directory.type = 'Directory';

module.exports = Directory;

function pathWithoutTrailingSlashFromPath(path) {
  var pathWithoutTrailingSlash = path.replace(/\/$/, '');

  return pathWithoutTrailingSlash;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJpc0VudHJ5RGlyZWN0b3J5IiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRGlyZWN0b3J5IiwicGF0aCIsInR5cGUiLCJqc29uIiwicGF0aEpTT04iLCJkaXJlY3RvcnkiLCJkaXJlY3RvcnlQYXRoIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVQYXRoIiwiZW50cnlEaXJlY3RvcnkiLCJqc1ppcEVudHJ5IiwiY2FsbGJhY2siLCJqc1ppcEVudHJ5RGlyZWN0b3J5IiwiZGlyIiwianNaaXBEaXJlY3RvcnkiLCJqc1ppcERpcmVjdG9yeVBhdGgiLCJuYW1lIiwicGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoRnJvbVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwicGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsa0JBQVIsQ0FBdEI7O0lBRVFFLGEsR0FBdUNILFMsQ0FBdkNHLGE7SUFBZUMsbUIsR0FBd0JKLFMsQ0FBeEJJLG1CO0lBQ2ZDLGdCLEdBQXFCRixhLENBQXJCRSxnQjtJQUNBQyxnQixHQUFxQkYsbUIsQ0FBckJFLGdCO0lBQ0FDLGlDLEdBQXNDTCxhLENBQXRDSyxpQzs7SUFFRkMsUztBQUNKLHFCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLE9BQU9GLFVBQVVFLElBQXZCO0FBQUEsVUFDTUQsT0FBTyxLQUFLQSxJQURsQjtBQUFBLFVBRU1FLE9BQU87QUFDTCxnQkFBUUQsSUFESDtBQUVMLGdCQUFRRDtBQUZILE9BRmI7O0FBT0EsYUFBT0UsSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNQyxXQUFXRCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNRixPQUFPRyxRQURiO0FBQUEsVUFDd0I7QUFDbEJDLGtCQUFZLElBQUlMLFNBQUosQ0FBY0MsSUFBZCxDQUZsQjs7QUFJQSxhQUFPSSxTQUFQO0FBQ0Q7OztzQ0FFd0JDLGEsRUFBZUMscUIsRUFBdUI7QUFDN0QsVUFBSUYsWUFBWSxJQUFoQjs7QUFFQSxVQUFNRyxlQUFlWCxpQkFBaUJVLHFCQUFqQixFQUF3Q0QsYUFBeEMsQ0FBckI7QUFBQSxVQUNNRyxpQkFBaUJYLGlCQUFpQlUsWUFBakIsQ0FEdkI7O0FBR0EsVUFBSUMsY0FBSixFQUFvQjtBQUNsQixZQUFNUixPQUFPSyxhQUFiLENBRGtCLENBQ1U7O0FBRTVCRCxvQkFBWSxJQUFJTCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEOztBQUVELGFBQU9JLFNBQVA7QUFDRDs7O21DQUVxQkssVSxFQUFZQyxRLEVBQVU7QUFDMUMsVUFBSU4sWUFBWSxJQUFoQjs7QUFFQSxVQUFNTyxzQkFBc0JGLFdBQVdHLEdBQXZDLENBSDBDLENBR0U7O0FBRTVDLFVBQUksQ0FBQ0QsbUJBQUwsRUFBMEI7QUFDeEJELGlCQUFTTixTQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTVMsaUJBQWlCSixVQUF2QjtBQUFBLFlBQ01LLHFCQUFxQkQsZUFBZUUsSUFEMUMsQ0FESyxDQUU0Qzs7QUFFakQsWUFBSWYsT0FBT2Msa0JBQVgsQ0FKSyxDQUkyQjs7QUFFaENkLGVBQU9nQixpQ0FBaUNoQixJQUFqQyxDQUFQLENBTkssQ0FNMkM7O0FBRWhEQSxlQUFPRixrQ0FBa0NFLElBQWxDLENBQVAsQ0FSSyxDQVEyQzs7QUFFaERJLG9CQUFZLElBQUlMLFNBQUosQ0FBY0MsSUFBZCxDQUFaOztBQUVBVSxpQkFBU04sU0FBVDtBQUNEO0FBQ0Y7Ozs7OztBQUdITCxVQUFVRSxJQUFWLEdBQWlCLFdBQWpCOztBQUVBZ0IsT0FBT0MsT0FBUCxHQUFpQm5CLFNBQWpCOztBQUVBLFNBQVNpQixnQ0FBVCxDQUEwQ2hCLElBQTFDLEVBQWdEO0FBQzlDLE1BQU1tQiwyQkFBMkJuQixLQUFLb0IsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBakM7O0FBRUEsU0FBT0Qsd0JBQVA7QUFDRCIsImZpbGUiOiJkaXJlY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBuYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gRGlyZWN0b3J5LnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgY29uc3QgcGF0aCA9IGRpcmVjdG9yeVBhdGg7IC8vL1xuXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXI7IC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBjYWxsYmFjayhkaXJlY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBqc1ppcERpcmVjdG9yeSA9IGpzWmlwRW50cnksXG4gICAgICAgICAgICBqc1ppcERpcmVjdG9yeVBhdGggPSBqc1ppcERpcmVjdG9yeS5uYW1lOyAgLy8vXG5cbiAgICAgIGxldCBwYXRoID0ganNaaXBEaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIHBhdGggPSBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKTsgIC8vL1xuXG4gICAgICBwYXRoID0gcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpOyAvLy9cblxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcblxuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9XG4gIH1cbn1cblxuRGlyZWN0b3J5LnR5cGUgPSAnRGlyZWN0b3J5JztcblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rvcnk7XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xuXG4gIHJldHVybiBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2g7XG59XG5cbiJdfQ==