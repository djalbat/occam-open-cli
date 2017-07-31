'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var asyncUtil = function () {
  function asyncUtil() {
    _classCallCheck(this, asyncUtil);
  }

  _createClass(asyncUtil, null, [{
    key: 'forEach',
    value: function forEach(array, callback, done) {
      var arrayLength = array.length;

      var index = -1;

      var next = function next() {
        index++;

        if (index === arrayLength) {
          done();
        } else {
          var element = array[index];

          callback(element, next);
        }
      };

      next();
    }
  }]);

  return asyncUtil;
}();

module.exports = asyncUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2FzeW5jLmpzIl0sIm5hbWVzIjpbImFzeW5jVXRpbCIsImFycmF5IiwiY2FsbGJhY2siLCJkb25lIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsIm5leHQiLCJlbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxTOzs7Ozs7OzRCQUNXQyxLLEVBQU9DLFEsRUFBVUMsSSxFQUFNO0FBQ3BDLFVBQU1DLGNBQWNILE1BQU1JLE1BQTFCOztBQUVBLFVBQUlDLFFBQVEsQ0FBQyxDQUFiOztBQUVBLFVBQU1DLE9BQU8sU0FBU0EsSUFBVCxHQUFnQjtBQUMzQkQ7O0FBRUEsWUFBSUEsVUFBVUYsV0FBZCxFQUEyQjtBQUN6QkQ7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFNSyxVQUFVUCxNQUFNSyxLQUFOLENBQWhCOztBQUVBSixtQkFBU00sT0FBVCxFQUFrQkQsSUFBbEI7QUFDRDtBQUNGLE9BVkQ7O0FBWUFBO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCVixTQUFqQiIsImZpbGUiOiJhc3luYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgYXN5bmNVdGlsIHtcbiAgc3RhdGljIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lKSB7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgXG4gICAgbGV0IGluZGV4ID0gLTE7XG4gIFxuICAgIGNvbnN0IG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgaW5kZXgrKztcbiAgXG4gICAgICBpZiAoaW5kZXggPT09IGFycmF5TGVuZ3RoKSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gIFxuICAgICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBuZXh0KCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3luY1V0aWw7XG4iXX0=