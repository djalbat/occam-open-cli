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

      try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path),
            entryDirectory = isEntryDirectory(absolutePath);

        if (entryDirectory) {
          directory = new Directory(path);
        }
      } catch (error) {
        ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJpc0VudHJ5RGlyZWN0b3J5IiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRGlyZWN0b3J5IiwicGF0aCIsImZpbGUiLCJkaXJlY3RvcnkiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJlbnRyeURpcmVjdG9yeSIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwiZGlyIiwianNaaXBFbnRyeURpcmVjdG9yeSIsIm5hbWUiLCJqc1ppcERpcmVjdG9yeSIsInBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLGtCQUFSLENBQXRCOztJQUVRRSxhLEdBQXVDSCxTLENBQXZDRyxhO0lBQWVDLG1CLEdBQXdCSixTLENBQXhCSSxtQjtJQUNmQyxnQixHQUFxQkYsYSxDQUFyQkUsZ0I7SUFDQUMsZ0IsR0FBcUJGLG1CLENBQXJCRSxnQjtJQUNBQyxpQyxHQUFzQ0wsYSxDQUF0Q0ssaUM7O0lBRUZDLFM7QUFDSixxQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxPQUFPLEtBQWI7O0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQyxZQUFZLElBQWxCOztBQUVBLGFBQU9BLFNBQVA7QUFDRDs7OzZCQUVRO0FBQ0QsVUFBRUMsSUFBRixHQUFXSixTQUFYLENBQUVJLElBQUY7QUFBQSxVQUNBSCxJQURBLEdBQ08sS0FBS0EsSUFEWjtBQUFBLFVBRUFJLElBRkEsR0FFTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFIO0FBRkgsT0FGUDs7O0FBT04sYUFBT0ksSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFJRixZQUFZLElBQWhCOztBQUVNLFVBQUVDLElBQUYsR0FBV0osU0FBWCxDQUFFSSxJQUFGO0FBQUEsVUFDQUUsUUFEQSxHQUNXRCxLQUFLLE1BQUwsQ0FEWDs7O0FBR04sVUFBSUMsYUFBYUYsSUFBakIsRUFBdUI7QUFBRztBQUN4QixZQUFNRyxXQUFXRixLQUFLLE1BQUwsQ0FBakI7QUFBQSxZQUNNSixPQUFPTSxRQURiLENBRHFCLENBRUc7O0FBRXhCSixvQkFBWSxJQUFJSCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEOztBQUVELGFBQU9FLFNBQVA7QUFDRDs7OzZCQUVlRixJLEVBQU1PLHFCLEVBQXVCO0FBQzNDLFVBQUlMLFlBQVksSUFBaEI7O0FBRUEsVUFBSTtBQUNGLFlBQU1NLGVBQWVaLGlCQUFpQlcscUJBQWpCLEVBQXdDUCxJQUF4QyxDQUFyQjtBQUFBLFlBQ01TLGlCQUFpQlosaUJBQWlCVyxZQUFqQixDQUR2Qjs7QUFHQSxZQUFJQyxjQUFKLEVBQW9CO0FBQ2xCUCxzQkFBWSxJQUFJSCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEO0FBQ0YsT0FQRCxDQU9FLE9BQU9VLEtBQVAsRUFBYztBQUNkO0FBQ0Q7O0FBRUQsYUFBT1IsU0FBUDtBQUNEOzs7bUNBRXFCUyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJVixZQUFZLElBQWhCOztBQUVNLFVBQUVXLEdBQUYsR0FBVUYsVUFBVixDQUFFRSxHQUFGO0FBQUEsVUFDQUMsbUJBREEsR0FDc0JELEdBRHRCLENBSG9DLENBSVQ7O0FBRWpDLFVBQUksQ0FBQ0MsbUJBQUwsRUFBMEI7QUFDeEJGLGlCQUFTVixTQUFUOztBQUVBO0FBQ0Q7O0FBRUssMkJBQWlCUyxVQUFqQjtBQUFBLFVBQ0VJLElBREYsR0FDV0MsY0FEWCxDQUNFRCxJQURGOztBQUdOLFVBQUlmLE9BQU9lLElBQVgsQ0FmMEMsQ0FleEI7O0FBRWxCZixhQUFPaUIsaUNBQWlDakIsSUFBakMsQ0FBUCxDQWpCMEMsQ0FpQk07O0FBRWhEQSxhQUFPRixrQ0FBa0NFLElBQWxDLENBQVAsQ0FuQjBDLENBbUJNOztBQUVoREUsa0JBQVksSUFBSUgsU0FBSixDQUFjQyxJQUFkLENBQVo7O0FBRUFZLGVBQVNWLFNBQVQ7QUFDRDs7Ozs7O0FBR0gsSUFBTUMsT0FBTyxXQUFiOztBQUVBZSxPQUFPQyxNQUFQLENBQWNwQixTQUFkLEVBQXlCO0FBQ3ZCSTtBQUR1QixDQUF6Qjs7QUFJQWlCLE9BQU9DLE9BQVAsR0FBaUJ0QixTQUFqQjs7QUFFQSxTQUFTa0IsZ0NBQVQsQ0FBMENqQixJQUExQyxFQUFnRDtBQUM5QyxNQUFNc0IsMkJBQTJCdEIsS0FBS3VCLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLEVBQXBCLENBQWpDOztBQUVBLFNBQU9ELHdCQUFQO0FBQ0QiLCJmaWxlIjoiZGlyZWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKTtcblxuY29uc3QgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGlzRW50cnlEaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gbmFtZVV0aWxpdGllcztcblxuY2xhc3MgRGlyZWN0b3J5IHtcbiAgY29uc3RydWN0b3IocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0gRGlyZWN0b3J5LFxuICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTjsgIC8vL1xuXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxuICAgICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgeyBkaXIgfSA9IGpzWmlwRW50cnksXG4gICAgICAgICAganNaaXBFbnRyeURpcmVjdG9yeSA9IGRpcjsgLy8vXG5cbiAgICBpZiAoIWpzWmlwRW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGNhbGxiYWNrKGRpcmVjdG9yeSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqc1ppcERpcmVjdG9yeSA9IGpzWmlwRW50cnksICAvLy9cbiAgICAgICAgICB7IG5hbWUgfSA9IGpzWmlwRGlyZWN0b3J5O1xuXG4gICAgbGV0IHBhdGggPSBuYW1lOyAgLy8vXG5cbiAgICBwYXRoID0gcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoRnJvbVBhdGgocGF0aCk7ICAvLy9cblxuICAgIHBhdGggPSByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCk7IC8vL1xuXG4gICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcblxuICAgIGNhbGxiYWNrKGRpcmVjdG9yeSk7XG4gIH1cbn1cblxuY29uc3QgdHlwZSA9ICdEaXJlY3RvcnknO1xuXG5PYmplY3QuYXNzaWduKERpcmVjdG9yeSwge1xuICB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rvcnk7XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xuXG4gIHJldHVybiBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2g7XG59XG5cbiJdfQ==