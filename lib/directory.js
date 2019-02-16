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
    key: 'isFile',
    value: function isFile() {
      var file = false;

      return file;
    }
  }, {
    key: 'isDirectory',
    value: function isDirectory() {
      var directory = true;

      return directory;
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
      var directory = null;

      var type = Directory.type,
          typeJSON = json["type"];


      if (typeJSON === type) {
        ///
        var pathJSON = json["path"],
            path = pathJSON; ///

        directory = new Directory(path);
      }

      return directory;
    }
  }, {
    key: 'fromPath',
    value: function fromPath(path, projectsDirectoryPath) {
      var directory = null;

      var absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryDirectory = isEntryDirectory(absolutePath);

      if (entryDirectory) {
        directory = new Directory(path);
      }

      return directory;
    }
  }, {
    key: 'fromJSZipEntry',
    value: function fromJSZipEntry(jsZipEntry, callback) {
      var directory = null;

      var dir = jsZipEntry.dir,
          jsZipEntryDirectory = dir; ///

      if (!jsZipEntryDirectory) {
        callback(directory);

        return;
      }

      var jsZipDirectory = jsZipEntry,
          name = jsZipDirectory.name;

      var path = name; ///

      path = pathWithoutTrailingSlashFromPath(path); ///

      path = removeMasterDirectoryNameFromPath(path); ///

      directory = new Directory(path);

      callback(directory);
    }
  }]);

  return Directory;
}();

var type = 'Directory';

Object.assign(Directory, {
  type: type
});

module.exports = Directory;

