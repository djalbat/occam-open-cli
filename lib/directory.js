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
          absolutePathDirectoryPath = pathUtil.isDirectoryPath(absolutePath);

      if (absolutePathDirectoryPath) {
        var hidden = pathUtil.isHidden(directoryPath);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwibWtkaXJwIiwicGF0aFV0aWwiLCJEaXJlY3RvcnkiLCJwYXRoIiwidHlwZSIsImpzb24iLCJwYXRoSlNPTiIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJjb21iaW5lUGF0aHMiLCJhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoIiwiaXNEaXJlY3RvcnlQYXRoIiwiaGlkZGVuIiwiaXNIaWRkZW4iLCJqc1ppcEVudHJ5IiwiY2FsbGJhY2siLCJqc1ppcEVudHJ5RGlyZWN0b3J5IiwiZGlyIiwianNaaXBEaXJlY3RvcnkiLCJqc1ppcERpcmVjdG9yeVBhdGgiLCJuYW1lIiwicmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoIiwicmVtb3ZlTWFzdGVyRnJvbVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsS0FBS0MsUUFBUSxJQUFSLENBQVg7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLFFBQVIsQ0FEZjs7QUFHQSxJQUFNRSxXQUFXRixRQUFRLGFBQVIsQ0FBakI7O0lBRU1HLFM7QUFDSixxQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxPQUFPRixVQUFVRSxJQUF2QjtBQUFBLFVBQ01ELE9BQU8sS0FBS0EsSUFEbEI7QUFBQSxVQUVNRSxPQUFPO0FBQ0wsZ0JBQVFELElBREg7QUFFTCxnQkFBUUQ7QUFGSCxPQUZiOztBQU9BLGFBQU9FLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUMsV0FBV0QsS0FBSyxNQUFMLENBQWpCO0FBQUEsVUFDTUYsT0FBT0csUUFEYjtBQUFBLFVBQ3dCO0FBQ2xCQyxrQkFBWSxJQUFJTCxTQUFKLENBQWNDLElBQWQsQ0FGbEI7O0FBSUEsYUFBT0ksU0FBUDtBQUNEOzs7c0NBRXdCQyxhLEVBQWVDLHFCLEVBQXVCO0FBQzdELFVBQUlGLFlBQVksSUFBaEI7O0FBRUEsVUFBTUcsZUFBZVQsU0FBU1UsWUFBVCxDQUFzQkYscUJBQXRCLEVBQTZDRCxhQUE3QyxDQUFyQjtBQUFBLFVBQ01JLDRCQUE0QlgsU0FBU1ksZUFBVCxDQUF5QkgsWUFBekIsQ0FEbEM7O0FBR0EsVUFBSUUseUJBQUosRUFBK0I7QUFDN0IsWUFBTUUsU0FBU2IsU0FBU2MsUUFBVCxDQUFrQlAsYUFBbEIsQ0FBZjs7QUFFQSxZQUFJLENBQUNNLE1BQUwsRUFBYTtBQUNYLGNBQU1YLE9BQU9LLGFBQWIsQ0FEVyxDQUNpQjs7QUFFNUJELHNCQUFZLElBQUlMLFNBQUosQ0FBY0MsSUFBZCxDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSSxTQUFQO0FBQ0Q7OzttQ0FFcUJTLFUsRUFBWUMsUSxFQUFVO0FBQzFDLFVBQUlWLFlBQVksSUFBaEI7O0FBRUEsVUFBTVcsc0JBQXNCRixXQUFXRyxHQUF2QyxDQUgwQyxDQUdFOztBQUU1QyxVQUFJLENBQUNELG1CQUFMLEVBQTBCO0FBQ3hCRCxpQkFBU1YsU0FBVDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1hLGlCQUFpQkosVUFBdkI7O0FBRUEsWUFBSUsscUJBQXFCRCxlQUFlRSxJQUF4QyxDQUhLLENBRzBDOztBQUUvQ0QsNkJBQXFCcEIsU0FBU3NCLDJCQUFULENBQXFDRixrQkFBckMsQ0FBckI7QUFDQUEsNkJBQXFCcEIsU0FBU3VCLG9CQUFULENBQThCSCxrQkFBOUIsQ0FBckI7O0FBRUEsWUFBTWxCLE9BQU9rQixrQkFBYixDQVJLLENBUTZCOztBQUVsQ2Qsb0JBQVksSUFBSUwsU0FBSixDQUFjQyxJQUFkLENBQVo7O0FBRUFjLGlCQUFTVixTQUFUO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hMLFVBQVVFLElBQVYsR0FBaUIsV0FBakI7O0FBRUFxQixPQUFPQyxPQUFQLEdBQWlCeEIsU0FBakIiLCJmaWxlIjoiZGlyZWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgICBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKTtcblxuY29uc3QgcGF0aFV0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aCcpO1xuXG5jbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gRGlyZWN0b3J5LnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGFic29sdXRlUGF0aERpcmVjdG9yeVBhdGggPSBwYXRoVXRpbC5pc0RpcmVjdG9yeVBhdGgoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoKSB7XG4gICAgICBjb25zdCBoaWRkZW4gPSBwYXRoVXRpbC5pc0hpZGRlbihkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGRpcmVjdG9yeVBhdGg7IC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGpzWmlwRW50cnlEaXJlY3RvcnkgPSBqc1ppcEVudHJ5LmRpcjsgLy8vXG5cbiAgICBpZiAoIWpzWmlwRW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGNhbGxiYWNrKGRpcmVjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGpzWmlwRGlyZWN0b3J5ID0ganNaaXBFbnRyeTtcbiAgICAgIFxuICAgICAgbGV0IGpzWmlwRGlyZWN0b3J5UGF0aCA9IGpzWmlwRGlyZWN0b3J5Lm5hbWU7ICAvLy9cblxuICAgICAganNaaXBEaXJlY3RvcnlQYXRoID0gcGF0aFV0aWwucmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoKGpzWmlwRGlyZWN0b3J5UGF0aCk7XG4gICAgICBqc1ppcERpcmVjdG9yeVBhdGggPSBwYXRoVXRpbC5yZW1vdmVNYXN0ZXJGcm9tUGF0aChqc1ppcERpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBjb25zdCBwYXRoID0ganNaaXBEaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG5cbiAgICAgIGNhbGxiYWNrKGRpcmVjdG9yeSk7XG4gICAgfVxuICB9XG59XG5cbkRpcmVjdG9yeS50eXBlID0gJ0RpcmVjdG9yeSc7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0b3J5O1xuIl19