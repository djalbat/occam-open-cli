'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs'),
    mkdirp = require('mkdirp');

var pathUtil = require('./util/path');

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

      var absolutePath = pathUtil.combinePaths(projectsDirectoryPath, directoryPath),
          absolutePathDirectoryPath = pathUtil.isAbsolutePathDirectoryPath(absolutePath);

      if (absolutePathDirectoryPath) {
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
        var jsZipDirectory = jsZipEntry;

        var jsZipDirectoryPath = jsZipDirectory.name; ///

        jsZipDirectoryPath = pathUtil.removeTrailingSlashFromPath(jsZipDirectoryPath);
        jsZipDirectoryPath = pathUtil.removeMasterFromPath(jsZipDirectoryPath);

        var path = jsZipDirectoryPath; ///

        directory = new Directory(path);

        callback(directory);
      }
    }
  }]);

  return Directory;
}();

Directory.type = 'Directory';

module.exports = Directory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwibWtkaXJwIiwicGF0aFV0aWwiLCJEaXJlY3RvcnkiLCJwYXRoIiwidHlwZSIsImpzb24iLCJwYXRoSlNPTiIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJjb21iaW5lUGF0aHMiLCJhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoIiwiaXNBYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRGlyZWN0b3J5IiwianNaaXBEaXJlY3RvcnlQYXRoIiwibmFtZSIsInJlbW92ZVRyYWlsaW5nU2xhc2hGcm9tUGF0aCIsInJlbW92ZU1hc3RlckZyb21QYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxRQUFSLENBRGY7O0FBR0EsSUFBTUUsV0FBV0YsUUFBUSxhQUFSLENBQWpCOztJQUVNRyxTO0FBQ0oscUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsT0FBT0YsVUFBVUUsSUFBdkI7QUFBQSxVQUNNRCxPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTUUsT0FBTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFEO0FBRkgsT0FGYjs7QUFPQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1DLFdBQVdELEtBQUssTUFBTCxDQUFqQjtBQUFBLFVBQ01GLE9BQU9HLFFBRGI7QUFBQSxVQUN3QjtBQUNsQkMsa0JBQVksSUFBSUwsU0FBSixDQUFjQyxJQUFkLENBRmxCOztBQUlBLGFBQU9JLFNBQVA7QUFDRDs7O3NDQUV3QkMsYSxFQUFlQyxxQixFQUF1QjtBQUM3RCxVQUFJRixZQUFZLElBQWhCOztBQUVBLFVBQU1HLGVBQWVULFNBQVNVLFlBQVQsQ0FBc0JGLHFCQUF0QixFQUE2Q0QsYUFBN0MsQ0FBckI7QUFBQSxVQUNNSSw0QkFBNEJYLFNBQVNZLDJCQUFULENBQXFDSCxZQUFyQyxDQURsQzs7QUFHQSxVQUFJRSx5QkFBSixFQUErQjtBQUM3QixZQUFNVCxPQUFPSyxhQUFiLENBRDZCLENBQ0Q7O0FBRTVCRCxvQkFBWSxJQUFJTCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEOztBQUVELGFBQU9JLFNBQVA7QUFDRDs7O21DQUVxQk8sVSxFQUFZQyxRLEVBQVU7QUFDMUMsVUFBSVIsWUFBWSxJQUFoQjs7QUFFQSxVQUFNUyxzQkFBc0JGLFdBQVdHLEdBQXZDLENBSDBDLENBR0U7O0FBRTVDLFVBQUksQ0FBQ0QsbUJBQUwsRUFBMEI7QUFDeEJELGlCQUFTUixTQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTVcsaUJBQWlCSixVQUF2Qjs7QUFFQSxZQUFJSyxxQkFBcUJELGVBQWVFLElBQXhDLENBSEssQ0FHMEM7O0FBRS9DRCw2QkFBcUJsQixTQUFTb0IsMkJBQVQsQ0FBcUNGLGtCQUFyQyxDQUFyQjtBQUNBQSw2QkFBcUJsQixTQUFTcUIsb0JBQVQsQ0FBOEJILGtCQUE5QixDQUFyQjs7QUFFQSxZQUFNaEIsT0FBT2dCLGtCQUFiLENBUkssQ0FRNkI7O0FBRWxDWixvQkFBWSxJQUFJTCxTQUFKLENBQWNDLElBQWQsQ0FBWjs7QUFFQVksaUJBQVNSLFNBQVQ7QUFDRDtBQUNGOzs7Ozs7QUFHSEwsVUFBVUUsSUFBVixHQUFpQixXQUFqQjs7QUFFQW1CLE9BQU9DLE9BQVAsR0FBaUJ0QixTQUFqQiIsImZpbGUiOiJkaXJlY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKSxcbiAgICAgIG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpO1xuXG5jb25zdCBwYXRoVXRpbCA9IHJlcXVpcmUoJy4vdXRpbC9wYXRoJyk7XG5cbmNsYXNzIERpcmVjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSBEaXJlY3RvcnkudHlwZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgIHBhdGggPSBwYXRoSlNPTiwgIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgYWJzb2x1dGVQYXRoRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsLmlzQWJzb2x1dGVQYXRoRGlyZWN0b3J5UGF0aChhYnNvbHV0ZVBhdGgpO1xuXG4gICAgaWYgKGFic29sdXRlUGF0aERpcmVjdG9yeVBhdGgpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBkaXJlY3RvcnlQYXRoOyAvLy9cblxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QganNaaXBFbnRyeURpcmVjdG9yeSA9IGpzWmlwRW50cnkuZGlyOyAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeURpcmVjdG9yeSkge1xuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QganNaaXBEaXJlY3RvcnkgPSBqc1ppcEVudHJ5O1xuICAgICAgXG4gICAgICBsZXQganNaaXBEaXJlY3RvcnlQYXRoID0ganNaaXBEaXJlY3RvcnkubmFtZTsgIC8vL1xuXG4gICAgICBqc1ppcERpcmVjdG9yeVBhdGggPSBwYXRoVXRpbC5yZW1vdmVUcmFpbGluZ1NsYXNoRnJvbVBhdGgoanNaaXBEaXJlY3RvcnlQYXRoKTtcbiAgICAgIGpzWmlwRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsLnJlbW92ZU1hc3RlckZyb21QYXRoKGpzWmlwRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBqc1ppcERpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcblxuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9XG4gIH1cbn1cblxuRGlyZWN0b3J5LnR5cGUgPSAnRGlyZWN0b3J5JztcblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rvcnk7XG4iXX0=