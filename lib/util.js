'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var util = function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
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
          firstMatch = second(matches),
          directoryPath = firstMatch; ///

      return directoryPath;
    }
  }, {
    key: 'rootDirectoryNameFromPath',
    value: function rootDirectoryNameFromPath(path) {
      var matches = path.match(/^([^\/]*)/),
          firstMatch = second(matches),
          rootDirectoryName = firstMatch; ///

      return rootDirectoryName;
    }
  }, {
    key: 'nameFromPath',
    value: function nameFromPath(path) {
      var matches = path.match(/^.*\/([^\/]*)$/),
          secondMatch = second(matches),
          name = secondMatch;

      return name;
    }
  }, {
    key: 'isHidden',
    value: function isHidden(path) {
      var name = util.nameFromPath(path),
          matches = name.match(/^\./),
          hidden = matches !== null; ///

      return hidden;
    }
  }, {
    key: 'isPathRecognisedFilePath',
    value: function isPathRecognisedFilePath(path) {
      var name = util.nameFromPath(path),
          recognisedFilName = util.isRecognisedFileName(name),
          pathRecognisedFilePath = recognisedFilName; ///

      return pathRecognisedFilePath;
    }
  }, {
    key: 'isRecognisedFileName',
    value: function isRecognisedFileName(fileName) {
      var florenceFileName = util.isFlorenceFileName(fileName),
          recognisedFileName = florenceFileName;

      return recognisedFileName;
    }
  }, {
    key: 'isFlorenceFileName',
    value: function isFlorenceFileName(fileName) {
      var matches = fileName.match(/\.fls$/),
          florenceFileName = matches !== null; ///

      return florenceFileName;
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
      firstPath = util.removeTrailingSlashFromPath(firstPath);

      var combinedPath = firstPath + '/' + secondPath;

      return combinedPath;
    }
  }]);

  return util;
}();

