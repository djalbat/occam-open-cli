'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs'),
    mkdirp = require('mkdirp');

var util = require('./util');

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

      var absolutePath = util.combinePaths(projectsDirectoryPath, directoryPath),
          absolutePathDirectoryPath = util.isDirectoryPath(absolutePath);

      if (absolutePathDirectoryPath) {
        var hidden = util.isHidden(directoryPath);

        if (!hidden) {
          var path = directoryPath; ///

          directory = new Directory(path);
        }
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

        jsZipDirectoryPath = util.removeTrailingSlashFromPath(jsZipDirectoryPath);
        jsZipDirectoryPath = util.removeMasterFromPath(jsZipDirectoryPath);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwibWtkaXJwIiwidXRpbCIsIkRpcmVjdG9yeSIsInBhdGgiLCJ0eXBlIiwianNvbiIsInBhdGhKU09OIiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFic29sdXRlUGF0aCIsImNvbWJpbmVQYXRocyIsImFic29sdXRlUGF0aERpcmVjdG9yeVBhdGgiLCJpc0RpcmVjdG9yeVBhdGgiLCJoaWRkZW4iLCJpc0hpZGRlbiIsImpzWmlwRW50cnkiLCJjYWxsYmFjayIsImpzWmlwRW50cnlEaXJlY3RvcnkiLCJkaXIiLCJqc1ppcERpcmVjdG9yeSIsImpzWmlwRGlyZWN0b3J5UGF0aCIsIm5hbWUiLCJyZW1vdmVUcmFpbGluZ1NsYXNoRnJvbVBhdGgiLCJyZW1vdmVNYXN0ZXJGcm9tUGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxLQUFLQyxRQUFRLElBQVIsQ0FBWDtBQUFBLElBQ01DLFNBQVNELFFBQVEsUUFBUixDQURmOztBQUdBLElBQU1FLE9BQU9GLFFBQVEsUUFBUixDQUFiOztJQUVNRyxTO0FBQ0oscUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsT0FBT0YsVUFBVUUsSUFBdkI7QUFBQSxVQUNNRCxPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTUUsT0FBTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFEO0FBRkgsT0FGYjs7QUFPQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1DLFdBQVdELEtBQUssTUFBTCxDQUFqQjtBQUFBLFVBQ01GLE9BQU9HLFFBRGI7QUFBQSxVQUN3QjtBQUNsQkMsa0JBQVksSUFBSUwsU0FBSixDQUFjQyxJQUFkLENBRmxCOztBQUlBLGFBQU9JLFNBQVA7QUFDRDs7O3NDQUV3QkMsYSxFQUFlQyxxQixFQUF1QjtBQUM3RCxVQUFJRixZQUFZLElBQWhCOztBQUVBLFVBQU1HLGVBQWVULEtBQUtVLFlBQUwsQ0FBa0JGLHFCQUFsQixFQUF5Q0QsYUFBekMsQ0FBckI7QUFBQSxVQUNNSSw0QkFBNEJYLEtBQUtZLGVBQUwsQ0FBcUJILFlBQXJCLENBRGxDOztBQUdBLFVBQUlFLHlCQUFKLEVBQStCO0FBQzdCLFlBQU1FLFNBQVNiLEtBQUtjLFFBQUwsQ0FBY1AsYUFBZCxDQUFmOztBQUVBLFlBQUksQ0FBQ00sTUFBTCxFQUFhO0FBQ1gsY0FBTVgsT0FBT0ssYUFBYixDQURXLENBQ2lCOztBQUU1QkQsc0JBQVksSUFBSUwsU0FBSixDQUFjQyxJQUFkLENBQVo7QUFDRDtBQUNGOztBQUVELGFBQU9JLFNBQVA7QUFDRDs7O21DQUVxQlMsVSxFQUFZQyxRLEVBQVU7QUFDMUMsVUFBSVYsWUFBWSxJQUFoQjs7QUFFQSxVQUFNVyxzQkFBc0JGLFdBQVdHLEdBQXZDLENBSDBDLENBR0U7O0FBRTVDLFVBQUksQ0FBQ0QsbUJBQUwsRUFBMEI7QUFDeEJELGlCQUFTVixTQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTWEsaUJBQWlCSixVQUF2Qjs7QUFFQSxZQUFJSyxxQkFBcUJELGVBQWVFLElBQXhDLENBSEssQ0FHMEM7O0FBRS9DRCw2QkFBcUJwQixLQUFLc0IsMkJBQUwsQ0FBaUNGLGtCQUFqQyxDQUFyQjtBQUNBQSw2QkFBcUJwQixLQUFLdUIsb0JBQUwsQ0FBMEJILGtCQUExQixDQUFyQjs7QUFFQSxZQUFNbEIsT0FBT2tCLGtCQUFiLENBUkssQ0FRNkI7O0FBRWxDZCxvQkFBWSxJQUFJTCxTQUFKLENBQWNDLElBQWQsQ0FBWjs7QUFFQWMsaUJBQVNWLFNBQVQ7QUFDRDtBQUNGOzs7Ozs7QUFHSEwsVUFBVUUsSUFBVixHQUFpQixXQUFqQjs7QUFFQXFCLE9BQU9DLE9BQVAsR0FBaUJ4QixTQUFqQiIsImZpbGUiOiJkaXJlY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKSxcbiAgICAgIG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNsYXNzIERpcmVjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSBEaXJlY3RvcnkudHlwZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgIHBhdGggPSBwYXRoSlNPTiwgIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gdXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoID0gdXRpbC5pc0RpcmVjdG9yeVBhdGgoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoKSB7XG4gICAgICBjb25zdCBoaWRkZW4gPSB1dGlsLmlzSGlkZGVuKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICBjb25zdCBwYXRoID0gZGlyZWN0b3J5UGF0aDsgLy8vXG5cbiAgICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QganNaaXBFbnRyeURpcmVjdG9yeSA9IGpzWmlwRW50cnkuZGlyOyAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeURpcmVjdG9yeSkge1xuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QganNaaXBEaXJlY3RvcnkgPSBqc1ppcEVudHJ5O1xuICAgICAgXG4gICAgICBsZXQganNaaXBEaXJlY3RvcnlQYXRoID0ganNaaXBEaXJlY3RvcnkubmFtZTsgIC8vL1xuXG4gICAgICBqc1ppcERpcmVjdG9yeVBhdGggPSB1dGlsLnJlbW92ZVRyYWlsaW5nU2xhc2hGcm9tUGF0aChqc1ppcERpcmVjdG9yeVBhdGgpO1xuICAgICAganNaaXBEaXJlY3RvcnlQYXRoID0gdXRpbC5yZW1vdmVNYXN0ZXJGcm9tUGF0aChqc1ppcERpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBjb25zdCBwYXRoID0ganNaaXBEaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG5cbiAgICAgIGNhbGxiYWNrKGRpcmVjdG9yeSk7XG4gICAgfVxuICB9XG59XG5cbkRpcmVjdG9yeS50eXBlID0gJ0RpcmVjdG9yeSc7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0b3J5O1xuIl19