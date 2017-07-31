'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var asyncUtil = require('../util/async');

var pathMapsUtil = function () {
  function pathMapsUtil() {
    _classCallCheck(this, pathMapsUtil);
  }

  _createClass(pathMapsUtil, null, [{
    key: 'asyncForEachWithSourcePathAndTargetPath',
    value: function asyncForEachWithSourcePathAndTargetPath(pathMaps, callback, done) {
      asyncUtil.forEach(pathMaps, function (pathMap, next) {
        var sourcePath = pathMap['sourcePath'],
            targetPath = pathMap['targetPath'];

        callback(sourcePath, targetPath, next);
      }, done);
    }
  }]);

  return pathMapsUtil;
}();

module.exports = pathMapsUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL3BhdGhNYXBzLmpzIl0sIm5hbWVzIjpbImFzeW5jVXRpbCIsInJlcXVpcmUiLCJwYXRoTWFwc1V0aWwiLCJwYXRoTWFwcyIsImNhbGxiYWNrIiwiZG9uZSIsImZvckVhY2giLCJwYXRoTWFwIiwibmV4dCIsInNvdXJjZVBhdGgiLCJ0YXJnZXRQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsZUFBUixDQUFsQjs7SUFFTUMsWTs7Ozs7Ozs0REFDMkNDLFEsRUFBVUMsUSxFQUFVQyxJLEVBQU07QUFDdkVMLGdCQUFVTSxPQUFWLENBQ0VILFFBREYsRUFFRSxVQUFTSSxPQUFULEVBQWtCQyxJQUFsQixFQUF3QjtBQUN0QixZQUFNQyxhQUFhRixRQUFRLFlBQVIsQ0FBbkI7QUFBQSxZQUNNRyxhQUFhSCxRQUFRLFlBQVIsQ0FEbkI7O0FBR0FILGlCQUFTSyxVQUFULEVBQXFCQyxVQUFyQixFQUFpQ0YsSUFBakM7QUFDRCxPQVBILEVBUUVILElBUkY7QUFVRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJWLFlBQWpCIiwiZmlsZSI6InBhdGhNYXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhc3luY1V0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FzeW5jJyk7XG5cbmNsYXNzIHBhdGhNYXBzVXRpbCB7XG4gIHN0YXRpYyBhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aEFuZFRhcmdldFBhdGgocGF0aE1hcHMsIGNhbGxiYWNrLCBkb25lKSB7XG4gICAgYXN5bmNVdGlsLmZvckVhY2goXG4gICAgICBwYXRoTWFwcyxcbiAgICAgIGZ1bmN0aW9uKHBhdGhNYXAsIG5leHQpIHtcbiAgICAgICAgY29uc3Qgc291cmNlUGF0aCA9IHBhdGhNYXBbJ3NvdXJjZVBhdGgnXSxcbiAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IHBhdGhNYXBbJ3RhcmdldFBhdGgnXTtcbiAgXG4gICAgICAgIGNhbGxiYWNrKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIG5leHQpO1xuICAgICAgfSxcbiAgICAgIGRvbmVcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aE1hcHNVdGlsO1xuIl19