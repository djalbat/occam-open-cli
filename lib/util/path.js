'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var arrayUtil = require('../util/array');

var pathUtil = function () {
  function pathUtil() {
    _classCallCheck(this, pathUtil);
  }

  _createClass(pathUtil, null, [{
    key: 'subEntryNamesFromAbsoluteDirectoryPath',
    value: function subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath) {
      try {
        var subEntryNames = fs.readdirSync(absoluteDirectoryPath);

        return subEntryNames;
      } catch (error) {
        return []; ///
      }
    }
  }, {
    key: 'isDirectoryPath',
    value: function isDirectoryPath(absolutePath) {
      try {
        var stat = fs.statSync(absolutePath),
            directory = stat.isDirectory();

        return directory;
      } catch (error) {
        return false; ///
      }
    }
  }, {
    key: 'directoryPathFromPath',
    value: function directoryPathFromPath(path) {
      var matches = path.match(/^(.*)\/[^\/]*$/),
          firstMatch = arrayUtil.second(matches),
          directoryPath = firstMatch; ///

      return directoryPath;
    }
  }, {
    key: 'rootDirectoryNameFromPath',
    value: function rootDirectoryNameFromPath(path) {
      var matches = path.match(/^([^\/]*)/),
          firstMatch = arrayUtil.second(matches),
          rootDirectoryName = firstMatch; ///

      return rootDirectoryName;
    }
  }, {
    key: 'nameFromPath',
    value: function nameFromPath(path) {
      var matches = path.match(/^.*\/([^\/]*)$/),
          secondMatch = arrayUtil.second(matches),
          name = secondMatch;

      return name;
    }
  }, {
    key: 'isDirectoryEmpty',
    value: function isDirectoryEmpty(absoluteDirectoryPath) {
      var subEntryNames = pathUtil.subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath),
          subEntryNamesLength = subEntryNames.length,
          directoryEmpty = subEntryNamesLength === 0;

      return directoryEmpty;
    }
  }, {
    key: 'removeMasterFromPath',
    value: function removeMasterFromPath(path) {
      path = path.replace(/\-master/, '');

      return path;
    }
  }, {
    key: 'removeTrailingSlashFromPath',
    value: function removeTrailingSlashFromPath(path) {
      path = path.replace(/\/$/, '');

      return path;
    }
  }, {
    key: 'combinePaths',
    value: function combinePaths(firstPath, secondPath) {
      firstPath = pathUtil.removeTrailingSlashFromPath(firstPath);

      var combinedPath = firstPath + '/' + secondPath;

      return combinedPath;
    }
  }]);

  return pathUtil;
}();

module.exports = pathUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhdGguanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwicGF0aFV0aWwiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwicmVhZGRpclN5bmMiLCJlcnJvciIsImFic29sdXRlUGF0aCIsInN0YXQiLCJzdGF0U3luYyIsImRpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwicGF0aCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJzZWNvbmQiLCJkaXJlY3RvcnlQYXRoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJzZWNvbmRNYXRjaCIsIm5hbWUiLCJzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkaXJlY3RvcnlFbXB0eSIsInJlcGxhY2UiLCJmaXJzdFBhdGgiLCJzZWNvbmRQYXRoIiwicmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoIiwiY29tYmluZWRQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYOztBQUVBLElBQU1DLFlBQVlELFFBQVEsZUFBUixDQUFsQjs7SUFFTUUsUTs7Ozs7OzsyREFDMENDLHFCLEVBQXVCO0FBQ25FLFVBQUk7QUFDRixZQUFNQyxnQkFBZ0JMLEdBQUdNLFdBQUgsQ0FBZUYscUJBQWYsQ0FBdEI7O0FBRUEsZUFBT0MsYUFBUDtBQUNELE9BSkQsQ0FJRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCxlQUFPLEVBQVAsQ0FEYyxDQUNGO0FBQ2I7QUFDRjs7O29DQUVzQkMsWSxFQUFjO0FBQ25DLFVBQUk7QUFDRixZQUFNQyxPQUFPVCxHQUFHVSxRQUFILENBQVlGLFlBQVosQ0FBYjtBQUFBLFlBQ01HLFlBQVlGLEtBQUtHLFdBQUwsRUFEbEI7O0FBR0EsZUFBT0QsU0FBUDtBQUNELE9BTEQsQ0FLRSxPQUFPSixLQUFQLEVBQWM7QUFDZCxlQUFPLEtBQVAsQ0FEYyxDQUNBO0FBQ2Y7QUFDRjs7OzBDQUU0Qk0sSSxFQUFNO0FBQ2pDLFVBQU1DLFVBQVVELEtBQUtFLEtBQUwsQ0FBVyxnQkFBWCxDQUFoQjtBQUFBLFVBQ01DLGFBQWFkLFVBQVVlLE1BQVYsQ0FBaUJILE9BQWpCLENBRG5CO0FBQUEsVUFFTUksZ0JBQWdCRixVQUZ0QixDQURpQyxDQUdDOztBQUVsQyxhQUFPRSxhQUFQO0FBQ0Q7Ozs4Q0FFZ0NMLEksRUFBTTtBQUNyQyxVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsV0FBWCxDQUFoQjtBQUFBLFVBQ01DLGFBQWFkLFVBQVVlLE1BQVYsQ0FBaUJILE9BQWpCLENBRG5CO0FBQUEsVUFFTUssb0JBQW9CSCxVQUYxQixDQURxQyxDQUdDOztBQUV0QyxhQUFPRyxpQkFBUDtBQUNEOzs7aUNBRW1CTixJLEVBQU07QUFDeEIsVUFBTUMsVUFBVUQsS0FBS0UsS0FBTCxDQUFXLGdCQUFYLENBQWhCO0FBQUEsVUFDTUssY0FBY2xCLFVBQVVlLE1BQVYsQ0FBaUJILE9BQWpCLENBRHBCO0FBQUEsVUFFTU8sT0FBT0QsV0FGYjs7QUFJQSxhQUFPQyxJQUFQO0FBQ0Q7OztxQ0FFdUJqQixxQixFQUF1QjtBQUM3QyxVQUFNQyxnQkFBZ0JGLFNBQVNtQixzQ0FBVCxDQUFnRGxCLHFCQUFoRCxDQUF0QjtBQUFBLFVBQ01tQixzQkFBc0JsQixjQUFjbUIsTUFEMUM7QUFBQSxVQUVNQyxpQkFBa0JGLHdCQUF3QixDQUZoRDs7QUFJQSxhQUFPRSxjQUFQO0FBQ0Q7Ozt5Q0FFMkJaLEksRUFBTTtBQUNoQ0EsYUFBT0EsS0FBS2EsT0FBTCxDQUFhLFVBQWIsRUFBeUIsRUFBekIsQ0FBUDs7QUFFQSxhQUFPYixJQUFQO0FBQ0Q7OztnREFFa0NBLEksRUFBTTtBQUN2Q0EsYUFBT0EsS0FBS2EsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBUDs7QUFFQSxhQUFPYixJQUFQO0FBQ0Q7OztpQ0FFbUJjLFMsRUFBV0MsVSxFQUFZO0FBQ3pDRCxrQkFBWXhCLFNBQVMwQiwyQkFBVCxDQUFxQ0YsU0FBckMsQ0FBWjs7QUFFQSxVQUFNRyxlQUFrQkgsU0FBbEIsU0FBK0JDLFVBQXJDOztBQUVBLGFBQU9FLFlBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUI3QixRQUFqQiIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgcGF0aFV0aWwge1xuICBzdGF0aWMgc3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgICByZXR1cm4gc3ViRW50cnlOYW1lcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFtdOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlzRGlyZWN0b3J5UGF0aChhYnNvbHV0ZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dKiQvKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gYXJyYXlVdGlsLnNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aDtcbiAgfVxuXG4gIHN0YXRpYyByb290RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10qKS8pLFxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBhcnJheVV0aWwuc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHJvb3REaXJlY3RvcnlOYW1lID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXSopJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gYXJyYXlVdGlsLnNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2g7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBpc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBwYXRoVXRpbC5zdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7ICAgIFxuICB9XG5cbiAgc3RhdGljIHJlbW92ZU1hc3RlckZyb21QYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC1tYXN0ZXIvLCAnJyk7XG4gIFxuICAgIHJldHVybiBwYXRoO1xuICB9XG4gIFxuICBzdGF0aWMgcmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBzdGF0aWMgY29tYmluZVBhdGhzKGZpcnN0UGF0aCwgc2Vjb25kUGF0aCkge1xuICAgIGZpcnN0UGF0aCA9IHBhdGhVdGlsLnJlbW92ZVRyYWlsaW5nU2xhc2hGcm9tUGF0aChmaXJzdFBhdGgpO1xuXG4gICAgY29uc3QgY29tYmluZWRQYXRoID0gYCR7Zmlyc3RQYXRofS8ke3NlY29uZFBhdGh9YDtcblxuICAgIHJldHVybiBjb21iaW5lZFBhdGg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoVXRpbDtcbiJdfQ==