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
  }, {
    key: 'asyncForEachWithSourcePath',
    value: function asyncForEachWithSourcePath(pathMaps, callback, done) {
      async.forEach(pathMaps, function (pathMap, next) {
        var keys = Object.keys(pathMap),
            firstKey = first(keys),
            sourcePath = firstKey; ///

        callback(sourcePath, next);
      }, done);
    }
  }]);

  return pathMapsUtil;
}();

module.exports = pathMapsUtil;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhdGhNYXBzLmpzIl0sIm5hbWVzIjpbImFzeW5jIiwicmVxdWlyZSIsInBhdGhNYXBzVXRpbCIsInBhdGhNYXBzIiwiY2FsbGJhY2siLCJkb25lIiwiZm9yRWFjaCIsInBhdGhNYXAiLCJuZXh0Iiwia2V5cyIsIk9iamVjdCIsImZpcnN0S2V5IiwiZmlyc3QiLCJzb3VyY2VQYXRoIiwidGFyZ2V0UGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkOztJQUVNQyxZOzs7Ozs7OzREQUMyQ0MsUSxFQUFVQyxRLEVBQVVDLEksRUFBTTtBQUN2RUwsWUFBTU0sT0FBTixDQUNFSCxRQURGLEVBRUUsVUFBU0ksT0FBVCxFQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEIsWUFBTUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZRixPQUFaLENBQWI7QUFBQSxZQUNNSSxXQUFXQyxNQUFNSCxJQUFOLENBRGpCO0FBQUEsWUFFTUksYUFBYUYsUUFGbkI7QUFBQSxZQUU2QjtBQUN2QkcscUJBQWFQLFFBQVFNLFVBQVIsQ0FIbkI7O0FBS0FULGlCQUFTUyxVQUFULEVBQXFCQyxVQUFyQixFQUFpQ04sSUFBakM7QUFDRCxPQVRILEVBVUVILElBVkY7QUFZRDs7OytDQUVpQ0YsUSxFQUFVQyxRLEVBQVVDLEksRUFBTTtBQUMxREwsWUFBTU0sT0FBTixDQUNFSCxRQURGLEVBRUUsVUFBU0ksT0FBVCxFQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEIsWUFBTUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZRixPQUFaLENBQWI7QUFBQSxZQUNNSSxXQUFXQyxNQUFNSCxJQUFOLENBRGpCO0FBQUEsWUFFTUksYUFBYUYsUUFGbkIsQ0FEc0IsQ0FHTzs7QUFFN0JQLGlCQUFTUyxVQUFULEVBQXFCTCxJQUFyQjtBQUNELE9BUkgsRUFTRUgsSUFURjtBQVdEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQmQsWUFBakI7O0FBRUEsU0FBU1UsS0FBVCxDQUFlSyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGF0aE1hcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFzeW5jID0gcmVxdWlyZSgnLi4vYXN5bmMnKTtcblxuY2xhc3MgcGF0aE1hcHNVdGlsIHtcbiAgc3RhdGljIGFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aChwYXRoTWFwcywgY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBhc3luYy5mb3JFYWNoKFxuICAgICAgcGF0aE1hcHMsXG4gICAgICBmdW5jdGlvbihwYXRoTWFwLCBuZXh0KSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXRoTWFwKSxcbiAgICAgICAgICAgICAgZmlyc3RLZXkgPSBmaXJzdChrZXlzKSxcbiAgICAgICAgICAgICAgc291cmNlUGF0aCA9IGZpcnN0S2V5LCAvLy9cbiAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IHBhdGhNYXBbc291cmNlUGF0aF07XG4gIFxuICAgICAgICBjYWxsYmFjayhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBuZXh0KTtcbiAgICAgIH0sXG4gICAgICBkb25lXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aChwYXRoTWFwcywgY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBhc3luYy5mb3JFYWNoKFxuICAgICAgcGF0aE1hcHMsXG4gICAgICBmdW5jdGlvbihwYXRoTWFwLCBuZXh0KSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXRoTWFwKSxcbiAgICAgICAgICAgICAgZmlyc3RLZXkgPSBmaXJzdChrZXlzKSxcbiAgICAgICAgICAgICAgc291cmNlUGF0aCA9IGZpcnN0S2V5OyAvLy9cbiAgXG4gICAgICAgIGNhbGxiYWNrKHNvdXJjZVBhdGgsIG5leHQpO1xuICAgICAgfSxcbiAgICAgIGRvbmVcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aE1hcHNVdGlsO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==