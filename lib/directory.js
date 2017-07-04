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
        var directoryPathHiddenPath = pathUtil.isHiddenPath(directoryPath);

        if (!directoryPathHiddenPath) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwibWtkaXJwIiwicGF0aFV0aWwiLCJEaXJlY3RvcnkiLCJwYXRoIiwidHlwZSIsImpzb24iLCJwYXRoSlNPTiIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJjb21iaW5lUGF0aHMiLCJhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoIiwiaXNEaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5UGF0aEhpZGRlblBhdGgiLCJpc0hpZGRlblBhdGgiLCJqc1ppcEVudHJ5IiwiY2FsbGJhY2siLCJqc1ppcEVudHJ5RGlyZWN0b3J5IiwiZGlyIiwianNaaXBEaXJlY3RvcnkiLCJqc1ppcERpcmVjdG9yeVBhdGgiLCJuYW1lIiwicmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoIiwicmVtb3ZlTWFzdGVyRnJvbVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsS0FBS0MsUUFBUSxJQUFSLENBQVg7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLFFBQVIsQ0FEZjs7QUFHQSxJQUFNRSxXQUFXRixRQUFRLGFBQVIsQ0FBakI7O0lBRU1HLFM7QUFDSixxQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxPQUFPRixVQUFVRSxJQUF2QjtBQUFBLFVBQ01ELE9BQU8sS0FBS0EsSUFEbEI7QUFBQSxVQUVNRSxPQUFPO0FBQ0wsZ0JBQVFELElBREg7QUFFTCxnQkFBUUQ7QUFGSCxPQUZiOztBQU9BLGFBQU9FLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUMsV0FBV0QsS0FBSyxNQUFMLENBQWpCO0FBQUEsVUFDTUYsT0FBT0csUUFEYjtBQUFBLFVBQ3dCO0FBQ2xCQyxrQkFBWSxJQUFJTCxTQUFKLENBQWNDLElBQWQsQ0FGbEI7O0FBSUEsYUFBT0ksU0FBUDtBQUNEOzs7c0NBRXdCQyxhLEVBQWVDLHFCLEVBQXVCO0FBQzdELFVBQUlGLFlBQVksSUFBaEI7O0FBRUEsVUFBTUcsZUFBZVQsU0FBU1UsWUFBVCxDQUFzQkYscUJBQXRCLEVBQTZDRCxhQUE3QyxDQUFyQjtBQUFBLFVBQ01JLDRCQUE0QlgsU0FBU1ksZUFBVCxDQUF5QkgsWUFBekIsQ0FEbEM7O0FBR0EsVUFBSUUseUJBQUosRUFBK0I7QUFDN0IsWUFBTUUsMEJBQTBCYixTQUFTYyxZQUFULENBQXNCUCxhQUF0QixDQUFoQzs7QUFFQSxZQUFJLENBQUNNLHVCQUFMLEVBQThCO0FBQzVCLGNBQU1YLE9BQU9LLGFBQWIsQ0FENEIsQ0FDQTs7QUFFNUJELHNCQUFZLElBQUlMLFNBQUosQ0FBY0MsSUFBZCxDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSSxTQUFQO0FBQ0Q7OzttQ0FFcUJTLFUsRUFBWUMsUSxFQUFVO0FBQzFDLFVBQUlWLFlBQVksSUFBaEI7O0FBRUEsVUFBTVcsc0JBQXNCRixXQUFXRyxHQUF2QyxDQUgwQyxDQUdFOztBQUU1QyxVQUFJLENBQUNELG1CQUFMLEVBQTBCO0FBQ3hCRCxpQkFBU1YsU0FBVDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1hLGlCQUFpQkosVUFBdkI7O0FBRUEsWUFBSUsscUJBQXFCRCxlQUFlRSxJQUF4QyxDQUhLLENBRzBDOztBQUUvQ0QsNkJBQXFCcEIsU0FBU3NCLDJCQUFULENBQXFDRixrQkFBckMsQ0FBckI7QUFDQUEsNkJBQXFCcEIsU0FBU3VCLG9CQUFULENBQThCSCxrQkFBOUIsQ0FBckI7O0FBRUEsWUFBTWxCLE9BQU9rQixrQkFBYixDQVJLLENBUTZCOztBQUVsQ2Qsb0JBQVksSUFBSUwsU0FBSixDQUFjQyxJQUFkLENBQVo7O0FBRUFjLGlCQUFTVixTQUFUO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hMLFVBQVVFLElBQVYsR0FBaUIsV0FBakI7O0FBRUFxQixPQUFPQyxPQUFQLEdBQWlCeEIsU0FBakIiLCJmaWxlIjoiZGlyZWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgICBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKTtcblxuY29uc3QgcGF0aFV0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aCcpO1xuXG5jbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gRGlyZWN0b3J5LnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGFic29sdXRlUGF0aERpcmVjdG9yeVBhdGggPSBwYXRoVXRpbC5pc0RpcmVjdG9yeVBhdGgoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlQYXRoSGlkZGVuUGF0aCA9IHBhdGhVdGlsLmlzSGlkZGVuUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgaWYgKCFkaXJlY3RvcnlQYXRoSGlkZGVuUGF0aCkge1xuICAgICAgICBjb25zdCBwYXRoID0gZGlyZWN0b3J5UGF0aDsgLy8vXG5cbiAgICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QganNaaXBFbnRyeURpcmVjdG9yeSA9IGpzWmlwRW50cnkuZGlyOyAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeURpcmVjdG9yeSkge1xuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QganNaaXBEaXJlY3RvcnkgPSBqc1ppcEVudHJ5O1xuICAgICAgXG4gICAgICBsZXQganNaaXBEaXJlY3RvcnlQYXRoID0ganNaaXBEaXJlY3RvcnkubmFtZTsgIC8vL1xuXG4gICAgICBqc1ppcERpcmVjdG9yeVBhdGggPSBwYXRoVXRpbC5yZW1vdmVUcmFpbGluZ1NsYXNoRnJvbVBhdGgoanNaaXBEaXJlY3RvcnlQYXRoKTtcbiAgICAgIGpzWmlwRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsLnJlbW92ZU1hc3RlckZyb21QYXRoKGpzWmlwRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGNvbnN0IHBhdGggPSBqc1ppcERpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcblxuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9XG4gIH1cbn1cblxuRGlyZWN0b3J5LnR5cGUgPSAnRGlyZWN0b3J5JztcblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rvcnk7XG4iXX0=