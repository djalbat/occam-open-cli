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
    key: 'isAbsolutePathHiddenPath',
    value: function isAbsolutePathHiddenPath(absolutePath) {
      var name = pathUtil.nameFromPath(absolutePath),
          nameHiddenName = pathUtil.isNameHiddenName(name),
          absolutePathHiddenPath = nameHiddenName; ///

      return absolutePathHiddenPath;
    }
  }, {
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
    key: 'isNameHiddenName',
    value: function isNameHiddenName(name) {
      var position = name.search(/^\..+/),
          nameHiddenName = position !== -1;

      return nameHiddenName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhdGguanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwicGF0aFV0aWwiLCJhYnNvbHV0ZVBhdGgiLCJuYW1lIiwibmFtZUZyb21QYXRoIiwibmFtZUhpZGRlbk5hbWUiLCJpc05hbWVIaWRkZW5OYW1lIiwiYWJzb2x1dGVQYXRoSGlkZGVuUGF0aCIsInN0YXQiLCJzdGF0U3luYyIsImRpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwiZXJyb3IiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzdWJFbnRyeU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGlyZWN0b3J5RW1wdHkiLCJwb3NpdGlvbiIsInNlYXJjaCIsInJlYWRkaXJTeW5jIiwicGF0aCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpcnN0TWF0Y2giLCJzZWNvbmQiLCJkaXJlY3RvcnlQYXRoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJzZWNvbmRNYXRjaCIsInJlcGxhY2UiLCJmaXJzdFBhdGgiLCJzZWNvbmRQYXRoIiwicmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoIiwiY29tYmluZWRQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYOztBQUVBLElBQU1DLFlBQVlELFFBQVEsZUFBUixDQUFsQjs7SUFFTUUsUTs7Ozs7Ozs2Q0FDNEJDLFksRUFBYztBQUM1QyxVQUFNQyxPQUFPRixTQUFTRyxZQUFULENBQXNCRixZQUF0QixDQUFiO0FBQUEsVUFDTUcsaUJBQWlCSixTQUFTSyxnQkFBVCxDQUEwQkgsSUFBMUIsQ0FEdkI7QUFBQSxVQUVNSSx5QkFBeUJGLGNBRi9CLENBRDRDLENBR0k7O0FBRWhELGFBQU9FLHNCQUFQO0FBQ0Q7OztnREFFa0NMLFksRUFBYztBQUMvQyxVQUFJO0FBQ0YsWUFBTU0sT0FBT1YsR0FBR1csUUFBSCxDQUFZUCxZQUFaLENBQWI7QUFBQSxZQUNNUSxZQUFZRixLQUFLRyxXQUFMLEVBRGxCOztBQUdBLGVBQU9ELFNBQVA7QUFDRCxPQUxELENBS0UsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsZUFBTyxLQUFQLENBRGMsQ0FDQTtBQUNmO0FBQ0Y7OztpREFFbUNDLHFCLEVBQXVCO0FBQ3pELFVBQU1DLGdCQUFnQmIsU0FBU2Msc0NBQVQsQ0FBZ0RGLHFCQUFoRCxDQUF0QjtBQUFBLFVBQ0lHLHNCQUFzQkYsY0FBY0csTUFEeEM7QUFBQSxVQUVJQyxpQkFBa0JGLHdCQUF3QixDQUY5Qzs7QUFJQSxhQUFPRSxjQUFQO0FBQ0Q7OztxQ0FFdUJmLEksRUFBTTtBQUM1QixVQUFNZ0IsV0FBV2hCLEtBQUtpQixNQUFMLENBQVksT0FBWixDQUFqQjtBQUFBLFVBQ01mLGlCQUFrQmMsYUFBYSxDQUFDLENBRHRDOztBQUdBLGFBQU9kLGNBQVA7QUFDRDs7OzJEQUU2Q1EscUIsRUFBdUI7QUFDbkUsVUFBSTtBQUNGLFlBQU1DLGdCQUFnQmhCLEdBQUd1QixXQUFILENBQWVSLHFCQUFmLENBQXRCOztBQUVBLGVBQU9DLGFBQVA7QUFDRCxPQUpELENBSUUsT0FBT0YsS0FBUCxFQUFjO0FBQ2QsZUFBTyxFQUFQLENBRGMsQ0FDRjtBQUNiO0FBQ0Y7OzswQ0FFNEJVLEksRUFBTTtBQUNqQyxVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7QUFBQSxVQUNNQyxhQUFhekIsVUFBVTBCLE1BQVYsQ0FBaUJILE9BQWpCLENBRG5CO0FBQUEsVUFFTUksZ0JBQWdCRixVQUZ0QixDQURpQyxDQUdDOztBQUVsQyxhQUFPRSxhQUFQO0FBQ0Q7Ozs4Q0FFZ0NMLEksRUFBTTtBQUNyQyxVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsV0FBWCxDQUFoQjtBQUFBLFVBQ01DLGFBQWF6QixVQUFVMEIsTUFBVixDQUFpQkgsT0FBakIsQ0FEbkI7QUFBQSxVQUVNSyxvQkFBb0JILFVBRjFCLENBRHFDLENBR0M7O0FBRXRDLGFBQU9HLGlCQUFQO0FBQ0Q7OztpQ0FFbUJOLEksRUFBTTtBQUN4QixVQUFNQyxVQUFVRCxLQUFLRSxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7QUFBQSxVQUNNSyxjQUFjN0IsVUFBVTBCLE1BQVYsQ0FBaUJILE9BQWpCLENBRHBCO0FBQUEsVUFFTXBCLE9BQU8wQixXQUZiOztBQUlBLGFBQU8xQixJQUFQO0FBQ0Q7Ozt5Q0FFMkJtQixJLEVBQU07QUFDaENBLGFBQU9BLEtBQUtRLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEVBQXpCLENBQVA7O0FBRUEsYUFBT1IsSUFBUDtBQUNEOzs7Z0RBRWtDQSxJLEVBQU07QUFDdkNBLGFBQU9BLEtBQUtRLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLEVBQXBCLENBQVA7O0FBRUEsYUFBT1IsSUFBUDtBQUNEOzs7aUNBRW1CUyxTLEVBQVdDLFUsRUFBWTtBQUN6Q0Qsa0JBQVk5QixTQUFTZ0MsMkJBQVQsQ0FBcUNGLFNBQXJDLENBQVo7O0FBRUEsVUFBTUcsZUFBa0JILFNBQWxCLFNBQStCQyxVQUFyQzs7QUFFQSxhQUFPRSxZQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkMsUUFBakIiLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5Jyk7XG5cbmNsYXNzIHBhdGhVdGlsIHtcbiAgc3RhdGljIGlzQWJzb2x1dGVQYXRoSGlkZGVuUGF0aChhYnNvbHV0ZVBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gcGF0aFV0aWwubmFtZUZyb21QYXRoKGFic29sdXRlUGF0aCksXG4gICAgICAgICAgbmFtZUhpZGRlbk5hbWUgPSBwYXRoVXRpbC5pc05hbWVIaWRkZW5OYW1lKG5hbWUpLFxuICAgICAgICAgIGFic29sdXRlUGF0aEhpZGRlblBhdGggPSBuYW1lSGlkZGVuTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGFic29sdXRlUGF0aEhpZGRlblBhdGg7XG4gIH1cblxuICBzdGF0aWMgaXNBYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoKGFic29sdXRlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLy9cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNBYnNvbHV0ZURpcmVjdG9yeVBhdGhFbXB0eShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcGF0aFV0aWwuc3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lc0xlbmd0aCA9IHN1YkVudHJ5TmFtZXMubGVuZ3RoLFxuICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbiAgfVxuXG4gIHN0YXRpYyBpc05hbWVIaWRkZW5OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5hbWUuc2VhcmNoKC9eXFwuLisvKSxcbiAgICAgICAgICBuYW1lSGlkZGVuTmFtZSA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gICAgcmV0dXJuIG5hbWVIaWRkZW5OYW1lO1xuICB9XG5cbiAgc3RhdGljIHN1YkVudHJ5TmFtZXNGcm9tQWJzb2x1dGVEaXJlY3RvcnlQYXRoKGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdWJFbnRyeU5hbWVzID0gZnMucmVhZGRpclN5bmMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgcmV0dXJuIHN1YkVudHJ5TmFtZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBbXTsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXSokLyksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGFycmF5VXRpbC5zZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG4gIH1cblxuICBzdGF0aWMgcm9vdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKikvKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gYXJyYXlVdGlsLnNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICByb290RGlyZWN0b3J5TmFtZSA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgcmV0dXJuIHJvb3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgc3RhdGljIG5hbWVGcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10qKSQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IGFycmF5VXRpbC5zZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgbmFtZSA9IHNlY29uZE1hdGNoO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlTWFzdGVyRnJvbVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLW1hc3Rlci8sICcnKTtcbiAgXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbiAgXG4gIHN0YXRpYyByZW1vdmVUcmFpbGluZ1NsYXNoRnJvbVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBjb21iaW5lUGF0aHMoZmlyc3RQYXRoLCBzZWNvbmRQYXRoKSB7XG4gICAgZmlyc3RQYXRoID0gcGF0aFV0aWwucmVtb3ZlVHJhaWxpbmdTbGFzaEZyb21QYXRoKGZpcnN0UGF0aCk7XG5cbiAgICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtmaXJzdFBhdGh9LyR7c2Vjb25kUGF0aH1gO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhVdGlsO1xuIl19