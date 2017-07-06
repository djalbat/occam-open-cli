'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var async = require('../async');

var pathMapsUtil = function () {
  function pathMapsUtil() {
    _classCallCheck(this, pathMapsUtil);
  }

  _createClass(pathMapsUtil, null, [{
    key: 'asyncForEachWithSourcePathAndTargetPath',
    value: function asyncForEachWithSourcePathAndTargetPath(pathMaps, callback, done) {
      async.forEach(pathMaps, function (pathMap, next) {
        var sourcePath = pathMap['sourcePath'],
            targetPath = pathMap['targetPath'];

        callback(sourcePath, targetPath, next);
      }, done);
    }
  }]);

  return pathMapsUtil;
}();

module.exports = pathMapsUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhdGhNYXBzLmpzIl0sIm5hbWVzIjpbImFzeW5jIiwicmVxdWlyZSIsInBhdGhNYXBzVXRpbCIsInBhdGhNYXBzIiwiY2FsbGJhY2siLCJkb25lIiwiZm9yRWFjaCIsInBhdGhNYXAiLCJuZXh0Iiwic291cmNlUGF0aCIsInRhcmdldFBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7O0lBRU1DLFk7Ozs7Ozs7NERBQzJDQyxRLEVBQVVDLFEsRUFBVUMsSSxFQUFNO0FBQ3ZFTCxZQUFNTSxPQUFOLENBQ0VILFFBREYsRUFFRSxVQUFTSSxPQUFULEVBQWtCQyxJQUFsQixFQUF3QjtBQUN0QixZQUFNQyxhQUFhRixRQUFRLFlBQVIsQ0FBbkI7QUFBQSxZQUNNRyxhQUFhSCxRQUFRLFlBQVIsQ0FEbkI7O0FBR0FILGlCQUFTSyxVQUFULEVBQXFCQyxVQUFyQixFQUFpQ0YsSUFBakM7QUFDRCxPQVBILEVBUUVILElBUkY7QUFVRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJWLFlBQWpCIiwiZmlsZSI6InBhdGhNYXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhc3luYyA9IHJlcXVpcmUoJy4uL2FzeW5jJyk7XG5cbmNsYXNzIHBhdGhNYXBzVXRpbCB7XG4gIHN0YXRpYyBhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aEFuZFRhcmdldFBhdGgocGF0aE1hcHMsIGNhbGxiYWNrLCBkb25lKSB7XG4gICAgYXN5bmMuZm9yRWFjaChcbiAgICAgIHBhdGhNYXBzLFxuICAgICAgZnVuY3Rpb24ocGF0aE1hcCwgbmV4dCkge1xuICAgICAgICBjb25zdCBzb3VyY2VQYXRoID0gcGF0aE1hcFsnc291cmNlUGF0aCddLFxuICAgICAgICAgICAgICB0YXJnZXRQYXRoID0gcGF0aE1hcFsndGFyZ2V0UGF0aCddO1xuICBcbiAgICAgICAgY2FsbGJhY2soc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgbmV4dCk7XG4gICAgICB9LFxuICAgICAgZG9uZVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoTWFwc1V0aWw7XG4iXX0=