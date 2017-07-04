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
    key: 'isHiddenPath',
    value: function isHiddenPath(path) {
      var name = pathUtil.nameFromPath(path),
          matches = name.match(/^\./),
          hiddenPath = matches !== null; ///

      return hiddenPath;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhdGguanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwicGF0aFV0aWwiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwicmVhZGRpclN5bmMiLCJlcnJvciIsImFic29sdXRlUGF0aCIsInN0YXQiLCJzdGF0U3luYyIsImRpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwicGF0aCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJzZWNvbmQiLCJkaXJlY3RvcnlQYXRoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJzZWNvbmRNYXRjaCIsIm5hbWUiLCJzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkaXJlY3RvcnlFbXB0eSIsIm5hbWVGcm9tUGF0aCIsImhpZGRlblBhdGgiLCJyZXBsYWNlIiwiZmlyc3RQYXRoIiwic2Vjb25kUGF0aCIsInJlbW92ZVRyYWlsaW5nU2xhc2hGcm9tUGF0aCIsImNvbWJpbmVkUGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxLQUFLQyxRQUFRLElBQVIsQ0FBWDs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGVBQVIsQ0FBbEI7O0lBRU1FLFE7Ozs7Ozs7MkRBQzBDQyxxQixFQUF1QjtBQUNuRSxVQUFJO0FBQ0YsWUFBTUMsZ0JBQWdCTCxHQUFHTSxXQUFILENBQWVGLHFCQUFmLENBQXRCOztBQUVBLGVBQU9DLGFBQVA7QUFDRCxPQUpELENBSUUsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsZUFBTyxFQUFQLENBRGMsQ0FDRjtBQUNiO0FBQ0Y7OztvQ0FFc0JDLFksRUFBYztBQUNuQyxVQUFJO0FBQ0YsWUFBTUMsT0FBT1QsR0FBR1UsUUFBSCxDQUFZRixZQUFaLENBQWI7QUFBQSxZQUNNRyxZQUFZRixLQUFLRyxXQUFMLEVBRGxCOztBQUdBLGVBQU9ELFNBQVA7QUFDRCxPQUxELENBS0UsT0FBT0osS0FBUCxFQUFjO0FBQ2QsZUFBTyxLQUFQLENBRGMsQ0FDQTtBQUNmO0FBQ0Y7OzswQ0FFNEJNLEksRUFBTTtBQUNqQyxVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7QUFBQSxVQUNNQyxhQUFhZCxVQUFVZSxNQUFWLENBQWlCSCxPQUFqQixDQURuQjtBQUFBLFVBRU1JLGdCQUFnQkYsVUFGdEIsQ0FEaUMsQ0FHQzs7QUFFbEMsYUFBT0UsYUFBUDtBQUNEOzs7OENBRWdDTCxJLEVBQU07QUFDckMsVUFBTUMsVUFBVUQsS0FBS0UsS0FBTCxDQUFXLFdBQVgsQ0FBaEI7QUFBQSxVQUNNQyxhQUFhZCxVQUFVZSxNQUFWLENBQWlCSCxPQUFqQixDQURuQjtBQUFBLFVBRU1LLG9CQUFvQkgsVUFGMUIsQ0FEcUMsQ0FHQzs7QUFFdEMsYUFBT0csaUJBQVA7QUFDRDs7O2lDQUVtQk4sSSxFQUFNO0FBQ3hCLFVBQU1DLFVBQVVELEtBQUtFLEtBQUwsQ0FBVyxnQkFBWCxDQUFoQjtBQUFBLFVBQ01LLGNBQWNsQixVQUFVZSxNQUFWLENBQWlCSCxPQUFqQixDQURwQjtBQUFBLFVBRU1PLE9BQU9ELFdBRmI7O0FBSUEsYUFBT0MsSUFBUDtBQUNEOzs7cUNBRXVCakIscUIsRUFBdUI7QUFDN0MsVUFBTUMsZ0JBQWdCRixTQUFTbUIsc0NBQVQsQ0FBZ0RsQixxQkFBaEQsQ0FBdEI7QUFBQSxVQUNNbUIsc0JBQXNCbEIsY0FBY21CLE1BRDFDO0FBQUEsVUFFTUMsaUJBQWtCRix3QkFBd0IsQ0FGaEQ7O0FBSUEsYUFBT0UsY0FBUDtBQUNEOzs7aUNBRW1CWixJLEVBQU07QUFDeEIsVUFBTVEsT0FBT2xCLFNBQVN1QixZQUFULENBQXNCYixJQUF0QixDQUFiO0FBQUEsVUFDTUMsVUFBVU8sS0FBS04sS0FBTCxDQUFXLEtBQVgsQ0FEaEI7QUFBQSxVQUVNWSxhQUFjYixZQUFZLElBRmhDLENBRHdCLENBR2U7O0FBRXZDLGFBQU9hLFVBQVA7QUFDRDs7O3lDQUUyQmQsSSxFQUFNO0FBQ2hDQSxhQUFPQSxLQUFLZSxPQUFMLENBQWEsVUFBYixFQUF5QixFQUF6QixDQUFQOztBQUVBLGFBQU9mLElBQVA7QUFDRDs7O2dEQUVrQ0EsSSxFQUFNO0FBQ3ZDQSxhQUFPQSxLQUFLZSxPQUFMLENBQWEsS0FBYixFQUFvQixFQUFwQixDQUFQOztBQUVBLGFBQU9mLElBQVA7QUFDRDs7O2lDQUVtQmdCLFMsRUFBV0MsVSxFQUFZO0FBQ3pDRCxrQkFBWTFCLFNBQVM0QiwyQkFBVCxDQUFxQ0YsU0FBckMsQ0FBWjs7QUFFQSxVQUFNRyxlQUFrQkgsU0FBbEIsU0FBK0JDLFVBQXJDOztBQUVBLGFBQU9FLFlBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUIvQixRQUFqQiIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgcGF0aFV0aWwge1xuICBzdGF0aWMgc3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgICByZXR1cm4gc3ViRW50cnlOYW1lcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFtdOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlzRGlyZWN0b3J5UGF0aChhYnNvbHV0ZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dKiQvKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gYXJyYXlVdGlsLnNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aDtcbiAgfVxuXG4gIHN0YXRpYyByb290RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10qKS8pLFxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBhcnJheVV0aWwuc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHJvb3REaXJlY3RvcnlOYW1lID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXSopJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gYXJyYXlVdGlsLnNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2g7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBpc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBwYXRoVXRpbC5zdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7ICAgIFxuICB9XG5cbiAgc3RhdGljIGlzSGlkZGVuUGF0aChwYXRoKSB7XG4gICAgY29uc3QgbmFtZSA9IHBhdGhVdGlsLm5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgICBtYXRjaGVzID0gbmFtZS5tYXRjaCgvXlxcLi8pLFxuICAgICAgICAgIGhpZGRlblBhdGggPSAobWF0Y2hlcyAhPT0gbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIGhpZGRlblBhdGg7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlTWFzdGVyRnJvbVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLW1hc3Rlci8sICcnKTtcbiAgXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbiAgXG4gIHN0YXRpYyByZW1vdmVUcmFpbGluZ1NsYXNoRnJvbVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBjb21iaW5lUGF0aHMoZmlyc3RQYXRoLCBzZWNvbmRQYXRoKSB7XG4gICAgZmlyc3RQYXRoID0gcGF0aFV0aWwucmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoKGZpcnN0UGF0aCk7XG5cbiAgICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtmaXJzdFBhdGh9LyR7c2Vjb25kUGF0aH1gO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhVdGlsO1xuIl19