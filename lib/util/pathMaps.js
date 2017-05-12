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
        var keys = Object.keys(pathMap),
            firstKey = first(keys),
            sourcePath = firstKey,
            ///
        targetPath = pathMap[sourcePath];

        callback(sourcePath, targetPath, next);
      }, done);
    }
  }]);

  return pathMapsUtil;
}();

module.exports = pathMapsUtil;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhdGhNYXBzLmpzIl0sIm5hbWVzIjpbImFzeW5jIiwicmVxdWlyZSIsInBhdGhNYXBzVXRpbCIsInBhdGhNYXBzIiwiY2FsbGJhY2siLCJkb25lIiwiZm9yRWFjaCIsInBhdGhNYXAiLCJuZXh0Iiwia2V5cyIsIk9iamVjdCIsImZpcnN0S2V5IiwiZmlyc3QiLCJzb3VyY2VQYXRoIiwidGFyZ2V0UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkOztJQUVNQyxZOzs7Ozs7OzREQUMyQ0MsUSxFQUFVQyxRLEVBQVVDLEksRUFBTTtBQUN2RUwsWUFBTU0sT0FBTixDQUNFSCxRQURGLEVBRUUsVUFBU0ksT0FBVCxFQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEIsWUFBTUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZRixPQUFaLENBQWI7QUFBQSxZQUNNSSxXQUFXQyxNQUFNSCxJQUFOLENBRGpCO0FBQUEsWUFFTUksYUFBYUYsUUFGbkI7QUFBQSxZQUU2QjtBQUN2QkcscUJBQWFQLFFBQVFNLFVBQVIsQ0FIbkI7O0FBS0FULGlCQUFTUyxVQUFULEVBQXFCQyxVQUFyQixFQUFpQ04sSUFBakM7QUFDRCxPQVRILEVBVUVILElBVkY7QUFZRDs7Ozs7O0FBR0hVLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCOztBQUVBLFNBQVNVLEtBQVQsQ0FBZUssS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhdGhNYXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhc3luYyA9IHJlcXVpcmUoJy4uL2FzeW5jJyk7XG5cbmNsYXNzIHBhdGhNYXBzVXRpbCB7XG4gIHN0YXRpYyBhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aEFuZFRhcmdldFBhdGgocGF0aE1hcHMsIGNhbGxiYWNrLCBkb25lKSB7XG4gICAgYXN5bmMuZm9yRWFjaChcbiAgICAgIHBhdGhNYXBzLFxuICAgICAgZnVuY3Rpb24ocGF0aE1hcCwgbmV4dCkge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGF0aE1hcCksXG4gICAgICAgICAgICAgIGZpcnN0S2V5ID0gZmlyc3Qoa2V5cyksXG4gICAgICAgICAgICAgIHNvdXJjZVBhdGggPSBmaXJzdEtleSwgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFBhdGggPSBwYXRoTWFwW3NvdXJjZVBhdGhdO1xuICBcbiAgICAgICAgY2FsbGJhY2soc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgbmV4dCk7XG4gICAgICB9LFxuICAgICAgZG9uZVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoTWFwc1V0aWw7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19