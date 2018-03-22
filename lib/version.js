'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Version = function () {
  function Version(number) {
    _classCallCheck(this, Version);

    this.number = number;
  }

  _createClass(Version, [{
    key: 'getNumber',
    value: function getNumber() {
      return this.number;
    }
  }, {
    key: 'bumpPatchNumber',
    value: function bumpPatchNumber() {
      this.number += 1; ///
    }
  }, {
    key: 'asString',
    value: function asString() {
      var majorNumber = 0,
          ///
      minorNumber = 0,
          ///
      patchNumber = this.number,
          ///
      string = majorNumber + '.' + minorNumber + '.' + patchNumber;

      return string;
    }
  }], [{
    key: 'fromVersionNumber',
    value: function fromVersionNumber(versionNumber) {
      var number = versionNumber !== null ? versionNumber : 0,
          version = new Version(number);

      return version;
    }
  }]);

  return Version;
}();

module.exports = Version;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIlZlcnNpb24iLCJudW1iZXIiLCJtYWpvck51bWJlciIsIm1pbm9yTnVtYmVyIiwicGF0Y2hOdW1iZXIiLCJzdHJpbmciLCJ2ZXJzaW9uTnVtYmVyIiwidmVyc2lvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTztBQUNKLG1CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsV0FBS0EsTUFBTCxJQUFlLENBQWYsQ0FEZ0IsQ0FDRztBQUNwQjs7OytCQUVVO0FBQ1QsVUFBTUMsY0FBYyxDQUFwQjtBQUFBLFVBQXdCO0FBQ2xCQyxvQkFBYyxDQURwQjtBQUFBLFVBQ3dCO0FBQ2xCQyxvQkFBYyxLQUFLSCxNQUZ6QjtBQUFBLFVBRWtDO0FBQzVCSSxlQUFZSCxXQUFaLFNBQTJCQyxXQUEzQixTQUEwQ0MsV0FIaEQ7O0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7c0NBRXdCQyxhLEVBQWU7QUFDdEMsVUFBTUwsU0FBVUssa0JBQWtCLElBQW5CLEdBQ0dBLGFBREgsR0FFSyxDQUZwQjtBQUFBLFVBR01DLFVBQVUsSUFBSVAsT0FBSixDQUFZQyxNQUFaLENBSGhCOztBQUtBLGFBQU9NLE9BQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJULE9BQWpCIiwiZmlsZSI6InZlcnNpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFZlcnNpb24ge1xuICBjb25zdHJ1Y3RvcihudW1iZXIpIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5udW1iZXIgKz0gMTsgIC8vL1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSAwLCAgLy8vXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSAwLCAgLy8vXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSB0aGlzLm51bWJlciwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGAke21ham9yTnVtYmVyfS4ke21pbm9yTnVtYmVyfS4ke3BhdGNoTnVtYmVyfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uTnVtYmVyKHZlcnNpb25OdW1iZXIpIHtcbiAgICBjb25zdCBudW1iZXIgPSAodmVyc2lvbk51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb25OdW1iZXIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVyc2lvbjtcbiJdfQ==