'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var pathUtilities = require('./utilities/path');

var path = necessary.path,
    fileSystem = necessary.fileSystem,
    isEntryDirectory = fileSystem.isEntryDirectory,
    combinePaths = path.combinePaths,
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

      var absolutePath = combinePaths(projectsDirectoryPath, directoryPath),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInBhdGhVdGlsaXRpZXMiLCJwYXRoIiwiZmlsZVN5c3RlbSIsImlzRW50cnlEaXJlY3RvcnkiLCJjb21iaW5lUGF0aHMiLCJwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aCIsIkRpcmVjdG9yeSIsInR5cGUiLCJqc29uIiwicGF0aEpTT04iLCJkaXJlY3RvcnkiLCJkaXJlY3RvcnlQYXRoIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVQYXRoIiwiYWJzb2x1dGVQYXRoRGlyZWN0b3J5UGF0aCIsImpzWmlwRW50cnkiLCJjYWxsYmFjayIsImpzWmlwRW50cnlEaXJlY3RvcnkiLCJkaXIiLCJqc1ppcERpcmVjdG9yeSIsImpzWmlwRGlyZWN0b3J5UGF0aCIsIm5hbWUiLCJyZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUUsSSxHQUFxQkgsUyxDQUFyQkcsSTtJQUFNQyxVLEdBQWVKLFMsQ0FBZkksVTtJQUNOQyxnQixHQUFxQkQsVSxDQUFyQkMsZ0I7SUFDQUMsWSxHQUFtREgsSSxDQUFuREcsWTtJQUFjQyxnQyxHQUFxQ0osSSxDQUFyQ0ksZ0M7O0lBRWhCQyxTO0FBQ0oscUJBQVlMLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTU0sT0FBT0QsVUFBVUMsSUFBdkI7QUFBQSxVQUNNTixPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTU8sT0FBTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFOO0FBRkgsT0FGYjs7QUFPQSxhQUFPTyxJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1DLFdBQVdELEtBQUssTUFBTCxDQUFqQjtBQUFBLFVBQ01QLE9BQU9RLFFBRGI7QUFBQSxVQUN3QjtBQUNsQkMsa0JBQVksSUFBSUosU0FBSixDQUFjTCxJQUFkLENBRmxCOztBQUlBLGFBQU9TLFNBQVA7QUFDRDs7O3NDQUV3QkMsYSxFQUFlQyxxQixFQUF1QjtBQUM3RCxVQUFJRixZQUFZLElBQWhCOztBQUVBLFVBQU1HLGVBQWVULGFBQWFRLHFCQUFiLEVBQW9DRCxhQUFwQyxDQUFyQjtBQUFBLFVBQ01HLDRCQUE0QlgsaUJBQWlCVSxZQUFqQixDQURsQzs7QUFHQSxVQUFJQyx5QkFBSixFQUErQjtBQUM3QixZQUFNYixRQUFPVSxhQUFiLENBRDZCLENBQ0Q7O0FBRTVCRCxvQkFBWSxJQUFJSixTQUFKLENBQWNMLEtBQWQsQ0FBWjtBQUNEOztBQUVELGFBQU9TLFNBQVA7QUFDRDs7O21DQUVxQkssVSxFQUFZQyxRLEVBQVU7QUFDMUMsVUFBSU4sWUFBWSxJQUFoQjs7QUFFQSxVQUFNTyxzQkFBc0JGLFdBQVdHLEdBQXZDLENBSDBDLENBR0U7O0FBRTVDLFVBQUksQ0FBQ0QsbUJBQUwsRUFBMEI7QUFDeEJELGlCQUFTTixTQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTVMsaUJBQWlCSixVQUF2Qjs7QUFFQSxZQUFJSyxxQkFBcUJELGVBQWVFLElBQXhDLENBSEssQ0FHMEM7O0FBRS9DRCw2QkFBcUJmLGlDQUFpQ2Usa0JBQWpDLENBQXJCLENBTEssQ0FLdUU7QUFDNUVBLDZCQUFxQnBCLGNBQWNzQixpQ0FBZCxDQUFnREYsa0JBQWhELENBQXJCOztBQUVBLFlBQU1uQixTQUFPbUIsa0JBQWIsQ0FSSyxDQVE2Qjs7QUFFbENWLG9CQUFZLElBQUlKLFNBQUosQ0FBY0wsTUFBZCxDQUFaOztBQUVBZSxpQkFBU04sU0FBVDtBQUNEO0FBQ0Y7Ozs7OztBQUdISixVQUFVQyxJQUFWLEdBQWlCLFdBQWpCOztBQUVBZ0IsT0FBT0MsT0FBUCxHQUFpQmxCLFNBQWpCIiwiZmlsZSI6ImRpcmVjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9wYXRoJyk7XG5cbmNvbnN0IHsgcGF0aCwgZmlsZVN5c3RlbSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBpc0VudHJ5RGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtLFxuICAgICAgeyBjb21iaW5lUGF0aHMsIHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoIH0gPSBwYXRoO1xuXG5jbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gRGlyZWN0b3J5LnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGFic29sdXRlUGF0aERpcmVjdG9yeVBhdGggPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICBpZiAoYWJzb2x1dGVQYXRoRGlyZWN0b3J5UGF0aCkge1xuICAgICAgY29uc3QgcGF0aCA9IGRpcmVjdG9yeVBhdGg7IC8vL1xuXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXI7IC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBjYWxsYmFjayhkaXJlY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBqc1ppcERpcmVjdG9yeSA9IGpzWmlwRW50cnk7XG4gICAgICBcbiAgICAgIGxldCBqc1ppcERpcmVjdG9yeVBhdGggPSBqc1ppcERpcmVjdG9yeS5uYW1lOyAgLy8vXG5cbiAgICAgIGpzWmlwRGlyZWN0b3J5UGF0aCA9IHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoKGpzWmlwRGlyZWN0b3J5UGF0aCk7ICAvLy9cbiAgICAgIGpzWmlwRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsaXRpZXMucmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKGpzWmlwRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBqc1ppcERpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcblxuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9XG4gIH1cbn1cblxuRGlyZWN0b3J5LnR5cGUgPSAnRGlyZWN0b3J5JztcblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rvcnk7XG4iXX0=