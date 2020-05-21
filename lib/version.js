"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var second = _necessary.arrayUtilities.second;

var Version = /*#__PURE__*/function () {
  function Version(majorNumber, minorNumber, patchNumber) {
    _classCallCheck(this, Version);

    this.majorNumber = majorNumber;
    this.minorNumber = minorNumber;
    this.patchNumber = patchNumber;
  }

  _createClass(Version, [{
    key: "getMajorNumber",
    value: function getMajorNumber() {
      return this.majorNumber;
    }
  }, {
    key: "getMinorNumber",
    value: function getMinorNumber() {
      return this.minorNumber;
    }
  }, {
    key: "getPatchNumber",
    value: function getPatchNumber() {
      return this.patchNumber;
    }
  }, {
    key: "bumpPatchNumber",
    value: function bumpPatchNumber() {
      this.patchNumber += 1; ///
    }
  }, {
    key: "toString",
    value: function toString() {
      var string = "".concat(this.majorNumber, ".").concat(this.minorNumber, ".").concat(this.patchNumber);
      return string;
    }
  }, {
    key: "asNumber",
    value: function asNumber() {
      var number = this.patchNumber * 1e0 + this.minorNumber * 1e6 + this.majorNumber * 1e12; ///

      return number;
    }
  }], [{
    key: "fromString",
    value: function fromString(string) {
      var majorNumber = majorNumberFromString(string),
          minorNumber = minorNumberFromString(string),
          patchNumber = patchNumberFromString(string),
          version = new Version(majorNumber, minorNumber, patchNumber);
      return version;
    }
  }, {
    key: "fromVersionNumber",
    value: function fromVersionNumber(versionNumber) {
      var number = versionNumber,
          ///
      majorNumber = majorNumberFromNumber(number),
          minorNumber = minorNumberFromNumber(number),
          patchNumber = patchNumberFromNumber(number),
          version = new Version(majorNumber, minorNumber, patchNumber);
      return version;
    }
  }]);

  return Version;
}();

exports["default"] = Version;

function majorNumberFromNumber(number) {
  var majorNumber = number !== null ? Math.floor(number / 1e12) : 0; ///

  return majorNumber;
}

function minorNumberFromNumber(number) {
  var minorNumber = number !== null ? Math.floor(number / 1e6) : 0; ///

  return minorNumber;
}

function patchNumberFromNumber(number) {
  var patchNumber = number !== null ? Math.floor(number / 1e0) : 0; ///

  return patchNumber;
}

function majorNumberFromString(string) {
  var majorNumber = 0;

  if (string) {
    var matches = string.match(/^(\d+)\.\d+\.\d+$/),
        secondMatch = second(matches);
    majorNumber = secondMatch; ///
  }

  return majorNumber;
}

function minorNumberFromString(string) {
  var minorNumber = 0;

  if (string) {
    var matches = string.match(/^\d+\.(\d+)\.\d+$/),
        secondMatch = second(matches);
    minorNumber = secondMatch; ///
  }

  return minorNumber;
}

function patchNumberFromString(string) {
  var patchNumber = 0;

  if (string) {
    var matches = string.match(/^\d+\.\d+\.(\d+)$/),
        secondMatch = second(matches);
    patchNumber = secondMatch; ///
  }

  return patchNumber;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24uanMiXSwibmFtZXMiOlsic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJWZXJzaW9uIiwibWFqb3JOdW1iZXIiLCJtaW5vck51bWJlciIsInBhdGNoTnVtYmVyIiwic3RyaW5nIiwibnVtYmVyIiwibWFqb3JOdW1iZXJGcm9tU3RyaW5nIiwibWlub3JOdW1iZXJGcm9tU3RyaW5nIiwicGF0Y2hOdW1iZXJGcm9tU3RyaW5nIiwidmVyc2lvbiIsInZlcnNpb25OdW1iZXIiLCJtYWpvck51bWJlckZyb21OdW1iZXIiLCJtaW5vck51bWJlckZyb21OdW1iZXIiLCJwYXRjaE51bWJlckZyb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFUUEsTSxHQUFXQyx5QixDQUFYRCxNOztJQUVhRSxPO0FBQ25CLG1CQUFZQyxXQUFaLEVBQXlCQyxXQUF6QixFQUFzQ0MsV0FBdEMsRUFBbUQ7QUFBQTs7QUFDakQsU0FBS0YsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLRixXQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtDLFdBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0MsV0FBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFdBQUtBLFdBQUwsSUFBb0IsQ0FBcEIsQ0FEZ0IsQ0FDUTtBQUN6Qjs7OytCQUVVO0FBQ1QsVUFBTUMsTUFBTSxhQUFNLEtBQUtILFdBQVgsY0FBMEIsS0FBS0MsV0FBL0IsY0FBOEMsS0FBS0MsV0FBbkQsQ0FBWjtBQUVBLGFBQU9DLE1BQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsTUFBTSxHQUFHLEtBQUtGLFdBQUwsR0FBbUIsR0FBbkIsR0FBeUIs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QUFBLFFBQ01DLFdBQVcsR0FBR3BCLE1BQU0sQ0FBQ2tCLE9BQUQsQ0FEMUI7QUFHQWIsSUFBQUEsV0FBVyxHQUFHZSxXQUFkLENBSlUsQ0FJa0I7QUFDN0I7O0FBRUQsU0FBT2YsV0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnNpb24ge1xuICBjb25zdHJ1Y3RvcihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgICB0aGlzLnBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXI7XG4gIH1cblxuICBnZXRNYWpvck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5tYWpvck51bWJlcjtcbiAgfVxuXG4gIGdldE1pbm9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1pbm9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGF0Y2hOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0Y2hOdW1iZXI7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5wYXRjaE51bWJlciArPSAxOyAgLy8vXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9LiR7dGhpcy5wYXRjaE51bWJlcn1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFzTnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMucGF0Y2hOdW1iZXIgKiAxZTAgKyB0aGlzLm1pbm9yTnVtYmVyICogMWU2ICsgdGhpcy5tYWpvck51bWJlciAqIDFlMTI7IC8vL1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uTnVtYmVyKHZlcnNpb25OdW1iZXIpIHtcbiAgICBjb25zdCBudW1iZXIgPSB2ZXJzaW9uTnVtYmVyLCAvLy9cbiAgICAgICAgICBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1ham9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyAxZTEyKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWFqb3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgbWlub3JOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlNikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1pbm9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IHBhdGNoTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyAxZTApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBwYXRjaE51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWFqb3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eKFxcZCspXFwuXFxkK1xcLlxcZCskLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtYWpvck51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWFqb3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIG1pbm9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IG1pbm9yTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC4oXFxkKylcXC5cXGQrJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgbWlub3JOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG1pbm9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwYXRjaE51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBwYXRjaE51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL15cXGQrXFwuXFxkK1xcLihcXGQrKSQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGNoTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRjaE51bWJlcjtcbn1cbiJdfQ==