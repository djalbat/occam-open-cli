'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

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
    key: 'isDirectoryEmpty',
    value: function isDirectoryEmpty(absoluteDirectoryPath) {
      var subEntryNames = subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath),
          subEntryNamesLength = subEntryNames.length,
          directoryEmpty = subEntryNamesLength === 0;

      return directoryEmpty;
    }
  }, {
    key: 'isHidden',
    value: function isHidden(path) {
      var name = pathUtil.nameFromPath(path),
          matches = name.match(/^\./),
          hidden = matches !== null; ///

      return hidden;
    }
  }, {
    key: 'isPathRecognisedFilePath',
    value: function isPathRecognisedFilePath(path) {
      var name = pathUtil.nameFromPath(path),
          recognisedFilName = pathUtil.isRecognisedFileName(name),
          pathRecognisedFilePath = recognisedFilName; ///

      return pathRecognisedFilePath;
    }
  }, {
    key: 'isRecognisedFileName',
    value: function isRecognisedFileName(fileName) {
      var florenceFileName = pathUtil.isFlorenceFileName(fileName),
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
      firstPath = pathUtil.removeTrailingSlashFromPath(firstPath);

      var combinedPath = firstPath + '/' + secondPath;

      return combinedPath;
    }
  }]);

  return pathUtil;
}();

module.exports = pathUtil;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhdGguanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aFV0aWwiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwicmVhZGRpclN5bmMiLCJlcnJvciIsImFic29sdXRlUGF0aCIsInN0YXQiLCJzdGF0U3luYyIsImRpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwicGF0aCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJzZWNvbmQiLCJkaXJlY3RvcnlQYXRoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJzZWNvbmRNYXRjaCIsIm5hbWUiLCJzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkaXJlY3RvcnlFbXB0eSIsIm5hbWVGcm9tUGF0aCIsImhpZGRlbiIsInJlY29nbmlzZWRGaWxOYW1lIiwiaXNSZWNvZ25pc2VkRmlsZU5hbWUiLCJwYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiZmlsZU5hbWUiLCJmbG9yZW5jZUZpbGVOYW1lIiwiaXNGbG9yZW5jZUZpbGVOYW1lIiwicmVjb2duaXNlZEZpbGVOYW1lIiwicmVwbGFjZSIsImZpcnN0UGF0aCIsInNlY29uZFBhdGgiLCJyZW1vdmVUcmFpbGluZ1NsYXNoRnJvbVBhdGgiLCJjb21iaW5lZFBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxLQUFLQyxRQUFRLElBQVIsQ0FBWDs7SUFFTUMsUTs7Ozs7OzsyREFDMENDLHFCLEVBQXVCO0FBQ25FLFVBQUk7QUFDRixZQUFNQyxnQkFBZ0JKLEdBQUdLLFdBQUgsQ0FBZUYscUJBQWYsQ0FBdEI7O0FBRUEsZUFBT0MsYUFBUDtBQUNELE9BSkQsQ0FJRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCxlQUFPLEVBQVAsQ0FEYyxDQUNGO0FBQ2I7QUFDRjs7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Q0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblxuY2xhc3MgcGF0aFV0aWwge1xuICBzdGF0aWMgc3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgICByZXR1cm4gc3ViRW50cnlOYW1lcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFtdOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlzRGlyZWN0b3J5UGF0aChhYnNvbHV0ZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dKiQvKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRoO1xuICB9XG5cbiAgc3RhdGljIHJvb3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSopLyksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICByb290RGlyZWN0b3J5TmFtZSA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgcmV0dXJuIHJvb3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgc3RhdGljIG5hbWVGcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10qKSQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2g7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBpc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7ICAgIFxuICB9XG5cbiAgc3RhdGljIGlzSGlkZGVuKHBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gcGF0aFV0aWwubmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIG1hdGNoZXMgPSBuYW1lLm1hdGNoKC9eXFwuLyksXG4gICAgICAgICAgaGlkZGVuID0gKG1hdGNoZXMgIT09IG51bGwpOyAvLy9cblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdGF0aWMgaXNQYXRoUmVjb2duaXNlZEZpbGVQYXRoKHBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gcGF0aFV0aWwubmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIHJlY29nbmlzZWRGaWxOYW1lID0gcGF0aFV0aWwuaXNSZWNvZ25pc2VkRmlsZU5hbWUobmFtZSksXG4gICAgICAgICAgcGF0aFJlY29nbmlzZWRGaWxlUGF0aCA9IHJlY29nbmlzZWRGaWxOYW1lOyAvLy9cblxuICAgIHJldHVybiBwYXRoUmVjb2duaXNlZEZpbGVQYXRoO1xuICB9XG4gIFxuICBzdGF0aWMgaXNSZWNvZ25pc2VkRmlsZU5hbWUoZmlsZU5hbWUpIHtcbiAgICBjb25zdCBmbG9yZW5jZUZpbGVOYW1lID0gcGF0aFV0aWwuaXNGbG9yZW5jZUZpbGVOYW1lKGZpbGVOYW1lKSxcbiAgICAgICAgICByZWNvZ25pc2VkRmlsZU5hbWUgPSBmbG9yZW5jZUZpbGVOYW1lO1xuICAgIFxuICAgIHJldHVybiByZWNvZ25pc2VkRmlsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgaXNGbG9yZW5jZUZpbGVOYW1lKGZpbGVOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGZpbGVOYW1lLm1hdGNoKC9cXC5mbHMkLyksXG4gICAgICAgICAgZmxvcmVuY2VGaWxlTmFtZSA9IChtYXRjaGVzICE9PSBudWxsKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIGZsb3JlbmNlRmlsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlTWFzdGVyRnJvbVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLW1hc3Rlci8sICcnKTtcbiAgXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbiAgXG4gIHN0YXRpYyByZW1vdmVUcmFpbGluZ1NsYXNoRnJvbVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBjb21iaW5lUGF0aHMoZmlyc3RQYXRoLCBzZWNvbmRQYXRoKSB7XG4gICAgZmlyc3RQYXRoID0gcGF0aFV0aWwucmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoKGZpcnN0UGF0aCk7XG5cbiAgICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtmaXJzdFBhdGh9LyR7c2Vjb25kUGF0aH1gO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhVdGlsO1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=