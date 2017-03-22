'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var util = function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
    key: 'subEntryNamesFromAbsoluteFilePath',
    value: function subEntryNamesFromAbsoluteFilePath(absoluteDirectoryPath) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi91dGlsLmpzIl0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsInV0aWwiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwicmVhZGRpclN5bmMiLCJlcnJvciIsImFic29sdXRlUGF0aCIsInN0YXQiLCJzdGF0U3luYyIsImRpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwicGF0aCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJzZWNvbmQiLCJkaXJlY3RvcnlQYXRoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJzZWNvbmRNYXRjaCIsIm5hbWUiLCJuYW1lRnJvbVBhdGgiLCJoaWRkZW4iLCJyZWNvZ25pc2VkRmlsTmFtZSIsImlzUmVjb2duaXNlZEZpbGVOYW1lIiwicGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImZpbGVOYW1lIiwiZmxvcmVuY2VGaWxlTmFtZSIsImlzRmxvcmVuY2VGaWxlTmFtZSIsInJlY29nbmlzZWRGaWxlTmFtZSIsInJlcGxhY2UiLCJmaXJzdFBhdGgiLCJzZWNvbmRQYXRoIiwicmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoIiwiY29tYmluZWRQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsS0FBS0MsUUFBUSxJQUFSLENBQVg7O0lBRU1DLEk7Ozs7Ozs7c0RBQ3FDQyxxQixFQUF1QjtBQUM5RCxVQUFJO0FBQ0YsWUFBTUMsZ0JBQWdCSixHQUFHSyxXQUFILENBQWVGLHFCQUFmLENBQXRCOztBQUVBLGVBQU9DLGFBQVA7QUFDRCxPQUpELENBSUUsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsZUFBTyxFQUFQLENBRGMsQ0FDRjtBQUNiO0FBQ0Y7OztvQ0FFc0JDLFksRUFBYztBQUNuQyxVQUFJO0FBQ0YsWUFBTUMsT0FBT1IsR0FBR1MsUUFBSCxDQUFZRixZQUFaLENBQWI7QUFBQSxZQUNNRyxZQUFZRixLQUFLRyxXQUFMLEVBRGxCOztBQUdBLGVBQU9ELFNBQVA7QUFDRCxPQUxELENBS0UsT0FBT0osS0FBUCxFQUFjO0FBQ2QsZUFBTyxLQUFQLENBRGMsQ0FDQTtBQUNmO0FBQ0Y7OzswQ0FFNEJNLEksRUFBTTtBQUNqQyxVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7QUFBQSxVQUNNQyxhQUFhQyxPQUFPSCxPQUFQLENBRG5CO0FBQUEsVUFFTUksZ0JBQWdCRixVQUZ0QixDQURpQyxDQUdDOztBQUVsQyxhQUFPRSxhQUFQO0FBQ0Q7Ozs4Q0FFZ0NMLEksRUFBTTtBQUNyQyxVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsV0FBWCxDQUFoQjtBQUFBLFVBQ01DLGFBQWFDLE9BQU9ILE9BQVAsQ0FEbkI7QUFBQSxVQUVNSyxvQkFBb0JILFVBRjFCLENBRHFDLENBR0M7O0FBRXRDLGFBQU9HLGlCQUFQO0FBQ0Q7OztpQ0FFbUJOLEksRUFBTTtBQUN4QixVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7QUFBQSxVQUNNSyxjQUFjSCxPQUFPSCxPQUFQLENBRHBCO0FBQUEsVUFFTU8sT0FBT0QsV0FGYjs7QUFJQSxhQUFPQyxJQUFQO0FBQ0Q7Ozs2QkFFZVIsSSxFQUFNO0FBQ3BCLFVBQU1RLE9BQU9sQixLQUFLbUIsWUFBTCxDQUFrQlQsSUFBbEIsQ0FBYjtBQUFBLFVBQ01DLFVBQVVPLEtBQUtOLEtBQUwsQ0FBVyxLQUFYLENBRGhCO0FBQUEsVUFFTVEsU0FBVVQsWUFBWSxJQUY1QixDQURvQixDQUdlOztBQUVuQyxhQUFPUyxNQUFQO0FBQ0Q7Ozs2Q0FFK0JWLEksRUFBTTtBQUNwQyxVQUFNUSxPQUFPbEIsS0FBS21CLFlBQUwsQ0FBa0JULElBQWxCLENBQWI7QUFBQSxVQUNNVyxvQkFBb0JyQixLQUFLc0Isb0JBQUwsQ0FBMEJKLElBQTFCLENBRDFCO0FBQUEsVUFFTUsseUJBQXlCRixpQkFGL0IsQ0FEb0MsQ0FHYzs7QUFFbEQsYUFBT0Usc0JBQVA7QUFDRDs7O3lDQUUyQkMsUSxFQUFVO0FBQ3BDLFVBQU1DLG1CQUFtQnpCLEtBQUswQixrQkFBTCxDQUF3QkYsUUFBeEIsQ0FBekI7QUFBQSxVQUNNRyxxQkFBcUJGLGdCQUQzQjs7QUFHQSxhQUFPRSxrQkFBUDtBQUNEOzs7dUNBRXlCSCxRLEVBQVU7QUFDbEMsVUFBTWIsVUFBVWEsU0FBU1osS0FBVCxDQUFlLFFBQWYsQ0FBaEI7QUFBQSxVQUNNYSxtQkFBb0JkLFlBQVksSUFEdEMsQ0FEa0MsQ0FFVzs7QUFFN0MsYUFBT2MsZ0JBQVA7QUFDRDs7O3lDQUUyQmYsSSxFQUFNO0FBQ2hDQSxhQUFPQSxLQUFLa0IsT0FBTCxDQUFhLFVBQWIsRUFBeUIsRUFBekIsQ0FBUDs7QUFFQSxhQUFPbEIsSUFBUDtBQUNEOzs7Z0RBRWtDQSxJLEVBQU07QUFDdkNBLGFBQU9BLEtBQUtrQixPQUFMLENBQWEsS0FBYixFQUFvQixFQUFwQixDQUFQOztBQUVBLGFBQU9sQixJQUFQO0FBQ0Q7OztpQ0FFbUJtQixTLEVBQVdDLFUsRUFBWTtBQUN6Q0Qsa0JBQVk3QixLQUFLK0IsMkJBQUwsQ0FBaUNGLFNBQWpDLENBQVo7O0FBRUEsVUFBTUcsZUFBa0JILFNBQWxCLFNBQStCQyxVQUFyQzs7QUFFQSxhQUFPRSxZQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEMsSUFBakI7O0FBRUEsU0FBU2MsTUFBVCxDQUFnQnFCLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5jbGFzcyB1dGlsIHtcbiAgc3RhdGljIHN1YkVudHJ5TmFtZXNGcm9tQWJzb2x1dGVGaWxlUGF0aChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIHJldHVybiBzdWJFbnRyeU5hbWVzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gW107ICAvLy9cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNEaXJlY3RvcnlQYXRoKGFic29sdXRlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLy9cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10qJC8pLFxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG4gIH1cblxuICBzdGF0aWMgcm9vdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKikvKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHJvb3REaXJlY3RvcnlOYW1lID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXSopJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIG5hbWUgPSBzZWNvbmRNYXRjaDtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc3RhdGljIGlzSGlkZGVuKHBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gdXRpbC5uYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgICAgbWF0Y2hlcyA9IG5hbWUubWF0Y2goL15cXC4vKSxcbiAgICAgICAgICBoaWRkZW4gPSAobWF0Y2hlcyAhPT0gbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0YXRpYyBpc1BhdGhSZWNvZ25pc2VkRmlsZVBhdGgocGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSB1dGlsLm5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgICByZWNvZ25pc2VkRmlsTmFtZSA9IHV0aWwuaXNSZWNvZ25pc2VkRmlsZU5hbWUobmFtZSksXG4gICAgICAgICAgcGF0aFJlY29nbmlzZWRGaWxlUGF0aCA9IHJlY29nbmlzZWRGaWxOYW1lOyAvLy9cblxuICAgIHJldHVybiBwYXRoUmVjb2duaXNlZEZpbGVQYXRoO1xuICB9XG4gIFxuICBzdGF0aWMgaXNSZWNvZ25pc2VkRmlsZU5hbWUoZmlsZU5hbWUpIHtcbiAgICBjb25zdCBmbG9yZW5jZUZpbGVOYW1lID0gdXRpbC5pc0Zsb3JlbmNlRmlsZU5hbWUoZmlsZU5hbWUpLFxuICAgICAgICAgIHJlY29nbmlzZWRGaWxlTmFtZSA9IGZsb3JlbmNlRmlsZU5hbWU7XG4gICAgXG4gICAgcmV0dXJuIHJlY29nbmlzZWRGaWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBpc0Zsb3JlbmNlRmlsZU5hbWUoZmlsZU5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZmlsZU5hbWUubWF0Y2goL1xcLmZscyQvKSxcbiAgICAgICAgICBmbG9yZW5jZUZpbGVOYW1lID0gKG1hdGNoZXMgIT09IG51bGwpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gZmxvcmVuY2VGaWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVNYXN0ZXJGcm9tUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwtbWFzdGVyLywgJycpO1xuICBcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuICBcbiAgc3RhdGljIHJlbW92ZVRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgc3RhdGljIGNvbWJpbmVQYXRocyhmaXJzdFBhdGgsIHNlY29uZFBhdGgpIHtcbiAgICBmaXJzdFBhdGggPSB1dGlsLnJlbW92ZVRyYWlsaW5nU2xhc2hGcm9tUGF0aChmaXJzdFBhdGgpO1xuXG4gICAgY29uc3QgY29tYmluZWRQYXRoID0gYCR7Zmlyc3RQYXRofS8ke3NlY29uZFBhdGh9YDtcblxuICAgIHJldHVybiBjb21iaW5lZFBhdGg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsO1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=