function pathWithoutTrailingSlashFromPath(path) {
  var pathWithoutTrailingSlash = path.replace(/\/$/, '');

  return pathWithoutTrailingSlash;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJpc0VudHJ5RGlyZWN0b3J5IiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRGlyZWN0b3J5IiwicGF0aCIsImZpbGUiLCJkaXJlY3RvcnkiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJlbnRyeURpcmVjdG9yeSIsImpzWmlwRW50cnkiLCJjYWxsYmFjayIsImRpciIsImpzWmlwRW50cnlEaXJlY3RvcnkiLCJuYW1lIiwianNaaXBEaXJlY3RvcnkiLCJwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aCIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2giLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUUsYSxHQUF1Q0gsUyxDQUF2Q0csYTtJQUFlQyxtQixHQUF3QkosUyxDQUF4QkksbUI7SUFDZkMsZ0IsR0FBcUJGLGEsQ0FBckJFLGdCO0lBQ0FDLGdCLEdBQXFCRixtQixDQUFyQkUsZ0I7SUFDQUMsaUMsR0FBc0NMLGEsQ0FBdENLLGlDOztJQUVGQyxTO0FBQ0oscUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsT0FBTyxLQUFiOztBQUVBLGFBQU9BLElBQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUMsWUFBWSxJQUFsQjs7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUVDLElBQUYsR0FBV0osU0FBWCxDQUFFSSxJQUFGO0FBQUEsVUFDQUgsSUFEQSxHQUNPLEtBQUtBLElBRFo7QUFBQSxVQUVBSSxJQUZBLEdBRU87QUFDTCxnQkFBUUQsSUFESDtBQUVMLGdCQUFRSDtBQUZILE9BRlA7OztBQU9OLGFBQU9JLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBSUYsWUFBWSxJQUFoQjs7QUFFTSxVQUFFQyxJQUFGLEdBQVdKLFNBQVgsQ0FBRUksSUFBRjtBQUFBLFVBQ0FFLFFBREEsR0FDV0QsS0FBSyxNQUFMLENBRFg7OztBQUdOLFVBQUlDLGFBQWFGLElBQWpCLEVBQXVCO0FBQUc7QUFDeEIsWUFBTUcsV0FBV0YsS0FBSyxNQUFMLENBQWpCO0FBQUEsWUFDTUosT0FBT00sUUFEYixDQURxQixDQUVHOztBQUV4Qkosb0JBQVksSUFBSUgsU0FBSixDQUFjQyxJQUFkLENBQVo7QUFDRDs7QUFFRCxhQUFPRSxTQUFQO0FBQ0Q7Ozs2QkFFZUYsSSxFQUFNTyxxQixFQUF1QjtBQUMzQyxVQUFJTCxZQUFZLElBQWhCOztBQUVBLFVBQU1NLGVBQWVaLGlCQUFpQlcscUJBQWpCLEVBQXdDUCxJQUF4QyxDQUFyQjtBQUFBLFVBQ01TLGlCQUFpQlosaUJBQWlCVyxZQUFqQixDQUR2Qjs7QUFHQSxVQUFJQyxjQUFKLEVBQW9CO0FBQ2xCUCxvQkFBWSxJQUFJSCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEOztBQUVELGFBQU9FLFNBQVA7QUFDRDs7O21DQUVxQlEsVSxFQUFZQyxRLEVBQVU7QUFDMUMsVUFBSVQsWUFBWSxJQUFoQjs7QUFFTSxVQUFFVSxHQUFGLEdBQVVGLFVBQVYsQ0FBRUUsR0FBRjtBQUFBLFVBQ0FDLG1CQURBLEdBQ3NCRCxHQUR0QixDQUhvQyxDQUlUOztBQUVqQyxVQUFJLENBQUNDLG1CQUFMLEVBQTBCO0FBQ3hCRixpQkFBU1QsU0FBVDs7QUFFQTtBQUNEOztBQUVLLDJCQUFpQlEsVUFBakI7QUFBQSxVQUNFSSxJQURGLEdBQ1dDLGNBRFgsQ0FDRUQsSUFERjs7QUFHTixVQUFJZCxPQUFPYyxJQUFYLENBZjBDLENBZXhCOztBQUVsQmQsYUFBT2dCLGlDQUFpQ2hCLElBQWpDLENBQVAsQ0FqQjBDLENBaUJNOztBQUVoREEsYUFBT0Ysa0NBQWtDRSxJQUFsQyxDQUFQLENBbkIwQyxDQW1CTTs7QUFFaERFLGtCQUFZLElBQUlILFNBQUosQ0FBY0MsSUFBZCxDQUFaOztBQUVBVyxlQUFTVCxTQUFUO0FBQ0Q7Ozs7OztBQUdILElBQU1DLE9BQU8sV0FBYjs7QUFFQWMsT0FBT0MsTUFBUCxDQUFjbkIsU0FBZCxFQUF5QjtBQUN2Qkk7QUFEdUIsQ0FBekI7O0FBSUFnQixPQUFPQyxPQUFQLEdBQWlCckIsU0FBakI7O0FBRUEsU0FBU2lCLGdDQUFULENBQTBDaEIsSUFBMUMsRUFBZ0Q7QUFDOUMsTUFBTXFCLDJCQUEyQnJCLEtBQUtzQixPQUFMLENBQWEsS0FBYixFQUFvQixFQUFwQixDQUFqQzs7QUFFQSxTQUFPRCx3QkFBUDtBQUNEIiwiZmlsZSI6ImRpcmVjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyk7XG5cbmNvbnN0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBpc0VudHJ5RGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IG5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gdHJ1ZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBEaXJlY3RvcnksXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG5cbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICB0eXBlSlNPTiA9IGpzb25bXCJ0eXBlXCJdO1xuXG4gICAgaWYgKHR5cGVKU09OID09PSB0eXBlKSB7ICAvLy9cbiAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICBwYXRoID0gcGF0aEpTT047ICAvLy9cblxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB7IGRpciB9ID0ganNaaXBFbnRyeSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0gZGlyOyAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeURpcmVjdG9yeSkge1xuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGpzWmlwRGlyZWN0b3J5ID0ganNaaXBFbnRyeSwgIC8vL1xuICAgICAgICAgIHsgbmFtZSB9ID0ganNaaXBEaXJlY3Rvcnk7XG5cbiAgICBsZXQgcGF0aCA9IG5hbWU7ICAvLy9cblxuICAgIHBhdGggPSBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKTsgIC8vL1xuXG4gICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTsgLy8vXG5cbiAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ0RpcmVjdG9yeSc7XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5LCB7XG4gIHR5cGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdG9yeTtcblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2ggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaDtcbn1cblxuIl19