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
          entryDirectory = isEntryDirectory(absolutePath);

      if (entryDirectory) {
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
        var jsZipDirectory = jsZipEntry,
            jsZipDirectoryPath = jsZipDirectory.name; ///

        var _path2 = jsZipDirectoryPath; ///

        _path2 = pathUtilities.pathWithoutTrailingSlashFromPath(_path2); ///

        _path2 = pathUtilities.removeMasterDirectoryNameFromPath(_path2); ///

        directory = new Directory(_path2);

        callback(directory);
      }
    }
  }]);

  return Directory;
}();

Directory.type = 'Directory';

module.exports = Directory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInBhdGhVdGlsaXRpZXMiLCJwYXRoIiwiZmlsZVN5c3RlbSIsImNvbmNhdGVuYXRlUGF0aHMiLCJpc0VudHJ5RGlyZWN0b3J5IiwiRGlyZWN0b3J5IiwidHlwZSIsImpzb24iLCJwYXRoSlNPTiIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJlbnRyeURpcmVjdG9yeSIsImpzWmlwRW50cnkiLCJjYWxsYmFjayIsImpzWmlwRW50cnlEaXJlY3RvcnkiLCJkaXIiLCJqc1ppcERpcmVjdG9yeSIsImpzWmlwRGlyZWN0b3J5UGF0aCIsIm5hbWUiLCJwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aCIsInJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLGtCQUFSLENBQXRCOztJQUVRRSxJLEdBQXFCSCxTLENBQXJCRyxJO0lBQU1DLFUsR0FBZUosUyxDQUFmSSxVO0lBQ05DLGdCLEdBQXFCRixJLENBQXJCRSxnQjtJQUNBQyxnQixHQUFxQkYsVSxDQUFyQkUsZ0I7O0lBRUZDLFM7QUFDSixxQkFBWUosSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNSyxPQUFPRCxVQUFVQyxJQUF2QjtBQUFBLFVBQ01MLE9BQU8sS0FBS0EsSUFEbEI7QUFBQSxVQUVNTSxPQUFPO0FBQ0wsZ0JBQVFELElBREg7QUFFTCxnQkFBUUw7QUFGSCxPQUZiOztBQU9BLGFBQU9NLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUMsV0FBV0QsS0FBSyxNQUFMLENBQWpCO0FBQUEsVUFDTU4sT0FBT08sUUFEYjtBQUFBLFVBQ3dCO0FBQ2xCQyxrQkFBWSxJQUFJSixTQUFKLENBQWNKLElBQWQsQ0FGbEI7O0FBSUEsYUFBT1EsU0FBUDtBQUNEOzs7c0NBRXdCQyxhLEVBQWVDLHFCLEVBQXVCO0FBQzdELFVBQUlGLFlBQVksSUFBaEI7O0FBRUEsVUFBTUcsZUFBZVQsaUJBQWlCUSxxQkFBakIsRUFBd0NELGFBQXhDLENBQXJCO0FBQUEsVUFDTUcsaUJBQWlCVCxpQkFBaUJRLFlBQWpCLENBRHZCOztBQUdBLFVBQUlDLGNBQUosRUFBb0I7QUFDbEIsWUFBTVosUUFBT1MsYUFBYixDQURrQixDQUNVOztBQUU1QkQsb0JBQVksSUFBSUosU0FBSixDQUFjSixLQUFkLENBQVo7QUFDRDs7QUFFRCxhQUFPUSxTQUFQO0FBQ0Q7OzttQ0FFcUJLLFUsRUFBWUMsUSxFQUFVO0FBQzFDLFVBQUlOLFlBQVksSUFBaEI7O0FBRUEsVUFBTU8sc0JBQXNCRixXQUFXRyxHQUF2QyxDQUgwQyxDQUdFOztBQUU1QyxVQUFJLENBQUNELG1CQUFMLEVBQTBCO0FBQ3hCRCxpQkFBU04sU0FBVDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1TLGlCQUFpQkosVUFBdkI7QUFBQSxZQUNNSyxxQkFBcUJELGVBQWVFLElBRDFDLENBREssQ0FFNEM7O0FBRWpELFlBQUluQixTQUFPa0Isa0JBQVgsQ0FKSyxDQUkyQjs7QUFFaENsQixpQkFBT0QsY0FBY3FCLGdDQUFkLENBQStDcEIsTUFBL0MsQ0FBUCxDQU5LLENBTXlEOztBQUU5REEsaUJBQU9ELGNBQWNzQixpQ0FBZCxDQUFnRHJCLE1BQWhELENBQVAsQ0FSSyxDQVF5RDs7QUFFOURRLG9CQUFZLElBQUlKLFNBQUosQ0FBY0osTUFBZCxDQUFaOztBQUVBYyxpQkFBU04sU0FBVDtBQUNEO0FBQ0Y7Ozs7OztBQUdISixVQUFVQyxJQUFWLEdBQWlCLFdBQWpCOztBQUVBaUIsT0FBT0MsT0FBUCxHQUFpQm5CLFNBQWpCIiwiZmlsZSI6ImRpcmVjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9wYXRoJyk7XG5cbmNvbnN0IHsgcGF0aCwgZmlsZVN5c3RlbSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoLFxuICAgICAgeyBpc0VudHJ5RGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtO1xuXG5jbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gRGlyZWN0b3J5LnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgY29uc3QgcGF0aCA9IGRpcmVjdG9yeVBhdGg7IC8vL1xuXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXI7IC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBjYWxsYmFjayhkaXJlY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBqc1ppcERpcmVjdG9yeSA9IGpzWmlwRW50cnksXG4gICAgICAgICAgICBqc1ppcERpcmVjdG9yeVBhdGggPSBqc1ppcERpcmVjdG9yeS5uYW1lOyAgLy8vXG5cbiAgICAgIGxldCBwYXRoID0ganNaaXBEaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIHBhdGggPSBwYXRoVXRpbGl0aWVzLnBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoKHBhdGgpOyAgLy8vXG5cbiAgICAgIHBhdGggPSBwYXRoVXRpbGl0aWVzLnJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG5cbiAgICAgIGNhbGxiYWNrKGRpcmVjdG9yeSk7XG4gICAgfVxuICB9XG59XG5cbkRpcmVjdG9yeS50eXBlID0gJ0RpcmVjdG9yeSc7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0b3J5O1xuIl19