'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var async = function () {
  function async() {
    _classCallCheck(this, async);
  }

  _createClass(async, null, [{
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

  return async;
}();

module.exports = async;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hc3luYy5qcyJdLCJuYW1lcyI6WyJhc3luYyIsImFycmF5IiwiY2FsbGJhY2siLCJkb25lIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsIm5leHQiLCJlbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLOzs7Ozs7OzRCQUNXQyxLLEVBQU9DLFEsRUFBVUMsSSxFQUFNO0FBQ3BDLFVBQU1DLGNBQWNILE1BQU1JLE1BQTFCOztBQUVBLFVBQUlDLFFBQVEsQ0FBQyxDQUFiOztBQUVBLFVBQU1DLE9BQU8sU0FBU0EsSUFBVCxHQUFnQjtBQUMzQkQ7O0FBRUEsWUFBSUEsVUFBVUYsV0FBZCxFQUEyQjtBQUN6QkQ7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFNSyxVQUFVUCxNQUFNSyxLQUFOLENBQWhCOztBQUVBSixtQkFBU00sT0FBVCxFQUFrQkQsSUFBbEI7QUFDRDtBQUNGLE9BVkQ7O0FBWUFBO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCVixLQUFqQiIsImZpbGUiOiJhc3luYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgYXN5bmMge1xuICBzdGF0aWMgZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICBcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgXG4gICAgY29uc3QgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBpbmRleCsrO1xuICBcbiAgICAgIGlmIChpbmRleCA9PT0gYXJyYXlMZW5ndGgpIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcbiAgXG4gICAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIG5leHQoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xuIl19