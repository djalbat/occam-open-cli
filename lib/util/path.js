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
      var subEntryNames = pathUtil.subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhdGguanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aFV0aWwiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwicmVhZGRpclN5bmMiLCJlcnJvciIsImFic29sdXRlUGF0aCIsInN0YXQiLCJzdGF0U3luYyIsImRpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwicGF0aCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJzZWNvbmQiLCJkaXJlY3RvcnlQYXRoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJzZWNvbmRNYXRjaCIsIm5hbWUiLCJzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkaXJlY3RvcnlFbXB0eSIsIm5hbWVGcm9tUGF0aCIsImhpZGRlbiIsInJlY29nbmlzZWRGaWxOYW1lIiwiaXNSZWNvZ25pc2VkRmlsZU5hbWUiLCJwYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiZmlsZU5hbWUiLCJmbG9yZW5jZUZpbGVOYW1lIiwiaXNGbG9yZW5jZUZpbGVOYW1lIiwicmVjb2duaXNlZEZpbGVOYW1lIiwicmVwbGFjZSIsImZpcnN0UGF0aCIsInNlY29uZFBhdGgiLCJyZW1vdmVUcmFpbGluZ1NsYXNoRnJvbVBhdGgiLCJjb21iaW5lZFBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxLQUFLQyxRQUFRLElBQVIsQ0FBWDs7SUFFTUMsUTs7Ozs7OzsyREFDMENDLHFCLEVBQXVCO0FBQ25FLFVBQUk7QUFDRixZQUFNQyxnQkFBZ0JKLEdBQUdLLFdBQUgsQ0FBZUYscUJBQWYsQ0FBdEI7O0FBRUEsZUFBT0MsYUFBUDtBQUNELE9BSkQsQ0FJRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCxlQUFPLEVBQVAsQ0FEYyxDQUNGO0FBQ2I7QUFDRjs7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U0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5jbGFzcyBwYXRoVXRpbCB7XG4gIHN0YXRpYyBzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIHJldHVybiBzdWJFbnRyeU5hbWVzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gW107ICAvLy9cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNEaXJlY3RvcnlQYXRoKGFic29sdXRlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLy9cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10qJC8pLFxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG4gIH1cblxuICBzdGF0aWMgcm9vdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKikvKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHJvb3REaXJlY3RvcnlOYW1lID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXSopJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIG5hbWUgPSBzZWNvbmRNYXRjaDtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc3RhdGljIGlzRGlyZWN0b3J5RW1wdHkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHBhdGhVdGlsLnN1YkVudHJ5TmFtZXNGcm9tQWJzb2x1dGVEaXJlY3RvcnlQYXRoKGFic29sdXRlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgc3ViRW50cnlOYW1lc0xlbmd0aCA9IHN1YkVudHJ5TmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gKHN1YkVudHJ5TmFtZXNMZW5ndGggPT09IDApO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RvcnlFbXB0eTsgICAgXG4gIH1cblxuICBzdGF0aWMgaXNIaWRkZW4ocGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSBwYXRoVXRpbC5uYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgICAgbWF0Y2hlcyA9IG5hbWUubWF0Y2goL15cXC4vKSxcbiAgICAgICAgICBoaWRkZW4gPSAobWF0Y2hlcyAhPT0gbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0YXRpYyBpc1BhdGhSZWNvZ25pc2VkRmlsZVBhdGgocGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSBwYXRoVXRpbC5uYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgICAgcmVjb2duaXNlZEZpbE5hbWUgPSBwYXRoVXRpbC5pc1JlY29nbmlzZWRGaWxlTmFtZShuYW1lKSxcbiAgICAgICAgICBwYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gcmVjb2duaXNlZEZpbE5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7XG4gIH1cbiAgXG4gIHN0YXRpYyBpc1JlY29nbmlzZWRGaWxlTmFtZShmaWxlTmFtZSkge1xuICAgIGNvbnN0IGZsb3JlbmNlRmlsZU5hbWUgPSBwYXRoVXRpbC5pc0Zsb3JlbmNlRmlsZU5hbWUoZmlsZU5hbWUpLFxuICAgICAgICAgIHJlY29nbmlzZWRGaWxlTmFtZSA9IGZsb3JlbmNlRmlsZU5hbWU7XG4gICAgXG4gICAgcmV0dXJuIHJlY29nbmlzZWRGaWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBpc0Zsb3JlbmNlRmlsZU5hbWUoZmlsZU5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZmlsZU5hbWUubWF0Y2goL1xcLmZscyQvKSxcbiAgICAgICAgICBmbG9yZW5jZUZpbGVOYW1lID0gKG1hdGNoZXMgIT09IG51bGwpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gZmxvcmVuY2VGaWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVNYXN0ZXJGcm9tUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwtbWFzdGVyLywgJycpO1xuICBcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuICBcbiAgc3RhdGljIHJlbW92ZVRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgc3RhdGljIGNvbWJpbmVQYXRocyhmaXJzdFBhdGgsIHNlY29uZFBhdGgpIHtcbiAgICBmaXJzdFBhdGggPSBwYXRoVXRpbC5yZW1vdmVUcmFpbGluZ1NsYXNoRnJvbVBhdGgoZmlyc3RQYXRoKTtcblxuICAgIGNvbnN0IGNvbWJpbmVkUGF0aCA9IGAke2ZpcnN0UGF0aH0vJHtzZWNvbmRQYXRofWA7XG5cbiAgICByZXR1cm4gY29tYmluZWRQYXRoO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aFV0aWw7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==