module.exports = util;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsInV0aWwiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwicmVhZGRpclN5bmMiLCJlcnJvciIsImFic29sdXRlUGF0aCIsInN0YXQiLCJzdGF0U3luYyIsImRpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwicGF0aCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJzZWNvbmQiLCJkaXJlY3RvcnlQYXRoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJzZWNvbmRNYXRjaCIsIm5hbWUiLCJuYW1lRnJvbVBhdGgiLCJoaWRkZW4iLCJyZWNvZ25pc2VkRmlsTmFtZSIsImlzUmVjb2duaXNlZEZpbGVOYW1lIiwicGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImZpbGVOYW1lIiwiZmxvcmVuY2VGaWxlTmFtZSIsImlzRmxvcmVuY2VGaWxlTmFtZSIsInJlY29nbmlzZWRGaWxlTmFtZSIsInJlcGxhY2UiLCJmaXJzdFBhdGgiLCJzZWNvbmRQYXRoIiwicmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoIiwiY29tYmluZWRQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsS0FBS0MsUUFBUSxJQUFSLENBQVg7O0lBRU1DLEk7Ozs7Ozs7MkRBQzBDQyxxQixFQUF1QjtBQUNuRSxVQUFJO0FBQ0YsWUFBTUMsZ0JBQWdCSixHQUFHSyxXQUFILENBQWVGLHFCQUFmLENBQXRCOztBQUVBLGVBQU9DLGFBQVA7QUFDRCxPQUpELENBSUUsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsZUFBTyxFQUFQLENBRGMsQ0FDRjtBQUNiO0FBQ0Y7OztvQ0FFc0JDLFksRUFBYztBQUNuQyxVQUFJO0FBQ0YsWUFBTUMsT0FBT1IsR0FBR1MsUUFBSCxDQUFZRixZQUFaLENBQWI7QUFBQSxZQUNNRyxZQUFZRixLQUFLRyxXQUFMLEVBRGxCOztBQUdBLGVBQU9ELFNBQVA7QUFDRCxPQUxELENBS0UsT0FBT0osS0FBUCxFQUFjO0FBQ2QsZUFBTyxLQUFQLENBRGMsQ0FDQTtBQUNmO0FBQ0Y7OzswQ0FFNEJNLEksRUFBTTtBQUNqQyxVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7QUFBQSxVQUNNQyxhQUFhQyxPQUFPSCxPQUFQLENBRG5CO0FBQUEsVUFFTUksZ0JBQWdCRixVQUZ0QixDQURpQyxDQUdDOztBQUVsQyxhQUFPRSxhQUFQO0FBQ0Q7Ozs4Q0FFZ0NMLEksRUFBTTtBQUNyQyxVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsV0FBWCxDQUFoQjtBQUFBLFVBQ01DLGFBQWFDLE9BQU9ILE9BQVAsQ0FEbkI7QUFBQSxVQUVNSyxvQkFBb0JILFVBRjFCLENBRHFDLENBR0M7O0FBRXRDLGFBQU9HLGlCQUFQO0FBQ0Q7OztpQ0FFbUJOLEksRUFBTTtBQUN4QixVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7QUFBQSxVQUNNSyxjQUFjSCxPQUFPSCxPQUFQLENBRHBCO0FBQUEsVUFFTU8sT0FBT0QsV0FGYjs7QUFJQSxhQUFPQyxJQUFQO0FBQ0Q7Ozs2QkFFZVIsSSxFQUFNO0FBQ3BCLFVBQU1RLE9BQU9sQixLQUFLbUIsWUFBTCxDQUFrQlQsSUFBbEIsQ0FBYjtBQUFBLFVBQ01DLFVBQVVPLEtBQUtOLEtBQUwsQ0FBVyxLQUFYLENBRGhCO0FBQUEsVUFFTVEsU0FBVVQsWUFBWSxJQUY1QixDQURvQixDQUdlOztBQUVuQyxhQUFPUyxNQUFQO0FBQ0Q7Ozs2Q0FFK0JWLEksRUFBTTtBQUNwQyxVQUFNUSxPQUFPbEIsS0FBS21CLFlBQUwsQ0FBa0JULElBQWxCLENBQWI7QUFBQSxVQUNNVyxvQkFBb0JyQixLQUFLc0Isb0JBQUwsQ0FBMEJKLElBQTFCLENBRDFCO0FBQUEsVUFFTUsseUJBQXlCRixpQkFGL0IsQ0FEb0MsQ0FHYzs7QUFFbEQsYUFBT0Usc0JBQVA7QUFDRDs7O3lDQUUyQkMsUSxFQUFVO0FBQ3BDLFVBQU1DLG1CQUFtQnpCLEtBQUswQixrQkFBTCxDQUF3QkYsUUFBeEIsQ0FBekI7QUFBQSxVQUNNRyxxQkFBcUJGLGdCQUQzQjs7QUFHQSxhQUFPRSxrQkFBUDtBQUNEOzs7dUNBRXlCSCxRLEVBQVU7QUFDbEMsVUFBTWIsVUFBVWEsU0FBU1osS0FBVCxDQUFlLFFBQWYsQ0FBaEI7QUFBQSxVQUNNYSxtQkFBb0JkLFlBQVksSUFEdEMsQ0FEa0MsQ0FFVzs7QUFFN0MsYUFBT2MsZ0JBQVA7QUFDRDs7O3lDQUUyQmYsSSxFQUFNO0FBQ2hDQSxhQUFPQSxLQUFLa0IsT0FBTCxDQUFhLFVBQWIsRUFBeUIsRUFBekIsQ0FBUDs7QUFFQSxhQUFPbEIsSUFBUDtBQUNEOzs7Z0RBRWtDQSxJLEVBQU07QUFDdkNBLGFBQU9BLEtBQUtrQixPQUFMLENBQWEsS0FBYixFQUFvQixFQUFwQixDQUFQOztBQUVBLGFBQU9sQixJQUFQO0FBQ0Q7OztpQ0FFbUJtQixTLEVBQVdDLFUsRUFBWTtBQUN6Q0Qsa0JBQVk3QixLQUFLK0IsMkJBQUwsQ0FBaUNGLFNBQWpDLENBQVo7O0FBRUEsVUFBTUcsZUFBa0JILFNBQWxCLFNBQStCQyxVQUFyQzs7QUFFQSxhQUFPRSxZQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEMsSUFBakI7O0FBRUEsU0FBU2MsTUFBVCxDQUFnQnFCLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5jbGFzcyB1dGlsIHtcbiAgc3RhdGljIHN1YkVudHJ5TmFtZXNGcm9tQWJzb2x1dGVEaXJlY3RvcnlQYXRoKGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdWJFbnRyeU5hbWVzID0gZnMucmVhZGRpclN5bmMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgcmV0dXJuIHN1YkVudHJ5TmFtZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBbXTsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpc0RpcmVjdG9yeVBhdGgoYWJzb2x1dGVQYXRoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhhYnNvbHV0ZVBhdGgpLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpO1xuXG4gICAgICByZXR1cm4gZGlyZWN0b3J5O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXSokLyksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aDtcbiAgfVxuXG4gIHN0YXRpYyByb290RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10qKS8pLFxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgcm9vdERpcmVjdG9yeU5hbWUgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgIHJldHVybiByb290RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lRnJvbVBhdGgocGF0aCkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dKikkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgbmFtZSA9IHNlY29uZE1hdGNoO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBzdGF0aWMgaXNIaWRkZW4ocGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSB1dGlsLm5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgICBtYXRjaGVzID0gbmFtZS5tYXRjaCgvXlxcLi8pLFxuICAgICAgICAgIGhpZGRlbiA9IChtYXRjaGVzICE9PSBudWxsKTsgLy8vXG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3RhdGljIGlzUGF0aFJlY29nbmlzZWRGaWxlUGF0aChwYXRoKSB7XG4gICAgY29uc3QgbmFtZSA9IHV0aWwubmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIHJlY29nbmlzZWRGaWxOYW1lID0gdXRpbC5pc1JlY29nbmlzZWRGaWxlTmFtZShuYW1lKSxcbiAgICAgICAgICBwYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gcmVjb2duaXNlZEZpbE5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7XG4gIH1cbiAgXG4gIHN0YXRpYyBpc1JlY29nbmlzZWRGaWxlTmFtZShmaWxlTmFtZSkge1xuICAgIGNvbnN0IGZsb3JlbmNlRmlsZU5hbWUgPSB1dGlsLmlzRmxvcmVuY2VGaWxlTmFtZShmaWxlTmFtZSksXG4gICAgICAgICAgcmVjb2duaXNlZEZpbGVOYW1lID0gZmxvcmVuY2VGaWxlTmFtZTtcbiAgICBcbiAgICByZXR1cm4gcmVjb2duaXNlZEZpbGVOYW1lO1xuICB9XG5cbiAgc3RhdGljIGlzRmxvcmVuY2VGaWxlTmFtZShmaWxlTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBmaWxlTmFtZS5tYXRjaCgvXFwuZmxzJC8pLFxuICAgICAgICAgIGZsb3JlbmNlRmlsZU5hbWUgPSAobWF0Y2hlcyAhPT0gbnVsbCk7IC8vL1xuICAgIFxuICAgIHJldHVybiBmbG9yZW5jZUZpbGVOYW1lO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZU1hc3RlckZyb21QYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC1tYXN0ZXIvLCAnJyk7XG4gIFxuICAgIHJldHVybiBwYXRoO1xuICB9XG4gIFxuICBzdGF0aWMgcmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBzdGF0aWMgY29tYmluZVBhdGhzKGZpcnN0UGF0aCwgc2Vjb25kUGF0aCkge1xuICAgIGZpcnN0UGF0aCA9IHV0aWwucmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoKGZpcnN0UGF0aCk7XG5cbiAgICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtmaXJzdFBhdGh9LyR7c2Vjb25kUGF0aH1gO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==