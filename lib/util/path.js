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
    key: 'isAbsolutePathDirectoryPath',
    value: function isAbsolutePathDirectoryPath(absolutePath) {
      try {
        var stat = fs.statSync(absolutePath),
            directory = stat.isDirectory();

        return directory;
      } catch (error) {
        return false; ///
      }
    }
  }, {
    key: 'isAbsoluteDirectoryPathEmpty',
    value: function isAbsoluteDirectoryPathEmpty(absoluteDirectoryPath) {
      var subEntryNames = pathUtil.subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath),
          subEntryNamesLength = subEntryNames.length,
          directoryEmpty = subEntryNamesLength === 0;

      return directoryEmpty;
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhdGguanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwicGF0aFV0aWwiLCJhYnNvbHV0ZVBhdGgiLCJzdGF0Iiwic3RhdFN5bmMiLCJkaXJlY3RvcnkiLCJpc0RpcmVjdG9yeSIsImVycm9yIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZXNGcm9tQWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRpcmVjdG9yeUVtcHR5IiwicmVhZGRpclN5bmMiLCJwYXRoIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsInNlY29uZCIsImRpcmVjdG9yeVBhdGgiLCJyb290RGlyZWN0b3J5TmFtZSIsInNlY29uZE1hdGNoIiwibmFtZSIsInJlcGxhY2UiLCJmaXJzdFBhdGgiLCJzZWNvbmRQYXRoIiwicmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoIiwiY29tYmluZWRQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYOztBQUVBLElBQU1DLFlBQVlELFFBQVEsZUFBUixDQUFsQjs7SUFFTUUsUTs7Ozs7OztnREFDK0JDLFksRUFBYztBQUMvQyxVQUFJO0FBQ0YsWUFBTUMsT0FBT0wsR0FBR00sUUFBSCxDQUFZRixZQUFaLENBQWI7QUFBQSxZQUNNRyxZQUFZRixLQUFLRyxXQUFMLEVBRGxCOztBQUdBLGVBQU9ELFNBQVA7QUFDRCxPQUxELENBS0UsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsZUFBTyxLQUFQLENBRGMsQ0FDQTtBQUNmO0FBQ0Y7OztpREFFbUNDLHFCLEVBQXVCO0FBQ3pELFVBQU1DLGdCQUFnQlIsU0FBU1Msc0NBQVQsQ0FBZ0RGLHFCQUFoRCxDQUF0QjtBQUFBLFVBQ0lHLHNCQUFzQkYsY0FBY0csTUFEeEM7QUFBQSxVQUVJQyxpQkFBa0JGLHdCQUF3QixDQUY5Qzs7QUFJQSxhQUFPRSxjQUFQO0FBQ0Q7OzsyREFFNkNMLHFCLEVBQXVCO0FBQ25FLFVBQUk7QUFDRixZQUFNQyxnQkFBZ0JYLEdBQUdnQixXQUFILENBQWVOLHFCQUFmLENBQXRCOztBQUVBLGVBQU9DLGFBQVA7QUFDRCxPQUpELENBSUUsT0FBT0YsS0FBUCxFQUFjO0FBQ2QsZUFBTyxFQUFQLENBRGMsQ0FDRjtBQUNiO0FBQ0Y7OzswQ0FFNEJRLEksRUFBTTtBQUNqQyxVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7QUFBQSxVQUNNQyxhQUFhbEIsVUFBVW1CLE1BQVYsQ0FBaUJILE9BQWpCLENBRG5CO0FBQUEsVUFFTUksZ0JBQWdCRixVQUZ0QixDQURpQyxDQUdDOztBQUVsQyxhQUFPRSxhQUFQO0FBQ0Q7Ozs4Q0FFZ0NMLEksRUFBTTtBQUNyQyxVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsV0FBWCxDQUFoQjtBQUFBLFVBQ01DLGFBQWFsQixVQUFVbUIsTUFBVixDQUFpQkgsT0FBakIsQ0FEbkI7QUFBQSxVQUVNSyxvQkFBb0JILFVBRjFCLENBRHFDLENBR0M7O0FBRXRDLGFBQU9HLGlCQUFQO0FBQ0Q7OztpQ0FFbUJOLEksRUFBTTtBQUN4QixVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7QUFBQSxVQUNNSyxjQUFjdEIsVUFBVW1CLE1BQVYsQ0FBaUJILE9BQWpCLENBRHBCO0FBQUEsVUFFTU8sT0FBT0QsV0FGYjs7QUFJQSxhQUFPQyxJQUFQO0FBQ0Q7Ozt5Q0FFMkJSLEksRUFBTTtBQUNoQ0EsYUFBT0EsS0FBS1MsT0FBTCxDQUFhLFVBQWIsRUFBeUIsRUFBekIsQ0FBUDs7QUFFQSxhQUFPVCxJQUFQO0FBQ0Q7OztnREFFa0NBLEksRUFBTTtBQUN2Q0EsYUFBT0EsS0FBS1MsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBUDs7QUFFQSxhQUFPVCxJQUFQO0FBQ0Q7OztpQ0FFbUJVLFMsRUFBV0MsVSxFQUFZO0FBQ3pDRCxrQkFBWXhCLFNBQVMwQiwyQkFBVCxDQUFxQ0YsU0FBckMsQ0FBWjs7QUFFQSxVQUFNRyxlQUFrQkgsU0FBbEIsU0FBK0JDLFVBQXJDOztBQUVBLGFBQU9FLFlBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUI3QixRQUFqQiIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgcGF0aFV0aWwge1xuICBzdGF0aWMgaXNBYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoKGFic29sdXRlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLy9cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNBYnNvbHV0ZURpcmVjdG9yeVBhdGhFbXB0eShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcGF0aFV0aWwuc3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lc0xlbmd0aCA9IHN1YkVudHJ5TmFtZXMubGVuZ3RoLFxuICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbiAgfVxuXG4gIHN0YXRpYyBzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIHJldHVybiBzdWJFbnRyeU5hbWVzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gW107ICAvLy9cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10qJC8pLFxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBhcnJheVV0aWwuc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRoO1xuICB9XG5cbiAgc3RhdGljIHJvb3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSopLyksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGFycmF5VXRpbC5zZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgcm9vdERpcmVjdG9yeU5hbWUgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgIHJldHVybiByb290RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lRnJvbVBhdGgocGF0aCkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dKikkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBhcnJheVV0aWwuc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIG5hbWUgPSBzZWNvbmRNYXRjaDtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZU1hc3RlckZyb21QYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC1tYXN0ZXIvLCAnJyk7XG4gIFxuICAgIHJldHVybiBwYXRoO1xuICB9XG4gIFxuICBzdGF0aWMgcmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBzdGF0aWMgY29tYmluZVBhdGhzKGZpcnN0UGF0aCwgc2Vjb25kUGF0aCkge1xuICAgIGZpcnN0UGF0aCA9IHBhdGhVdGlsLnJlbW92ZVRyYWlsaW5nU2xhc2hGcm9tUGF0aChmaXJzdFBhdGgpO1xuXG4gICAgY29uc3QgY29tYmluZWRQYXRoID0gYCR7Zmlyc3RQYXRofS8ke3NlY29uZFBhdGh9YDtcblxuICAgIHJldHVybiBjb21iaW5lZFBhdGg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoVXRpbDtcbiJdfQ==