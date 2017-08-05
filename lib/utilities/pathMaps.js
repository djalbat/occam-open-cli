'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var async = necessary.async;

var pathMapsUtilities = function () {
  function pathMapsUtilities() {
    _classCallCheck(this, pathMapsUtilities);
  }

  _createClass(pathMapsUtilities, null, [{
    key: 'asyncForEachWithSourcePathAndTargetPath',
    value: function asyncForEachWithSourcePathAndTargetPath(pathMaps, callback, done) {
      async.forEach(pathMaps, function (pathMap, index, next) {
        var sourcePath = pathMap['sourcePath'],
            targetPath = pathMap['targetPath'];

        callback(sourcePath, targetPath, next);
      }, done);
    }
  }]);

  return pathMapsUtilities;
}();

module.exports = pathMapsUtilities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvcGF0aE1hcHMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImFzeW5jIiwicGF0aE1hcHNVdGlsaXRpZXMiLCJwYXRoTWFwcyIsImNhbGxiYWNrIiwiZG9uZSIsImZvckVhY2giLCJwYXRoTWFwIiwiaW5kZXgiLCJuZXh0Iiwic291cmNlUGF0aCIsInRhcmdldFBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztJQUVRQyxLLEdBQVVGLFMsQ0FBVkUsSzs7SUFFRkMsaUI7Ozs7Ozs7NERBQzJDQyxRLEVBQVVDLFEsRUFBVUMsSSxFQUFNO0FBQ3ZFSixZQUFNSyxPQUFOLENBQ0VILFFBREYsRUFFRSxVQUFTSSxPQUFULEVBQWtCQyxLQUFsQixFQUF5QkMsSUFBekIsRUFBK0I7QUFDN0IsWUFBTUMsYUFBYUgsUUFBUSxZQUFSLENBQW5CO0FBQUEsWUFDTUksYUFBYUosUUFBUSxZQUFSLENBRG5COztBQUdBSCxpQkFBU00sVUFBVCxFQUFxQkMsVUFBckIsRUFBaUNGLElBQWpDO0FBQ0QsT0FQSCxFQVFFSixJQVJGO0FBVUQ7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCWCxpQkFBakIiLCJmaWxlIjoicGF0aE1hcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFzeW5jIH0gPSBuZWNlc3Nhcnk7XG5cbmNsYXNzIHBhdGhNYXBzVXRpbGl0aWVzIHtcbiAgc3RhdGljIGFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aChwYXRoTWFwcywgY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBhc3luYy5mb3JFYWNoKFxuICAgICAgcGF0aE1hcHMsXG4gICAgICBmdW5jdGlvbihwYXRoTWFwLCBpbmRleCwgbmV4dCkge1xuICAgICAgICBjb25zdCBzb3VyY2VQYXRoID0gcGF0aE1hcFsnc291cmNlUGF0aCddLFxuICAgICAgICAgICAgICB0YXJnZXRQYXRoID0gcGF0aE1hcFsndGFyZ2V0UGF0aCddO1xuICBcbiAgICAgICAgY2FsbGJhY2soc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgbmV4dCk7XG4gICAgICB9LFxuICAgICAgZG9uZVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoTWFwc1V0aWxpdGllcztcbiJdfQ==